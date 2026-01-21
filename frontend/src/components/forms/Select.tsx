import { useState, useRef, useEffect } from 'react';
import { SelectProps, SelectOption } from './types';

const Select = ({
    label,
    error,
    helperText,
    required,
    disabled,
    options,
    placeholder = 'Select an option',
    size = 'md',
    fullWidth = false,
    className = '',
    value,
    onChange,
    ...props
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (option: SelectOption) => {
        if (option.disabled) return;

        // Create a synthetic event to match standard select behavior
        const event = {
            target: { value: option.value },
            currentTarget: { value: option.value }
        } as React.ChangeEvent<HTMLSelectElement>;

        if (onChange) {
            onChange(event);
        }
        setIsOpen(false);
        setSearchTerm('');
    };

    const selectedOption = options.find(opt => opt.value === value);

    // Filter options based on search term
    const filteredOptions = options.filter(opt =>
        opt.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Size styles
    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2.5 text-base',
        lg: 'px-5 py-3 text-lg',
    };

    // Base styles
    const baseStyles = `
    w-full rounded-lg border transition-all duration-200 bg-white text-left flex items-center justify-between
    focus:outline-none focus:ring-2 focus:ring-offset-1
    disabled:bg-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-500
  `;

    // State-based styles
    const stateStyles = error
        ? 'border-error-500 focus:border-error-500 focus:ring-error-500'
        : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500 hover:border-neutral-400';

    return (
        <div
            className={`${fullWidth ? 'w-full' : 'w-64'} ${className}`}
            ref={containerRef}
        >
            {/* Label */}
            {label && (
                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    {label}
                    {required && <span className="text-error-500 ml-1">*</span>}
                </label>
            )}

            <div className="relative">
                {/* Trigger Button */}
                <button
                    type="button"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    disabled={disabled}
                    className={`
            ${baseStyles}
            ${sizeStyles[size]}
            ${stateStyles}
            ${isOpen ? 'ring-2 ring-primary-500 border-primary-500' : ''}
          `}
                >
                    <span className={`truncate ${!selectedOption ? 'text-neutral-400' : 'text-neutral-900'}`}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    <svg
                        className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-neutral-200 max-h-60 overflow-auto focus:outline-none animate-in fade-in zoom-in-95 duration-100">
                        {/* Search Input (only if more than 5 options) */}
                        {options.length > 5 && (
                            <div className="sticky top-0 p-2 bg-white border-b border-neutral-100">
                                <input
                                    type="text"
                                    className="w-full px-3 py-1.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                        )}

                        {/* Options List */}
                        <ul className="py-1">
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option) => (
                                    <li
                                        key={option.value}
                                        className={`
                      px-4 py-2 text-sm cursor-pointer transition-colors duration-150
                      ${option.disabled
                                                ? 'text-neutral-400 cursor-not-allowed bg-neutral-50'
                                                : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
                                            }
                      ${option.value === value ? 'bg-primary-50 text-primary-700 font-medium' : ''}
                    `}
                                        onClick={() => handleSelect(option)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{option.label}</span>
                                            {option.value === value && (
                                                <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li className="px-4 py-3 text-sm text-neutral-500 text-center">
                                    No options found
                                </li>
                            )}
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

export default Select;
