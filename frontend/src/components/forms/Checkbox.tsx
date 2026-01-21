import { forwardRef } from 'react';
import { CheckboxProps } from './types';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            label,
            error,
            helperText,
            disabled,
            className = '',
            indeterminate,
            ...props
        },
        ref
    ) => {
        return (
            <div className={className}>
                <label className={`inline-flex items-start ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                    <div className="relative flex items-center mt-0.5">
                        <input
                            type="checkbox"
                            ref={ref}
                            disabled={disabled}
                            className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-neutral-300 bg-white transition-all checked:border-primary-600 checked:bg-primary-600 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:border-neutral-200 disabled:bg-neutral-100 disabled:checked:bg-neutral-400"
                            {...props}
                        />
                        <svg
                            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            width="14"
                            height="14"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>

                    {label && (
                        <span className={`ml-3 text-sm ${disabled ? 'text-neutral-400' : 'text-neutral-700'}`}>
                            {label}
                        </span>
                    )}
                </label>

                {(helperText || error) && (
                    <p className={`mt-1 ml-8 text-sm ${error ? 'text-error-600' : 'text-neutral-500'}`}>
                        {error || helperText}
                    </p>
                )}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
