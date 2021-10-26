export const languageDefault: string = 'en';

export const countryDefault = 'US';

/**
 * By default use "-" as a locale separator. Can be overriden with env var
 * https://stackoverflow.com/questions/4904803/en-us-or-en-us-which-one-should-you-use/4904818
 * see https://github.com/nexys-system/react-stateful/blob/master/src/lib/conf.ts
 */
export const localeSeparator = process.env.I18N_LOCALE_SEPARATOR || '-';

export const urlDefault = '/api/product/i18n/serve?locale={lang}'; // todo change to lang!

// default marker for variable interpolation, ie ${name}
export const variableInterpolation = { prefix: '\\${', suffix: '}' };
