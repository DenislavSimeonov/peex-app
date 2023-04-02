import { render } from 'global/test-utils';
import { mockI18nDataBySelectedLng } from 'jest-helpers';
import App from '../App';

describe('App Components', () => {
  let currentLanguage = 'en';

  beforeEach(() => {
    currentLanguage = 'en';
  });

  it('should render correct content when selected language is "en"', () => {
    mockI18nDataBySelectedLng(currentLanguage);
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Home');
    expect(container).toHaveTextContent('Page one');
    expect(container).toHaveTextContent('Page two');
    expect(container).toHaveTextContent('EN');
    expect(container).toHaveTextContent('BG');
  });

  it('should render correct content when selected language is "bg"', () => {
    currentLanguage = 'bg';
    mockI18nDataBySelectedLng(currentLanguage);
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Начална страница');
    expect(container).toHaveTextContent('Страница 1');
    expect(container).toHaveTextContent('Cтраница 2');
    expect(container).toHaveTextContent('EN');
    expect(container).toHaveTextContent('BG');
  });
});
