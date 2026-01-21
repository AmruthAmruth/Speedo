import { ReactNode } from 'react';
import type { TableProps } from './types';

function Table<T>({
    data,
    columns,
    sortConfig,
    onSort,
    isLoading,
    emptyMessage = 'No data available',
    className = '',
    onRowClick,
}: TableProps<T>) {
    return (
        <div className={`overflow-x-auto rounded-lg border border-neutral-200 shadow-sm ${className}`}>
            <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.key as string}
                                scope="col"
                                className={`
                  px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider
                  ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}
                  ${column.sortable ? 'cursor-pointer hover:bg-neutral-100 hover:text-neutral-700' : ''}
                  ${column.width ? `w-[${column.width}]` : ''}
                `}
                                onClick={() => column.sortable && onSort && onSort(column.key)}
                            >
                                <div className={`flex items-center space-x-1 ${column.align === 'center' ? 'justify-center' : column.align === 'right' ? 'justify-end' : 'justify-start'
                                    }`}>
                                    <span>{column.header}</span>
                                    {column.sortable && sortConfig?.key === column.key && (
                                        <span className="text-primary-600">
                                            {sortConfig.direction === 'asc' ? (
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                </svg>
                                            ) : (
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </span>
                                    )}
                                    {column.sortable && sortConfig?.key !== column.key && (
                                        <span className="text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                            </svg>
                                        </span>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                    {isLoading ? (
                        <tr>
                            <td colSpan={columns.length} className="px-6 py-12 text-center">
                                <div className="flex justify-center items-center space-x-2">
                                    <svg className="animate-spin h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className="text-neutral-500 font-medium">Loading data...</span>
                                </div>
                            </td>
                        </tr>
                    ) : data.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} className="px-6 py-12 text-center text-neutral-500">
                                <div className="flex flex-col items-center justify-center">
                                    <svg className="w-12 h-12 text-neutral-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                    </svg>
                                    <p>{emptyMessage}</p>
                                </div>
                            </td>
                        </tr>
                    ) : (
                        data.map((item, rowIndex) => (
                            <tr
                                key={rowIndex}
                                onClick={() => onRowClick && onRowClick(item)}
                                className={`
                  transition-colors duration-150
                  ${onRowClick ? 'cursor-pointer hover:bg-primary-50' : 'hover:bg-neutral-50'}
                `}
                            >
                                {columns.map((column, colIndex) => (
                                    <td
                                        key={`${rowIndex}-${colIndex}`}
                                        className={`
                      px-6 py-4 whitespace-nowrap text-sm text-neutral-700
                      ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}
                    `}
                                    >
                                        {column.render ? column.render(item) : (item[column.key as keyof T] as ReactNode)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
