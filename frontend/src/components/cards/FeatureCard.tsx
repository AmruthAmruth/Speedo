import type { FeatureCardProps } from './types';
import Card from './Card';

const FeatureCard = ({
    title,
    description,
    icon,
    action,
    className = '',
}: FeatureCardProps) => {
    return (
        <Card className={`h-full ${className}`} variant="outlined">
            <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600">
                    {icon}
                </div>

                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {title}
                </h3>

                <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                {action && (
                    <div className="mt-auto pt-4 border-t border-neutral-100">
                        {action}
                    </div>
                )}
            </div>
        </Card>
    );
};

export default FeatureCard;
