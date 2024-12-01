import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useSettings } from 'hooks';
import Select from 'components/Select/Select';
import { LANGUAGE_MENU_ITEMS } from './constants';
import './SettingsPage.scss';

const SettingsPage = () => {
  const { settings, addSettings } = useSettings();
  const { i18n, t } = useTranslation();

  const changeI18nLanguage = (val: string) => i18n.changeLanguage(val);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    addSettings({ language });
    changeI18nLanguage(language);
  };

  return (
    <div className='settings-page' data-testid='settings-page'>
      <label className='settings-page__label'>{t('app-header.language')}:</label>
      <Select
        dataTestId='app-header-language-select'
        value={settings?.language}
        options={LANGUAGE_MENU_ITEMS}
        handleChange={handleLanguageChange}
      />
    </div>
  );
};
export default SettingsPage;
