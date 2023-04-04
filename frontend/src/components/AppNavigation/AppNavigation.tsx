import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'hooks/useAuth';
import Select from 'components/Select';
import Button from 'components/Button';
import './AppNavigation.scss';

type NavItem = {
  to: string;
  localKey: string;
};

interface IProps {
  navItems: NavItem[];
}

const AppNavigation = ({ navItems }: IProps) => {
  const languageOptions = [
    { label: 'EN', value: 'en' },
    { label: 'BG', value: 'bg' },
  ];

  const { t, i18n } = useTranslation();
  const { token, logout } = useAuth();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) =>
    i18n.changeLanguage(e.target.value);

  return (
    <div className='app-navigation'>
      <div className='app-navigation__items'>
        {navItems.map(({ to, localKey }: NavItem) => (
          <Link
            data-testid='navigation-item-link'
            className='app-navigation__item'
            to={to}
            key={to}
          >
            {t(`navigation.${localKey}`)}
          </Link>
        ))}
      </div>
      <div className='app-navigation__language-menu'>
        <Select
          dataTestId='select-language'
          options={languageOptions}
          handleChange={handleLanguageChange}
        />
        {token && (
          <Button
            className='app-navigation__logout-button'
            dataTestId='logout-button'
            text='Logout'
            handleClick={logout}
          />
        )}
      </div>
    </div>
  );
};

export default AppNavigation;
