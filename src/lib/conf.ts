export const languageDefault: string = process.env.I18N_LANGUAGE_DEFAULT ||'en';

const i18nServeUrlPrefix:string = process.env.I18N_SERVE_URL || '/api/i18n/serve';

export const urlDefault = i18nServeUrlPrefix + '?lang={lang}';

// default marker for variable interpolation, ie ${name}
export const variableInterpolation = { prefix: '\\${', suffix: '}' };
