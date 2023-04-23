import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth, useUser } from 'hooks';
import { NAV_ITEMS } from './constants';
import Button from 'components/Button';
import './AppHeader.scss';

const AppHeader = () => {
  const { t } = useTranslation();

  const { logout } = useAuth();
  const { user } = useUser();

  return (
    <header className='app-header'>
      <nav className='app-header__nav'>
        <Link
          data-testid='app-header-profiles'
          className='app-header__nav__item'
          to={NAV_ITEMS.profiles}
        >
          {t('app-header.profiles')}
        </Link>
      </nav>

      {user?.id && (
        <section className='app-header__right-section'>
          <Link
            data-testid='app-header-settings-button'
            className='app-header__settings-button'
            to={NAV_ITEMS.settings}
          >
            {t('app-header.settings')}
          </Link>
          <Button
            className='app-header__logout-button'
            dataTestId='logout-button'
            text={`${t('app-header.logout_btn')} (${user?.name})`}
            handleClick={logout}
          />
        </section>
      )}
    </header>
  );
};

export default AppHeader;
