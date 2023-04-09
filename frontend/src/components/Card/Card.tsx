import { ReactNode } from 'react';
import { CardTypes } from './enums';
import './Card.scss';

interface IProps {
  dataTestId: string;
  type: CardTypes;
  title?: string;
  children?: ReactNode;
  handleClick?: () => void;
}

const Card = ({ dataTestId, type, title, children, handleClick }: IProps) => (
  <div className={`card card--${type}`} data-testif={dataTestId} onClick={handleClick}>
    <div className='card__title'>{title}</div>
    {children}
  </div>
);

Card.defaultProps = {
  dataTestId: 'card',
};
export default Card;
