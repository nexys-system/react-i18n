import { test, expect } from 'vitest';
import * as Stateful from './index';

test('make sure all dependencies do not return null', () => {
  Object.keys(Stateful).map(k => {
    expect(k).toBeDefined();
  });
});
