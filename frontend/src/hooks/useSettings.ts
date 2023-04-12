import { useContext, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import {
  SettingsType,
  SettingsContext,
  ISettingsContext,
  DEFAULT_SETTINGS,
} from 'context/SettingsContext';

export const SETTINGS_KEY = 'settings';

const useSettings = () => {
  const { getItem, setItem } = useLocalStorage();
  const settingsLs = getItem(SETTINGS_KEY);
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
    setItem(SETTINGS_KEY, newSettings);
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    setItem(SETTINGS_KEY, DEFAULT_SETTINGS.language);
  };

  return { settings, addSettings, resetSettings };
};

export default useSettings;
