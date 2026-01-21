import type { FilterProps } from './types';
import Select from '../forms/Select';

const Filter = ({
    options,
    value,
    onChange,
    label,
    placeholder = 'Filter...',
    className = '',
}: FilterProps) => {
    return (
        <div className={className}>
            <Select
                label={label}
                options={options}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                size="sm"
            />
        </div>
    );
};

export default Filter;
