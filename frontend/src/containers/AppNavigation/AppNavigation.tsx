import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth, useUser } from 'hooks';
import { NAV_ITEMS, SETTINGS } from './constants';
import Button from 'components/Button';
import './AppNavigation.scss';

type NavItem = {
  to: string;
  localKey: string;
};

const AppNavigation = () => {
  const { t } = useTranslation();

  const { logout } = useAuth();
  const { user } = useUser();

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

      {user?.id && (
        <div className='app-navigation__right-section'>
          <Link
            data-testid='app-navigation-settings-button'
            className='app-navigation__settings-button'
            to={SETTINGS.path}
          >
            {SETTINGS.label}
          </Link>
          <Button
            className='app-navigation__logout-button'
            dataTestId='logout-button'
            text={`Logout (${user?.name})`}
            handleClick={logout}
          />
        </div>
      )}
    </div>
  );
};

export default AppNavigation;
