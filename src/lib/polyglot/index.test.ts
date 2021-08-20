import Polyglot from './index';

describe('Polyglot', () => {
  const p = new Polyglot({ hello: 'world' });

  test('init', () => {
    expect(p.translate('hello')).toEqual('world');
  });
});
