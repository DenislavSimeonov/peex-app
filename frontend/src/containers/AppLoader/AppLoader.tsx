import Loader from 'components/Loader';
import './AppLoader.scss';

const AppLoader = () => (
  <div data-testid='app-loader' className='app-loader'>
    <Loader />
  </div>
);

export default AppLoader;
