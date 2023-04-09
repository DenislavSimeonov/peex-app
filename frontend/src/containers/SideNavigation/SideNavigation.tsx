import { Dispatch, SetStateAction } from 'react';
import Button from 'components/Button';
import { ButtonVariants } from 'components/Button/enums';
import './SideNavigation.scss';

export type SideNavItem = {
  id: number;
  title: string;
};

export interface ISideNavItems {
  items: SideNavItem[] | undefined;
  selectedItemId: number;
  handleClick: (id: number) => void;
}

const SideNavigation = ({ items, selectedItemId, handleClick }: ISideNavItems) => {
  return (
    <div className='side-navigation'>
      <div className='side-navigation__items-wrapper'>
        <div className='side-navigation__items'>
          {items?.map(({ id, title }: SideNavItem) => (
            <Button
              key={id}
              data-testid='side-navigation-item-link'
              className='side-navigation__item'
              variant={selectedItemId == id ? ButtonVariants.SECONDARY : ButtonVariants.PRIMARY}
              text={title}
              handleClick={() => handleClick(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
