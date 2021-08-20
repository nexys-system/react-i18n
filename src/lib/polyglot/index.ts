import { Phrases } from '../type';

import * as UntranslatedStore from './untranslated-store';
import PolyglotAbstract from './abstract';

class Polyglot extends PolyglotAbstract {
  phrases: Phrases;
  addUntranslatedToStore: boolean;

  constructor(phrases: Phrases, addUntranslatedToStore: boolean = true) {
    super();
    this.phrases = phrases;
    this.addUntranslatedToStore = addUntranslatedToStore;
  }

  translate = (s: string) => {
    const p: string | undefined = this.phrases[s];

    if (!p) {
      if (this.addUntranslatedToStore) {
        UntranslatedStore.set(s);
      }

      return s;
    }

    console.log(p);

    return p;
  };
}

export default Polyglot;
