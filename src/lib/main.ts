import * as LocalStorage from './local-storage';
import Polyglot from './polyglot';
import { languageDefault, urlDefault } from './conf';
import { Phrases, ReplaceVar } from './type';
import * as U from './utils';

class I18n {
  lang: string;
  translator?: (s: string) => string;
  urlFetch: string;

  constructor(lang: string = languageDefault, urlFetch?: string) {
    this.lang = lang;
    this.urlFetch = urlFetch || this.getUrlFetch();
  }

  async getPhrases(forceRefresh: boolean = false): Promise<Phrases> {
    const localStorageContent = LocalStorage.get(this.lang);

    if (forceRefresh || localStorageContent === null) {
      const phrases = await U.getTranslationsFromServer(this.urlFetch);
      LocalStorage.to(this.lang, phrases);
      return phrases;
    }

    return localStorageContent;
  }

  async init(forceRefresh: boolean = false): Promise<void> {
    const phrases = await this.getPhrases(forceRefresh);

    const polyglot = new Polyglot(phrases);
    this.translator = polyglot.translate;
  }

  setLanguage(language: string): void {
    this.lang = language;
  }

  /**
   * finds the translation for the given key
   * @param  key: key to be translated
   * @return translattion associated with `key`
   */
  translate(key: string, replaceVars?: { [key: string]: ReplaceVar }): string {
    if (!this.translator) {
      return key;
    }

    const content: string = this.translator(key);

    return U.substituteVars(content, replaceVars, '%{');
  }

  // alias, so `i18n.t` can be used instead of `i18n.translate`
  t = this.translate;

  getUrlFetch(): string {
    const url: string = process.env.I18N_URL_FETCH || urlDefault;

    return url.replace('{lang}', this.lang);
  }
}

export default I18n;
