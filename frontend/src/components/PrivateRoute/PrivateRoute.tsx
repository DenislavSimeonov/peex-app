import { ReactNode } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface IPrivateRoute extends RouteProps {
  children: ReactNode;
  isAuthenticated: boolean;
}

const PrivateRoute = ({ children, isAuthenticated, ...rest }: IPrivateRoute) => {
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
