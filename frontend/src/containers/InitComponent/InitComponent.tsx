import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import PrivateRoute from 'components/PrivateRoute';
import AppNavigation from 'containers/AppNavigation';
import LoginPage from 'containers/LoginPage';
import PeExProfilesPage from 'containers/PeExProfilesPage';
import PageOne from 'containers/PageOne';
import PageTwo from 'containers/PageTwo';

const InitComponent = () => {
  const { token } = useAuth();

  return (
    <Router>
      <AppNavigation />

      <Switch>
        <Route path='/login'>{token ? <Redirect to='/profiles' /> : <LoginPage />}</Route>
        <PrivateRoute isAuthenticated={!!token} path='/profiles'>
          <PeExProfilesPage />
        </PrivateRoute>
        <PrivateRoute isAuthenticated={!!token} path='/page-one'>
          <PageOne />
        </PrivateRoute>
        <PrivateRoute isAuthenticated={!!token} path='/page-two'>
          <PageTwo />
        </PrivateRoute>
        <Redirect to='/profiles' />
      </Switch>
    </Router>
  );
};

export default InitComponent;
