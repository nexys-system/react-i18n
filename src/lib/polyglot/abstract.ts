import { Phrases } from '../type';

abstract class PolyglotAbstract {
  abstract phrases: Phrases;

  abstract translate(s: string): string;
}

export default PolyglotAbstract;
