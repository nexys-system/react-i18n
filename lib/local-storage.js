const localStorageI18nKey = (lang) => "I18N_" + lang;
export const get = (lang) => {
  const key = localStorageI18nKey(lang);
  const localStorageContent = localStorage.getItem(key);
  if (localStorageContent) {
    try {
      return JSON.parse(localStorageContent);
    } catch (err) {
      console.error("could not parse the i18n content from the local storage. Key: " + key);
    }
  }
  return null;
};
export const to = (lang, content) => {
  const key = localStorageI18nKey(lang);
  const timestamp = new Date().getTime();
  const jcontent = JSON.stringify({content, timestamp});
  localStorage.setItem(key, jcontent);
};
