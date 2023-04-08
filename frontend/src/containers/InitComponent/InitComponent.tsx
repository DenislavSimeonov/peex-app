import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import ProtectedRoute from 'components/ProtectedRoute';
import AppNavigation from 'containers/AppNavigation';
import LoginPage from 'containers/LoginPage';
import PeExProfilesPage from 'containers/PeExProfilesPage';
import PageOne from 'containers/PageOne';
import PageTwo from 'containers/PageTwo';

const InitComponent = () => {
  const { token } = useAuth();

  return (
    <BrowserRouter>
      <AppNavigation />
      <Routes>
        <Route element={<ProtectedRoute isAllowed={!token} redirectPath='/profiles' />}>
          <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!token} redirectPath='/login' />}>
          <Route path='/profiles' element={<PeExProfilesPage />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!token} redirectPath='/login' />}>
          <Route path='/page-one' element={<PageOne />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!token} redirectPath='/login' />}>
          <Route path='/page-two' element={<PageTwo />} />
        </Route>
        <Route path='*' element={<Navigate to='/profiles' replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default InitComponent;
