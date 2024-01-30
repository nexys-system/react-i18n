import { test, expect } from 'vitest';
import { getBrowserLanguage, getLanguage } from './utils';

import NavigatorMock from './navigator-mock.ts';

global.window = { navigator: new NavigatorMock() as any } as any;

test('getBrowserLanguage', () => {
  const value = 'en';
  expect(getBrowserLanguage()).toEqual(value);
});

// need to mock?
// https://stackoverflow.com/questions/52868727/how-to-mock-window-navigator-language-using-jest
test('getBrowserLanguage', () => {
  //console.log(window.navigator.languages);
  expect(getBrowserLanguage()).toEqual('en');
});

test('getLanguage', () => {
  expect(getLanguage('en-US')).toEqual('en');
});
