import { ChangeEvent } from 'react';
import './Select.scss';

export type SelectOption = {
  label: string;
  value: string;
};

interface ISelect {
  dataTestId: string;
  value?: string;
  options: SelectOption[];
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ dataTestId, value, options, handleChange }: ISelect) => {
  return (
    <select data-testid={dataTestId} value={value} className='select' onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} className='select__option' value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Select.defaultProps = {
  dataTestId: 'select',
};

export default Select;
