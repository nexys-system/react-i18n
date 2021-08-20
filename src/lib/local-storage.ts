// caches phrases into local storage for quicker and easier retrieval
import { Phrases } from './type';

const localStorageI18nKey = (lang: string) => 'I18N_' + lang;

export const get = (lang: string): Phrases | null => {
  const key = localStorageI18nKey(lang);
  const localStorageContent = localStorage.getItem(key);

  if (localStorageContent) {
    try {
      return JSON.parse(localStorageContent);
    } catch (err) {
      console.error(
        'could not parse the i18n content from the local storage. Key: ' + key
      );
    }
  }

  return null;
};

export const to = (lang: string, content: Phrases): void => {
  const key = localStorageI18nKey(lang);
  const jcontent = JSON.stringify(content);
  localStorage.setItem(key, jcontent);
};
