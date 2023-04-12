import SideNavigationItem from './components/SideNavigationItem';
import './SideNavigation.scss';

type Competency = {
  id: number;
  title: string;
};
export type SideNavItem = {
  id: number;
  title: string;
  competencies: Competency[];
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
          {items?.map(({ id, title, competencies }: SideNavItem) => (
            <div key={`section-${id}`} className='side-navigation__section'>
              <div className='side-navigation__section__title'>{title}</div>
              {competencies.map(({ id, title }: Competency) => (
                <SideNavigationItem
                  key={`competencies-${id}`}
                  title={title}
                  isActive={id === selectedItemId}
                  handleClick={() => handleClick(id)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
