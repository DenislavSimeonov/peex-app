import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth, useUser } from 'hooks';
import { NAV_ITEMS } from './constants';
import Button from 'components/Button';
import './AppNavigation.scss';

const AppNavigation = () => {
  const { t } = useTranslation();

  const { logout } = useAuth();
  const { user } = useUser();

  return (
    <div className='app-navigation'>
      <div className='app-navigation__items'>
        <Link
          data-testid='app-navigation-profiles'
          className='app-navigation__item'
          to={NAV_ITEMS.profiles}
        >
          {t('app-navigation.profiles')}
        </Link>
      </div>

      {user?.id && (
        <div className='app-navigation__right-section'>
          <Link
            data-testid='app-navigation-settings-button'
            className='app-navigation__settings-button'
            to={NAV_ITEMS.settings}
          >
            {t('app-navigation.settings')}
          </Link>
          <Button
            className='app-navigation__logout-button'
            dataTestId='logout-button'
            text={`${t('app-navigation.logout_btn')} (${user?.name})`}
            handleClick={logout}
          />
        </div>
      )}
    </div>
  );
};

export default AppNavigation;
