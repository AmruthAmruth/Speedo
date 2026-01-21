import type { CardProps } from './types';

const Card = ({
    children,
    variant = 'elevated',
    padding = 'md',
    className = '',
    onClick,
}: CardProps) => {
    const baseStyles = 'rounded-xl transition-all duration-200 bg-white';

    const variants = {
        elevated: 'shadow-sm border border-neutral-100 hover:shadow-md',
        outlined: 'border border-neutral-200 hover:border-neutral-300',
        flat: 'bg-neutral-50 hover:bg-neutral-100',
    };

    const paddings = {
        none: '',
        sm: 'p-3',
        md: 'p-5',
        lg: 'p-8',
    };

    return (
        <div
            className={`
        ${baseStyles}
        ${variants[variant]}
        ${paddings[padding]}
        ${onClick ? 'cursor-pointer active:scale-[0.99]' : ''}
        ${className}
      `}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card;
