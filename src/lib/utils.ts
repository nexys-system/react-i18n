import * as T from './type';

/**
 *
 * @param str: pseudo language code
 * @return trundates input to attempt to turn it into iso2
 * todo: remove
 */
export const getLanguage = (str: string): string => {
  if (str.length > 2) return str.substring(0, 2);
  else return str;
};

// TODO: test function
export const getBrowserLanguage = (): string | null => {
  const nav = window.navigator;
  const browserLanguagePropertyKeys = [
    'language',
    'browserLanguage',
    'systemLanguage',
    'userLanguage'
  ];

  // support for HTML 5.1 "navigator.languages"
  if (Array.isArray(nav.languages)) {
    for (let i = 0; i < nav.languages.length; i++) {
      const l = nav.languages[i];
      if (l) {
        return getLanguage(l);
      }
    }
  }

  // support for other well known properties in browsers
  for (let i = 0; i < browserLanguagePropertyKeys.length; i++) {
    const language = (nav as unknown as { [k: string]: string })[
      browserLanguagePropertyKeys[i]
    ];

    if (language) {
      return getLanguage(language);
    }
  }

  return null;
};

export const substituteVars = (
  content: string,
  replaceVars?: { [key: string]: T.ReplaceVar },
  prefixVar: string = '\\${',
  suffixVar: string = '}'
) => {
  if (!replaceVars) {
    return content;
  }

  Object.entries(replaceVars).forEach(([k, v]: [string, any]) => {
    const wrappedKey = prefixVar + k + suffixVar;
    const rgp = new RegExp(wrappedKey, 'g');
    content = content.replace(rgp, v);
  });

  return content;
};

/**
 * get list of translations from server
 * */
export const getTranslationsFromServer = async (
  url: string
): Promise<T.Phrases> => {
  try {
    const r = await fetch(url, {
      headers: { 'content-type': 'application/json' },
      credentials: 'same-origin'
    });

    return r.json();
  } catch (err) {
    throw Error('could not get translations');
  }
};
