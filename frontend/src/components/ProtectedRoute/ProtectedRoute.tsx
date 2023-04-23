import { Navigate, Outlet } from 'react-router-dom';

interface IPrivateRoute {
  isAllowed: boolean;
  redirectPath: string;
}

const ProtectedRoute = ({ isAllowed, redirectPath }: IPrivateRoute) =>
  !isAllowed ? <Navigate to={redirectPath} replace /> : <Outlet />;

ProtectedRoute.defaultProps = {
  redirectPath: '/login',
};

export default ProtectedRoute;
