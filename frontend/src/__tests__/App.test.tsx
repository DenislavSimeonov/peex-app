import { render, screen } from 'global/test-utils';
import { mockI18nDataBySelectedLng } from 'global/test-helpers';
import App from '../App';

describe('App Components', () => {
  const setUser = () => {
    const userData = JSON.stringify('{"id":1,"name":"username"}');
    window.localStorage.setItem('user', userData);
  };

  afterEach(() => {
    window.localStorage.clear();
  });

  it('should render correct content when selected language is "en"', () => {
    mockI18nDataBySelectedLng('en');
    setUser();
    render(<App />);

    expect(screen.getByTestId('app-navigation-profiles')).toHaveTextContent('My PeEx Profiles');
    expect(screen.getByTestId('app-navigation-settings-button')).toHaveTextContent('Settings');
    expect(screen.getByTestId('logout-button')).toHaveTextContent('Logout (username)');
  });

  it('should render correct content when selected language is "bg"', () => {
    mockI18nDataBySelectedLng('bg');
    setUser();
    render(<App />);

    expect(screen.getByTestId('app-navigation-profiles')).toHaveTextContent('Моите PeEx профили');
    expect(screen.getByTestId('app-navigation-settings-button')).toHaveTextContent('Настройки');
    expect(screen.getByTestId('logout-button')).toHaveTextContent('Отписване (username)');
  });
});
