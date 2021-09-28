const LOCALE_LANG = "locale_lang";
export const languageDefault = localStorage.getItem(LOCALE_LANG) || "en";
export const countryDefault = "US";
export const localeSeparator = "_";
export const urlDefault = "/api/product/i18n/serve?locale={lang}";
export const variableInterpolation = {prefix: "\\${", suffix: "}"};
