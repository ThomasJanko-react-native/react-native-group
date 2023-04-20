import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from "i18next-http-backend";
import {Platform, NativeModules } from 'react-native';
import en from './en';
import fr from './fr';
import es from './es';
import de from './de';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDeviceLang = () => {
  const appLanguage =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;

  return appLanguage.search(/-|_/g) !== -1
    ? appLanguage.slice(0, 2)
    : appLanguage;
};

const getLocalLang = async () => {
  try {
    const localLang = await AsyncStorage.getItem('lng');
    return localLang;
  } catch (e) {
    console.log(e);
  }
};

 const getLang = async () => {
  const deviceLang = getDeviceLang();
  const localLang = await getLocalLang();
  let lang = deviceLang;
  if (localLang) {
    lang = localLang;
  }
  return lang;
};

const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true,
  detect: async callback => {
    const lang = await getLang();
    callback(lang);
  },
  cacheUserLanguage: () => {},
};


const resources = {
    en,
    fr,
    es,
    de,
  };
  
  i18n
  .use(languageDetector)
  .use(backend)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    debug: true,
  });

  export default i18n;
  