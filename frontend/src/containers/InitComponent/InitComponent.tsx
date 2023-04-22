import { useEffect, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth, useErrorNotifications, useIsAppLoading, useSettings } from 'hooks';
import { getLocalStorageItem } from 'global/helpers';
import { UserContext, IUserContext } from 'context/UserContext';
import AppLoader from 'containers/AppLoader';
import ProtectedRoute from 'components/ProtectedRoute';
import AppHeader from 'containers/AppHeader';
import LoginPage from 'containers/LoginPage';
import PeExProfilesPage from 'containers/PeExProfilesPage';
import CompetencyPage from 'containers/CompetencyPage';
import SettingsPage from 'containers/SettingsPage';
import Notification from 'components/Notification';
import { NotificationTypes } from 'components/Notification/enums';

const InitComponent = () => {
  const USER = 'user';
  const { token } = useAuth();
  const error = useErrorNotifications();
  const loading = useIsAppLoading();

  const { user, setUser } = useContext(UserContext) as IUserContext;

  const { settings } = useSettings();
  const { i18n } = useTranslation();
  const changeI18nLanguage = (val: string) => i18n.changeLanguage(val);

  useEffect(() => {
    if (token && !user) {
      const userLocalStorage = getLocalStorageItem(USER);
      setUser(JSON.parse(userLocalStorage));
    }
  }, [token]);

  useEffect(() => {
    changeI18nLanguage(settings.language);
  }, []);

  return (
    <>
      {loading && <AppLoader />}
      {!!error && <Notification type={NotificationTypes.ERROR} message={`Error: ${error}`} />}
      <AppHeader />
      <Routes>
        <Route element={<ProtectedRoute isAllowed={!token} redirectPath='/profiles' />}>
          <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!token} redirectPath='/login' />}>
          <Route path='/profiles' element={<PeExProfilesPage />} />
        </Route>
        <Route
          path='/competency/*'
          element={<ProtectedRoute isAllowed={!!token} redirectPath='/login' />}
        >
          <Route path=':profileId/:sectionId?/:competencyId?' element={<CompetencyPage />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!token} redirectPath='/login' />}>
          <Route path='/settings' element={<SettingsPage />} />
        </Route>
        <Route path='*' element={<Navigate to='/profiles' replace />} />
      </Routes>
    </>
  );
};

export default InitComponent;
