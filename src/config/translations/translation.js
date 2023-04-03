import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import { reactNativeLanguageDetector } from 'i18next-react-native-language-detector';
import en from './en';
import fr from './fr';


const resources = {
    en,
    fr,
  };
  
  i18n
  // .use(reactNativeLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
  });

  export default i18n;
  