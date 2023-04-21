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

export interface ISideNavsections {
  sections: SideNavItem[] | undefined;
  selectedItemId: number;
  handleClick: (sectionId: number, competencyId: number) => void;
}

const SideNavigation = ({ sections, selectedItemId, handleClick }: ISideNavsections) => {
  return (
    <div className='side-navigation'>
      <div className='side-navigation__sections-wrapper'>
        <div className='side-navigation__sections'>
          {sections?.map(({ id: sectionId, title, competencies }: SideNavItem) => (
            <div key={sectionId} className='side-navigation__section'>
              <div className='side-navigation__section__title'>{title}</div>
              {competencies.map(({ id: competencyId, title }: Competency) => (
                <SideNavigationItem
                  key={competencyId}
                  title={title}
                  isActive={competencyId === selectedItemId}
                  handleClick={() => handleClick(sectionId, competencyId)}
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
