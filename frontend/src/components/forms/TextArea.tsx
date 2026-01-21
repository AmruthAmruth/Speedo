import { forwardRef, useEffect, useRef, useState } from 'react';
import { TextAreaProps } from './types';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
        {
            label,
            error,
            helperText,
            required,
            disabled,
            autoResize = false,
            showCharCount = false,
            maxLength,
            fullWidth = false,
            className = '',
            onChange,
            value,
            ...props
        },
        ref
    ) => {
        const internalRef = useRef<HTMLTextAreaElement>(null);
        const [charCount, setCharCount] = useState(0);

        // Handle auto-resize
        useEffect(() => {
            if (autoResize && internalRef.current) {
                internalRef.current.style.height = 'auto';
                internalRef.current.style.height = `${internalRef.current.scrollHeight}px`;
            }
        }, [value, autoResize]);

        // Handle character count
        useEffect(() => {
            if (typeof value === 'string') {
                setCharCount(value.length);
            }
        }, [value]);

        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (showCharCount) {
                setCharCount(e.target.value.length);
            }
            if (onChange) {
                onChange(e);
            }
        };

        // Base styles
        const baseInputStyles = `
      w-full rounded-lg border transition-all duration-200 p-3
      focus:outline-none focus:ring-2 focus:ring-offset-1
      disabled:bg-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-500
      placeholder:text-neutral-400
    `;

        // State-based styles
        const stateStyles = error
            ? 'border-error-500 focus:border-error-500 focus:ring-error-500'
            : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500 hover:border-neutral-400';

        return (
            <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
                {/* Label */}
                {label && (
                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                        {label}
                        {required && <span className="text-error-500 ml-1">*</span>}
                    </label>
                )}

                <div className="relative">
                    <textarea
                        ref={(node) => {
                            // Handle both refs
                            if (typeof ref === 'function') {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
                            }
                            (internalRef as any).current = node;
                        }}
                        disabled={disabled}
                        required={required}
                        maxLength={maxLength}
                        onChange={handleChange}
                        value={value}
                        className={`
              ${baseInputStyles}
              ${stateStyles}
              min-h-[100px]
            `}
                        {...props}
                    />
                </div>

                {/* Helper Text, Error, and Char Count */}
                <div className="flex justify-between items-start mt-1.5">
                    <div className="flex-1">
                        {(helperText || error) && (
                            <p className={`text-sm ${error ? 'text-error-600' : 'text-neutral-500'}`}>
                                {error || helperText}
                            </p>
                        )}
                    </div>

                    {showCharCount && (
                        <span className={`text-xs ml-2 ${maxLength && charCount >= maxLength ? 'text-error-600 font-medium' : 'text-neutral-400'
                            }`}>
                            {charCount} {maxLength && `/ ${maxLength}`}
                        </span>
                    )}
                </div>
            </div>
        );
    }
);

TextArea.displayName = 'TextArea';

export default TextArea;
