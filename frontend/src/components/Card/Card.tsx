import { ReactNode } from 'react';
import './Card.scss';

type CardTypes = 'primary' | 'secondary';

interface IProps {
  type: CardTypes;
  title?: string;
  children: ReactNode;
}

const Card = ({ type, title, children }: IProps) => (
  <div className={`card--${type}`}>
    <div className='card__title'>{title}</div>
    {children}
  </div>
);

export default Card;
