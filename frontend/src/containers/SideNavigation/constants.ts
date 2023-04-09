import { SETTINGS } from 'context/SettingsContext';

export const NAV_ITEMS = [
  { to: '/profiles', localKey: 'profiles' },
  { to: '/page-one', localKey: 'pageOne' },
  { to: '/page-two', localKey: 'pageTwo' },
];

export const LANGUAGE_MENU_ITEMS = [
  { label: 'EN', value: SETTINGS.languages.en },
  { label: 'BG', value: SETTINGS.languages.bg },
];
