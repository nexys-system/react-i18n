// this key has to match
// https://github.com/nexys-system/react-stateful/blob/master/src/lib/conf.ts#L4
const LOCALE_LANG = 'locale_lang';

export const languageDefault: string = localStorage.getItem(LOCALE_LANG) || 'en';

export const countryDefault = 'US';

export const localeSeparator = '_';

export const urlDefault = '/api/product/i18n/serve?locale={lang}'; // todo change to lang!

// default marker for variable interpolation, ie ${name}
export const variableInterpolation = { prefix: '\\${', suffix: '}' };
