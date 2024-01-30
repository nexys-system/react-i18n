import { test, expect } from 'vitest';

import LocalStorageMock from './local-storage-mock';
import { to } from './local-storage';
import I18n from './main';
import { Phrases } from './type';

global.localStorage = new LocalStorageMock();

const i18n = new I18n('en', undefined, { variableInterpolationPrefix: '%{' });

test('with localstorage', async () => {
  const phrases: Phrases = {
    mystring: 'a variable with interpolation %{name}'
  };
  to('en', phrases);
  await i18n.init();

  expect(i18n.translate('mystring', { name: 'substituted' })).toEqual(
    'a variable with interpolation substituted'
  );
});
