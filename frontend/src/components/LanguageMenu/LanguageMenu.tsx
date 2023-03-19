import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_MENU_ITEMS } from './constants';
import './LanguageMenu.scss';

const LanguageMenu = () => {
  const { i18n } = useTranslation();

  const changeLanguageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  return (
    <select className='custom-select' onChange={changeLanguageHandler}>
      <option className='custom-select__option' value='en'>
        {LANGUAGE_MENU_ITEMS.en}
      </option>
      <option className='custom-select__option' value='bg'>
        {LANGUAGE_MENU_ITEMS.bg}
      </option>
    </select>
  );
};

export default LanguageMenu;
