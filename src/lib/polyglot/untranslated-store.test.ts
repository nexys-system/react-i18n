import { describe, test, expect } from 'vitest';
import * as U from './untranslated-store';
import LocalStorageMock from '../local-storage-mock.ts';

global.localStorage = new LocalStorageMock();

describe('get and set', () => {
  test('get and set simple', () => {
    U.set('mykey1');
    expect(U.get()).toEqual(['mykey1']);
  });

  test('get and set simple 2', () => {
    U.set('mykey2');
    expect(U.get()).toEqual(['mykey1', 'mykey2']);
  });

  test('get and set simple - duplicate', () => {
    //
    U.set('mykey2');
    expect(U.get()).toEqual(['mykey1', 'mykey2']);
  });
});
