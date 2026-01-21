import type { StatCardProps } from './types';
import Card from './Card';

const StatCard = ({
    title,
    value,
    icon,
    trend,
    className = '',
}: StatCardProps) => {
    return (
        <Card className={`flex flex-col justify-between h-full ${className}`}>
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="text-sm font-medium text-neutral-500 mb-1">{title}</p>
                    <h3 className="text-2xl font-bold text-neutral-900">{value}</h3>
                </div>
                {icon && (
                    <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                        {icon}
                    </div>
                )}
            </div>

            {trend && (
                <div className="flex items-center text-sm">
                    <span
                        className={`
              font-medium flex items-center gap-1
              ${trend.direction === 'up' ? 'text-success-600' :
                                trend.direction === 'down' ? 'text-warning-600' :
                                    'text-neutral-500'}
            `}
                    >
                        {trend.direction === 'up' && (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        )}
                        {trend.direction === 'down' && (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                            </svg>
                        )}
                        {trend.value}
                    </span>
                    {trend.label && (
                        <span className="text-neutral-500 ml-2">{trend.label}</span>
                    )}
                </div>
            )}
        </Card>
    );
};

export default StatCard;
