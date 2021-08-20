export const getLanguage = (str) => {
  if (str.length > 2)
    return str.substring(0, 2);
  else
    return str;
};
export const getBrowserLanguage = () => {
  const nav = window.navigator;
  const browserLanguagePropertyKeys = [
    "language",
    "browserLanguage",
    "systemLanguage",
    "userLanguage"
  ];
  if (Array.isArray(nav.languages)) {
    for (let i = 0; i < nav.languages.length; i++) {
      const l = nav.languages[i];
      if (l) {
        return getLanguage(l);
      }
    }
  }
  for (let i = 0; i < browserLanguagePropertyKeys.length; i++) {
    const language = nav[browserLanguagePropertyKeys[i]];
    if (language) {
      return getLanguage(language);
    }
  }
  return null;
};
export const substituteVars = (content, replaceVars, prefixVar = "\\${", suffixVar = "}") => {
  if (!replaceVars) {
    return content;
  }
  Object.entries(replaceVars).forEach(([k, v]) => {
    const wrappedKey = prefixVar + k + suffixVar;
    const rgp = new RegExp(wrappedKey, "g");
    content = content.replace(rgp, v);
  });
  return content;
};
export const getTranslationsFromServer = async (url) => {
  try {
    const r = await fetch(url, {
      headers: {"content-type": "application/json"},
      credentials: "same-origin"
    });
    return r.json();
  } catch (err) {
    throw Error("could not get translations");
  }
};
