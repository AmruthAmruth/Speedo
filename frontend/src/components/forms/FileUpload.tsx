import { useRef, useState, DragEvent, ChangeEvent } from 'react';
import { FileUploadProps } from './types';

const FileUpload = ({
    label,
    error,
    helperText,
    required,
    disabled,
    onFileChange,
    accept,
    maxSize, // in MB
    showPreview = true,
    dragAndDrop = true,
    className = '',
    fullWidth = false,
    ...props
}: FileUploadProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!disabled && dragAndDrop) {
            setIsDragging(true);
        }
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        if (!disabled && dragAndDrop && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFiles(e.target.files);
        }
    };

    const handleFiles = (files: FileList) => {
        // Validate file size if maxSize is provided
        if (maxSize) {
            const validFiles = new DataTransfer();
            let hasInvalidFile = false;

            Array.from(files).forEach(file => {
                if (file.size <= maxSize * 1024 * 1024) {
                    validFiles.items.add(file);
                } else {
                    hasInvalidFile = true;
                }
            });

            if (hasInvalidFile) {
                alert(`Some files exceed the maximum size of ${maxSize}MB`);
            }

            files = validFiles.files;
        }

        setSelectedFiles(files);
        if (onFileChange) {
            onFileChange(files);
        }

        // Generate previews for images
        if (showPreview) {
            const newPreviewUrls: string[] = [];
            Array.from(files).forEach(file => {
                if (file.type.startsWith('image/')) {
                    const url = URL.createObjectURL(file);
                    newPreviewUrls.push(url);
                }
            });

            // Cleanup old previews
            previewUrls.forEach(url => URL.revokeObjectURL(url));
            setPreviewUrls(newPreviewUrls);
        }
    };

    const clearFiles = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedFiles(null);
        setPreviewUrls([]);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        if (onFileChange) {
            onFileChange(null);
        }
    };

    const triggerFileInput = () => {
        if (!disabled && inputRef.current) {
            inputRef.current.click();
        }
    };

    // Styles
    const containerStyles = `
    relative border-2 border-dashed rounded-lg p-6 transition-all duration-200
    flex flex-col items-center justify-center text-center cursor-pointer
    ${isDragging
            ? 'border-primary-500 bg-primary-50'
            : error
                ? 'border-error-300 bg-error-50 hover:bg-error-100'
                : 'border-neutral-300 bg-neutral-50 hover:bg-neutral-100 hover:border-primary-400'
        }
    ${disabled ? 'opacity-50 cursor-not-allowed hover:bg-neutral-50 hover:border-neutral-300' : ''}
  `;

    return (
        <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
            {/* Label */}
            {label && (
                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    {label}
                    {required && <span className="text-error-500 ml-1">*</span>}
                </label>
            )}

            <div
                className={containerStyles}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={triggerFileInput}
            >
                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    onChange={handleFileInput}
                    accept={accept}
                    disabled={disabled}
                    {...props}
                />

                {/* Upload Icon & Text */}
                {!selectedFiles || selectedFiles.length === 0 ? (
                    <>
                        <div className={`p-3 rounded-full mb-3 ${isDragging ? 'bg-primary-100 text-primary-600' : 'bg-neutral-200 text-neutral-500'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-neutral-700">
                            <span className="text-primary-600">Click to upload</span>
                            {dragAndDrop && ' or drag and drop'}
                        </p>
                        <p className="text-xs text-neutral-500 mt-1">
                            {accept ? accept.split(',').join(', ') : 'Any file'}
                            {maxSize ? ` (max. ${maxSize}MB)` : ''}
                        </p>
                    </>
                ) : (
                    <div className="w-full">
                        {/* File List */}
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-primary-700">
                                {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''} selected
                            </span>
                            <button
                                type="button"
                                onClick={clearFiles}
                                className="text-xs text-error-600 hover:text-error-700 font-medium hover:underline"
                            >
                                Remove all
                            </button>
                        </div>

                        {/* Previews */}
                        {showPreview && previewUrls.length > 0 && (
                            <div className="grid grid-cols-3 gap-2 mt-3">
                                {previewUrls.map((url, index) => (
                                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-neutral-200">
                                        <img src={url} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* File Names List (if no preview or mixed files) */}
                        <ul className="mt-3 space-y-1 text-left">
                            {Array.from(selectedFiles).map((file, index) => (
                                <li key={index} className="text-xs text-neutral-600 flex items-center truncate">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-1.5 flex-shrink-0">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    {file.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Helper Text or Error Message */}
            {(helperText || error) && (
                <p className={`mt-1.5 text-sm ${error ? 'text-error-600' : 'text-neutral-500'}`}>
                    {error || helperText}
                </p>
            )}
        </div>
    );
};

export default FileUpload;
