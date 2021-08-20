import * as UntranslatedStore from "./untranslated-store.js";
import PolyglotAbstract from "./abstract.js";
class Polyglot extends PolyglotAbstract {
  constructor(phrases, addUntranslatedToStore = true) {
    super();
    this.translate = (s) => {
      const p = this.phrases[s];
      if (!p) {
        if (this.addUntranslatedToStore) {
          UntranslatedStore.set(s);
        }
        return s;
      }
      return p;
    };
    this.phrases = phrases;
    this.addUntranslatedToStore = addUntranslatedToStore;
  }
}
export default Polyglot;
