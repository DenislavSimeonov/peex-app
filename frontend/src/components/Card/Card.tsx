import { ReactNode } from 'react';
import { CardTypes } from './enums';
import './Card.scss';

interface IProps {
  dataTestId: string;
  type: CardTypes;
  title?: string;
  children?: ReactNode;
  hoverEffect: boolean;
  handleClick?: () => void;
}

const Card = ({ dataTestId, type, title, children, hoverEffect, handleClick }: IProps) => (
  <div
    className={`card card--${type} ${hoverEffect ? 'card--animated' : ''}`}
    data-testif={dataTestId}
    onClick={handleClick}
  >
    <div className='card__title'>{title}</div>
    {children}
  </div>
);

Card.defaultProps = {
  dataTestId: 'card',
  hoverEffect: false,
};
export default Card;
