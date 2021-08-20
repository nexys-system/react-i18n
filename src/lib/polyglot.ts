import { Phrases } from './type';

import * as UntranslatedStore from './untranslated-store';

class Polyglot {
  phrases: Phrases;
  addUntranslatedToStore: boolean;

  constructor(phrases: Phrases, addUntranslatedToStore: boolean = true) {
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

    return p;
  };
}

export default Polyglot;
