import LocalStorageMock from './local-storage-mock';
import { to, get } from './local-storage';
import { Phrases } from './type';

global.localStorage = new LocalStorageMock();

test('i18n local storage', () => {
  const lang = 'de';
  const phrases: Phrases = { k1: 'v1', k2: 'v2', k3: 'v3' };
  to(lang, phrases);
  const pContent = get(lang);

  if (!pContent) {
    throw Error('somethig went wrong');
  }

  expect(pContent.content).toEqual(phrases);
});
