import { RadioGroupProps } from './types';

const RadioGroup = ({
    name,
    options,
    value,
    onChange,
    label,
    error,
    required,
    disabled,
    className = '',
}: RadioGroupProps) => {
    return (
        <div className={className}>
            {label && (
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    {label}
                    {required && <span className="text-error-500 ml-1">*</span>}
                </label>
            )}

            <div className="space-y-2">
                {options.map((option) => (
                    <label
                        key={option.value}
                        className={`flex items-center ${disabled || option.disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
                            }`}
                    >
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={value === option.value}
                                onChange={() => !disabled && !option.disabled && onChange && onChange(option.value)}
                                disabled={disabled || option.disabled}
                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-neutral-300 bg-white transition-all checked:border-primary-600 checked:bg-primary-600 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:border-neutral-200 disabled:bg-neutral-100"
                            />
                            <div className="pointer-events-none absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 transition-opacity peer-checked:opacity-100"></div>
                        </div>
                        <span className={`ml-3 text-sm ${disabled || option.disabled ? 'text-neutral-400' : 'text-neutral-700'}`}>
                            {option.label}
                        </span>
                    </label>
                ))}
            </div>

            {error && <p className="mt-1.5 text-sm text-error-600">{error}</p>}
        </div>
    );
};

export default RadioGroup;
