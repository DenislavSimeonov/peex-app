import _ from 'lodash';
import * as bgLocation from 'locales/bg/translation.json';
import * as enLocation from 'locales/en/translation.json';
import * as i18n from 'react-i18next';

jest.mock('react-i18next');

export const mockI18nDataBySelectedLng = (currentLanguage: string) => {
  const locationData = currentLanguage === 'en' ? enLocation : bgLocation;
  (i18n.useTranslation as jest.Mock).mockReturnValue({
    i18n: {
      changeLanguage: jest.fn(),
    },
    t: (key: string) => _.get(locationData, key),
  });
};
