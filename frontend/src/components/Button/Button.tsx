import { ReactNode } from 'react';
import './Button.scss';

interface IBaseButton {
  dataTestId: string;
  className: string;
  type: 'primary' | 'secondary';
  handleClick: () => void;
}

interface IButtonWithText extends IBaseButton {
  text: string;
  children?: undefined;
}
interface IButtonWithChildren extends IBaseButton {
  text?: undefined;
  children: ReactNode;
}

type ButtonType = IButtonWithText | IButtonWithChildren;

const Button = ({ dataTestId, className, text, children, type, handleClick }: ButtonType) => {
  return (
    <button
      data-testid={dataTestId}
      className={`button button--${type} ${className}`}
      onClick={handleClick}
    >
      {text}
      {children}
    </button>
  );
};

Button.defaultProps = {
  dataTestId: 'button',
  type: 'primary',
};

export default Button;
