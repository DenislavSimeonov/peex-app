import { ReactNode } from 'react';
import { ButtonVariants, ButtonTypes } from './enums';
import './Button.scss';

interface IBaseButton {
  dataTestId: string;
  className?: string;
  variant: ButtonVariants;
  type: ButtonTypes;
  fullWidth: boolean;
  handleClick?: () => void;
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

const Button = (props: ButtonType) => {
  const { dataTestId, className, text, children, variant, type, fullWidth, handleClick } = props;

  return (
    <button
      data-testid={dataTestId}
      className={`button button--${variant} ${fullWidth ? 'button--full-width' : ''} ${
        className ? className : ''
      }`}
      type={type}
      onClick={handleClick}
    >
      {text}
      {children}
    </button>
  );
};

Button.defaultProps = {
  dataTestId: 'button',
  variant: ButtonVariants.PRIMARY,
  type: ButtonTypes.BUTTON,
  fullWidth: false,
};

export default Button;
