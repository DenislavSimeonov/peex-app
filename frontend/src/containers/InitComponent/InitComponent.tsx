import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { NAV_ITEMS } from 'global/constants';
import PrivateRoute from 'components/PrivateRoute';
import AppNavigation from 'components/AppNavigation';
import LoginPage from 'containers/LoginPage';
import HomePage from 'containers/HomePage';
import PageOne from 'containers/PageOne';
import PageTwo from 'containers/PageTwo';

const InitComponent = () => {
  const { token } = useAuth();

  return (
    <Router>
      <AppNavigation navItems={NAV_ITEMS} />

      <Switch>
        <Route path='/login'>{token ? <Redirect to='/' /> : <LoginPage />}</Route>
        <PrivateRoute isAuthenticated={!!token} exact path='/'>
          <HomePage />
        </PrivateRoute>
        <PrivateRoute isAuthenticated={!!token} path='/page-one'>
          <PageOne />
        </PrivateRoute>
        <PrivateRoute isAuthenticated={!!token} path='/page-two'>
          <PageTwo />
        </PrivateRoute>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default InitComponent;
