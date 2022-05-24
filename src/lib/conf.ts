export const languageDefault: string = 'en';

const i18nServeUrlPrefix: string = '/api/i18n/serve';

export const urlDefault = i18nServeUrlPrefix + '?lang={lang}';

// default marker for variable interpolation, ie ${name}
export const variableInterpolation = { prefix: '\\${', suffix: '}' };
