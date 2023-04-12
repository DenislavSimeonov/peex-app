import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth, useErrorNotifications, useIsAppLoading } from 'hooks';
import AppLoader from 'containers/AppLoader';
import ProtectedRoute from 'components/ProtectedRoute';
import AppNavigation from 'containers/AppNavigation';
import LoginPage from 'containers/LoginPage';
import PeExProfilesPage from 'containers/PeExProfilesPage';
import CompetencyPage from 'containers/CompetencyPage';
import SettingsPage from 'containers/SettingsPage';
import Notification from 'components/Notification';
import { NotificationTypes } from 'components/Notification/enums';

const InitComponent = () => {
  const { token } = useAuth();
  const error = useErrorNotifications();
  const loading = useIsAppLoading();

  return (
    <BrowserRouter>
      {loading && <AppLoader />}
      {!!error && <Notification type={NotificationTypes.ERROR} message={`Error: ${error}`} />}
      <AppNavigation />
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
          <Route path=':id/:competency_id?' element={<CompetencyPage />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!token} redirectPath='/login' />}>
          <Route path='/settings' element={<SettingsPage />} />
        </Route>
        <Route path='*' element={<Navigate to='/profiles' replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default InitComponent;
