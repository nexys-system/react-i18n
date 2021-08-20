import * as LocalStorage from "./local-storage.js";
import Polyglot from "./polyglot/index.js";
import {languageDefault, urlDefault} from "./conf.js";
import * as U from "./utils.js";
class I18n {
  constructor(lang = languageDefault, urlFetch) {
    this.t = this.translate;
    this.lang = lang;
    this.urlFetch = urlFetch || this.getUrlFetch();
  }
  async getPhrases(forceRefresh = false) {
    const localStorageContent = LocalStorage.get(this.lang);
    if (forceRefresh || localStorageContent === null) {
      const phrases = await U.getTranslationsFromServer(this.urlFetch);
      LocalStorage.to(this.lang, phrases);
      return phrases;
    }
    return localStorageContent;
  }
  async init(forceRefresh = false) {
    const phrases = await this.getPhrases(forceRefresh);
    const polyglot = new Polyglot(phrases);
    this.translator = polyglot.translate;
    console.log("set");
    return;
  }
  setLanguage(language) {
    this.lang = language;
  }
  translate(key, replaceVars) {
    if (!this.translator) {
      console.error("react-i18n: translator not set");
      return key;
    }
    const content = this.translator(key);
    return U.substituteVars(content, replaceVars);
  }
  getUrlFetch() {
    const url = process.env.I18N_URL_FETCH || urlDefault;
    return url.replace("{lang}", this.lang);
  }
}
export default I18n;
