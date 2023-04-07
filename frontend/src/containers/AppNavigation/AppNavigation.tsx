import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useAuth from 'hooks/useAuth';
import { NAV_ITEMS, LANGUAGE_MENU_ITEMS } from './constants';
import Select from 'components/Select';
import Button from 'components/Button';
import './AppNavigation.scss';

type NavItem = {
  to: string;
  localKey: string;
};

const AppNavigation = () => {
  const { t, i18n } = useTranslation();
  const { token, logout } = useAuth();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) =>
    i18n.changeLanguage(e.target.value);

  return (
    <div className='app-navigation'>
      <div className='app-navigation__items'>
        {NAV_ITEMS.map(({ to, localKey }: NavItem) => (
          <Link
            data-testid='app-navigation-item-link'
            className='app-navigation__item'
            to={to}
            key={to}
          >
            {t(`app-navigation.${localKey}`)}
          </Link>
        ))}
      </div>
      <div className='app-navigation__language-menu'>
        <Select
          dataTestId='app-navigation-language-select'
          options={LANGUAGE_MENU_ITEMS}
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
