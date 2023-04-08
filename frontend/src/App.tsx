import InitComponent from 'containers/InitComponent';
import { SettingsContextProvider, UserContextProvider } from 'context';

import 'global/styles/index.scss';

const App = () => {
  return (
    <SettingsContextProvider>
      <UserContextProvider>
        <InitComponent />
      </UserContextProvider>
    </SettingsContextProvider>
  );
};

export default App;
