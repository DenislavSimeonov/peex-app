import { Dispatch, SetStateAction } from 'react';
import './Textarea.scss';

interface ITextarea {
  dataTestId: string;
  label?: string;
  value: string | number;
  name: string;
  placeholder: string;
  isRequired: boolean;
  fullWidth: boolean;
  handleChange: Dispatch<SetStateAction<string>>;
}

const Textarea = (props: ITextarea) => {
  const { dataTestId, label, value, name, placeholder, isRequired, fullWidth, handleChange } =
    props;

  return (
    <label data-testid={`${dataTestId}-wrapper`} className='textarea'>
      <span className='textarea__label'>{label}</span>
      <textarea
        data-testid={`${dataTestId}-textarea`}
        className={`textarea__field ${fullWidth ? 'textarea__field--full-width' : ''}`}
        value={value}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        onChange={(e) => handleChange(e.target.value)}
      />
    </label>
  );
};

Textarea.defaultProps = {
  dataTestId: 'textarea',
  fullWidth: false,
};

export default Textarea;
