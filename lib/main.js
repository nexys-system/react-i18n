import * as LocalStorage from "./local-storage.js";
import Polyglot from "./polyglot/index.js";
import {languageDefault, urlDefault} from "./conf.js";
import * as U from "./utils.js";
const maxDeltaRefreshDefault = 1e3 * 60 * 60 * 24;
class I18n {
  constructor(lang = languageDefault, urlFetch, options) {
    this.t = this.translate;
    this.lang = lang;
    this.urlFetch = urlFetch || this.getUrlFetch();
    this.options = options || {};
  }
  async refresh() {
    const phrases = await U.getTranslationsFromServer(this.urlFetch);
    LocalStorage.to(this.lang, phrases);
    return phrases;
  }
  async getPhrases(forceRefresh = false) {
    const localStorageContent = LocalStorage.get(this.lang);
    if (forceRefresh || localStorageContent === null) {
      return this.refresh();
    }
    const {content, timestamp} = localStorageContent;
    const maxDeltaRefresh = this.options.maxDeltaRefresh || maxDeltaRefreshDefault;
    if (new Date().getTime() - timestamp > maxDeltaRefresh) {
      return this.refresh();
    }
    return content;
  }
  async init(forceRefresh = false) {
    const phrases = await this.getPhrases(forceRefresh);
    const polyglot = new Polyglot(phrases);
    this.translator = polyglot.translate;
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
    return U.substituteVars(content, replaceVars, this.options.variableInterpolationPrefix, this.options.variableInterpolationSuffix);
  }
  getUrlFetch() {
    const url = urlDefault;
    return url.replace("{lang}", this.lang);
  }
}
export default I18n;
