import InitComponent from 'containers/InitComponent';
import { SettingsContextProvider, UserContextProvider, AppContextProvider } from 'context';

import 'global/styles/index.scss';

const App = () => {
  return (
    <SettingsContextProvider>
      <UserContextProvider>
        <AppContextProvider>
          <InitComponent />
        </AppContextProvider>
      </UserContextProvider>
    </SettingsContextProvider>
  );
};

export default App;
