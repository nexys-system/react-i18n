import LocalStorageMock from './local-storage-mock';
import { to } from './local-storage';
import I18n from './main';
import { Phrases } from './type';

global.localStorage = new LocalStorageMock();
global.fetch = require('node-fetch');

describe('i18n with no options', () => {
  const i18n = new I18n();
  test('test translate', () => {
    // empty
    const key = 'mykey';
    const value = key;
    expect(i18n.translate(key)).toEqual(value);
  });

  test('with localstorage', async () => {
    const phrases: Phrases = {
      k1: 'v1',
      k2: 'v2',
      k3: 'v3',
      myinterpolation: 'hello ${name}'
    };
    to('en', phrases);
    await i18n.init();

    // empty
    const key = 'k1';
    const value = 'v1';
    expect(i18n.translate(key)).toEqual(value);
  });

  test('string interpolation', async () => {
    // empty

    expect(i18n.translate('myinterpolation', { name: 'John' })).toEqual(
      'hello John'
    );
  });
});
