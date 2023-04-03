import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, isAuthenticated, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated ? children : <Redirect to='/login' />;
      }}
    />
  );
};

export default PrivateRoute;
