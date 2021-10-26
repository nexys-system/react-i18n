export const languageDefault = process.env.I18N_LANGUAGE_DEFAULT || "en";
const i18nServeUrlPrefix = process.env.I18N_SERVE_URL || "/api/i18n/serve";
export const urlDefault = i18nServeUrlPrefix + "?lang={lang}";
export const variableInterpolation = {prefix: "\\${", suffix: "}"};
