import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NAV_ITEMS } from 'global/constants';
import Navigation from 'components/Navigation';
import HomePage from 'containers/HomePage';
import PageOne from 'containers/PageOne';
import PageTwo from 'containers/PageTwo';

const InitComponent = () => {
  return (
    <Router>
      <Navigation navItems={NAV_ITEMS} />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/page-one'>
          <PageOne />
        </Route>
        <Route exact path='/page-two'>
          <PageTwo />
        </Route>
      </Switch>
    </Router>
  );
};

export default InitComponent;
