import { ChangeEvent } from 'react';
import './Select.scss';

type SelectOption = {
  label: string;
  value: string;
};

interface ISelect {
  dataTestId: string;
  options: SelectOption[];
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ dataTestId, options, handleChange }: ISelect) => {
  return (
    <select data-testid={dataTestId} className='select' onChange={handleChange}>
      {options.map((item) => (
        <option key={item.value} className='select__option' value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

Select.defaultProps = {
  dataTestId: 'select',
};

export default Select;
