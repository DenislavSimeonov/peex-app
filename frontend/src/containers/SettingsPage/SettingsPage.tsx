import { ChangeEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSettings } from 'hooks/useSettings';
import Select from 'components/Select/Select';
import { LANGUAGE_MENU_ITEMS, SETTINGS_OPTIONS } from './constants';
import './SettingsPage.scss';

const SettingsPage = () => {
  const { settings, addSettings } = useSettings();
  const { i18n } = useTranslation();

  const changeI18nLanguage = (val: string) => i18n.changeLanguage(val);
  useEffect(() => {
    changeI18nLanguage(settings.language);
  }, []);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    addSettings({ language });
    changeI18nLanguage(language);
  };

  return (
    <div className='settings-page' data-testid='settings-page'>
      <label className='settings-page__label'>{SETTINGS_OPTIONS.languages}</label>
      <Select
        dataTestId='app-navigation-language-select'
        value={settings?.language}
        options={LANGUAGE_MENU_ITEMS}
        handleChange={handleLanguageChange}
      />
    </div>
  );
};
export default SettingsPage;
