import Table from './Table';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import type { DataTableProps } from './types';

function DataTable<T>({
    data,
    columns,
    sortConfig,
    onSort,
    isLoading,
    emptyMessage,
    className = '',
    onRowClick,
    pagination,
    search,
    filters,
    title,
    actions,
}: DataTableProps<T>) {
    return (
        <div className={`bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden ${className}`}>
            {/* Header Section */}
            {(title || search || filters || actions) && (
                <div className="p-4 border-b border-neutral-200 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        {title && (
                            <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
                        )}
                        {actions && (
                            <div className="flex items-center gap-2">
                                {actions}
                            </div>
                        )}
                    </div>

                    {(search || filters) && (
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
                            {search && (
                                <div className="w-full sm:max-w-xs">
                                    <SearchBar {...search} />
                                </div>
                            )}
                            {filters && (
                                <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                                    {filters}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Table Content */}
            <Table
                data={data}
                columns={columns}
                sortConfig={sortConfig}
                onSort={onSort}
                isLoading={isLoading}
                emptyMessage={emptyMessage}
                onRowClick={onRowClick}
                className="border-0 rounded-none shadow-none"
            />

            {/* Pagination Footer */}
            {pagination && (
                <div className="border-t border-neutral-200 bg-neutral-50">
                    <Pagination {...pagination} />
                </div>
            )}
        </div>
    );
}

export default DataTable;
