import './SideNavigationItem.scss';

type PropType = {
  title: string;
  isActive: boolean;
  handleClick: () => void;
};

const SideNavigationItem = ({ title, isActive, handleClick }: PropType) => (
  <div
    data-testid='side-navigation-item'
    className={`side-navigation__item ${isActive ? 'side-navigation__item--active' : ''}`}
    onClick={handleClick}
  >
    {title}
  </div>
);

export default SideNavigationItem;
