import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageMenu from 'components/LanguageMenu';
import LogoutButton from 'components/LogoutButton';
import './Navigation.scss';

type NavItem = {
  to: string;
  localKey: string;
};

interface IProps {
  navItems: NavItem[];
}

const Navigation = ({ navItems }: IProps) => {
  const { t } = useTranslation();
  return (
    <div className='navigation'>
      <div className='navigation__items'>
        {navItems.map(({ to, localKey }: NavItem) => (
          <Link className='navigation__item' to={to} key={to}>
            {t(`navigation.${localKey}`)}
          </Link>
        ))}
      </div>
      <div className='navigation__language-menu'>
        <LanguageMenu />
        <LogoutButton />
      </div>
    </div>
  );
};

export default Navigation;
