import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useAuth from 'hooks/useAuth';
import { useUser } from 'hooks/useUser';
import { useSettings } from 'hooks/useSettings';
import { NAV_ITEMS, LANGUAGE_MENU_ITEMS } from './constants';
import Select from 'components/Select/Select';
import Button from 'components/Button';
import './AppNavigation.scss';

type NavItem = {
  to: string;
  localKey: string;
};

const AppNavigation = () => {
  const { settings, addSettings } = useSettings();
  const { i18n, t } = useTranslation();
  const { logout } = useAuth();
  const { user } = useUser();

  const changeI18nLanguage = (val: string) => i18n.changeLanguage(val);
  useEffect(() => {
    changeI18nLanguage(settings.language);
  }, []);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    addSettings({ language });
    changeI18nLanguage(language);
  };

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
          value={settings?.language}
          options={LANGUAGE_MENU_ITEMS}
          handleChange={handleLanguageChange}
        />
        {user?.id && (
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
