const untranslatedKey = "I18n_UNTRANSLATED";
export const get = () => {
  const untranslated = localStorage.getItem(untranslatedKey);
  if (!untranslated) {
    return [];
  }
  return JSON.parse(untranslated);
};
export const set = (s) => {
  const untranslated = get();
  if (!untranslated.includes(s)) {
    untranslated.push(s);
  }
  localStorage.setItem(untranslatedKey, JSON.stringify(untranslated));
};
