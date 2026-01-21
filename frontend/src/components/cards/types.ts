import { ReactNode } from 'react';

export type CardVariant = 'elevated' | 'outlined' | 'flat';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps {
    children: ReactNode;
    variant?: CardVariant;
    padding?: CardPadding;
    className?: string;
    onClick?: () => void;
}

export interface StatCardProps {
    title: string;
    value: string | number;
    icon?: ReactNode;
    trend?: {
        value: string | number;
        direction: 'up' | 'down' | 'neutral';
        label?: string;
    };
    className?: string;
}

export interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    action?: ReactNode;
    className?: string;
}
