import InitComponent from 'containers/InitComponent';
import { UserContextProvider } from 'context/UserContext';

import 'global/styles/index.scss';

const App = () => {
  return (
    <UserContextProvider>
      <InitComponent />
    </UserContextProvider>
  );
};

export default App;
