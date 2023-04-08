import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { SETTINGS_KEY } from 'hooks/useSettings';

export const SETTINGS = {
  languages: {
    en: 'en',
    bg: 'bg',
  },
};

export const DEFAULT_SETTINGS = {
  language: SETTINGS.languages.en,
};

export type SettingsType = { language: string };

export interface ISettingsContext {
  settings: SettingsType;
  setSettings: Dispatch<SetStateAction<SettingsType>>;
}

export const SettingsContext = createContext<Partial<ISettingsContext>>({});

type SettingsProviderProps = {
  children: ReactNode;
};

export const SettingsContextProvider = ({ children }: SettingsProviderProps) => {
  const { getItem } = useLocalStorage();
  const currentSettings = getItem(SETTINGS_KEY);
  const defaultSettings = currentSettings || DEFAULT_SETTINGS;
  const [settings, setSettings] = useState<SettingsType>(defaultSettings);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
