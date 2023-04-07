import { Dispatch, SetStateAction } from 'react';
import { InputTypes } from './enums';
import './Input.scss';

interface IInput {
  dataTestId: string;
  label?: string;
  type: InputTypes;
  value: string | number;
  name: string;
  placeholder: string;
  isRequired: boolean;
  fullWidth: boolean;
  handleChange: Dispatch<SetStateAction<string>>;
}

const Input = (props: IInput) => {
  const { dataTestId, label, type, value, name, placeholder, isRequired, fullWidth, handleChange } =
    props;

  return (
    <label data-testid={`${dataTestId}-input-wrapper`} className='input'>
      <span className='input__label'>{label}</span>
      <input
        data-testid={`${dataTestId}-input`}
        className={`input__input-field ${fullWidth ? 'input__input-field--full-width' : ''}`}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        onChange={(e) => handleChange(e.target.value)}
      />
    </label>
  );
};

Input.defaultProps = {
  dataTestId: 'input',
  fullWidth: false,
};

export default Input;
