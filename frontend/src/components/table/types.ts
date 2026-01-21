import { ReactNode } from 'react';

export interface Column<T> {
    key: keyof T | string;
    header: string;
    render?: (item: T) => ReactNode;
    sortable?: boolean;
    width?: string;
    align?: 'left' | 'center' | 'right';
}

export interface SortConfig<T> {
    key: keyof T | string;
    direction: 'asc' | 'desc';
}

export interface PaginationConfig {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
}

export interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    sortConfig?: SortConfig<T>;
    onSort?: (key: keyof T | string) => void;
    isLoading?: boolean;
    emptyMessage?: string;
    className?: string;
    onRowClick?: (item: T) => void;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    pageSize: number;
    onPageSizeChange: (size: number) => void;
    totalItems: number;
    pageSizeOptions?: number[];
}

export interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    debounceMs?: number;
    className?: string;
}

export interface FilterOption {
    value: string | number;
    label: string;
}

export interface FilterProps {
    options: FilterOption[];
    value: string | number;
    onChange: (value: string | number) => void;
    label?: string;
    placeholder?: string;
    className?: string;
}

export interface DataTableProps<T> extends TableProps<T> {
    pagination?: PaginationProps;
    search?: SearchBarProps;
    filters?: ReactNode;
    title?: string;
    actions?: ReactNode;
}
