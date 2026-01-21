import { forwardRef } from 'react';
import { InputProps } from './types';

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            helperText,
            required,
            disabled,
            leftIcon,
            rightIcon,
            size = 'md',
            fullWidth = false,
            className = '',
            ...props
        },
        ref
    ) => {
        // Size styles
        const sizeStyles = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2.5 text-base',
            lg: 'px-5 py-3 text-lg',
        };

        // Base input styles
        const baseInputStyles = `
      w-full rounded-lg border transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-1
      disabled:bg-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-500
      placeholder:text-neutral-400
    `;

        // State-based styles
        const stateStyles = error
            ? 'border-error-500 focus:border-error-500 focus:ring-error-500'
            : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500 hover:border-neutral-400';

        // Icon padding adjustments
        const iconPaddingStyles = leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : '';

        return (
            <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
                {/* Label */}
                {label && (
                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                        {label}
                        {required && <span className="text-error-500 ml-1">*</span>}
                    </label>
                )}

                {/* Input Container */}
                <div className="relative">
                    {/* Left Icon */}
                    {leftIcon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                            {leftIcon}
                        </div>
                    )}

                    {/* Input Field */}
                    <input
                        ref={ref}
                        disabled={disabled}
                        required={required}
                        className={`
              ${baseInputStyles}
              ${sizeStyles[size]}
              ${stateStyles}
              ${iconPaddingStyles}
            `}
                        {...props}
                    />

                    {/* Right Icon */}
                    {rightIcon && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                            {rightIcon}
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
    }
);

Input.displayName = 'Input';

export default Input;
