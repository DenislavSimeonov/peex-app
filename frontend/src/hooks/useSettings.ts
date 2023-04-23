import { useContext, useEffect } from 'react';
import { setLocalStorageItem, getLocalStorageItem } from 'global/helpers';
import {
  SettingsType,
  SettingsContext,
  ISettingsContext,
  DEFAULT_SETTINGS,
} from 'context/SettingsContext';

export const SETTINGS_KEY = 'settings';

const useSettings = () => {
  const settingsLs = getLocalStorageItem(SETTINGS_KEY);
  const { settings, setSettings } = useContext(SettingsContext) as ISettingsContext;

  useEffect(() => {
    if (!settings && settingsLs) {
      setSettings(settingsLs);
    }
  }, [settings, settingsLs]);

  const addSettings = (item: Partial<SettingsType>) => {
    const newSettings = {
      ...(settingsLs || {}),
      ...item,
    };
    setSettings(newSettings);
    setLocalStorageItem(SETTINGS_KEY, newSettings);
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    setLocalStorageItem(SETTINGS_KEY, DEFAULT_SETTINGS.language);
  };

  return { settings, addSettings, resetSettings };
};

export default useSettings;
