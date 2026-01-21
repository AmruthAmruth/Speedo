import type { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ButtonHTMLAttributes } from 'react';

// Base props shared across form components
export interface BaseFormProps {
    label?: ReactNode;
    error?: string;
    helperText?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
}

// Input component props
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseFormProps {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

// TextArea component props
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, BaseFormProps {
    autoResize?: boolean;
    showCharCount?: boolean;
    maxLength?: number;
    fullWidth?: boolean;
}

// FileUpload component props
export interface FileUploadProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'>, BaseFormProps {
    onFileChange?: (files: FileList | null) => void;
    accept?: string;
    maxSize?: number; // in MB
    showPreview?: boolean;
    dragAndDrop?: boolean;
    fullWidth?: boolean;
}

// Select component props
export interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>, BaseFormProps {
    options: SelectOption[];
    placeholder?: string;
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

// Checkbox component props
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>, BaseFormProps {
    indeterminate?: boolean;
}

// Radio component props
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    error?: string;
}

export interface RadioGroupProps {
    name: string;
    options: { value: string | number; label: string; disabled?: boolean }[];
    value?: string | number;
    onChange?: (value: string | number) => void;
    label?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
}

// Button component props
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    fullWidth?: boolean;
}
