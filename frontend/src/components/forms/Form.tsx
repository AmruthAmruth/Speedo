import { FormHTMLAttributes, ReactNode } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    onSubmit: (e: React.FormEvent) => void;
    className?: string;
    title?: string;
    description?: string;
}

const Form = ({
    children,
    onSubmit,
    className = '',
    title,
    description,
    ...props
}: FormProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(e);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`space-y-6 ${className}`}
            {...props}
        >
            {(title || description) && (
                <div className="mb-6">
                    {title && (
                        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="mt-2 text-sm text-neutral-600">
                            {description}
                        </p>
                    )}
                </div>
            )}
            {children}
        </form>
    );
};

export default Form;
