import React from 'react';

import I18n from './lib/main';
import I18nWrapper from './lib/Wrapper';

const i18n = new I18n('en', '/assets/en.json');

const UI = () => (
  <div className="container">
    <h1>{i18n.translate('home.title')}</h1>{' '}
    <p>
      {i18n.t('home.description')}
      <a href="https://www.npmjs.com/package/@nexys/react-i18n">
        @nexys/react-i18n
      </a>
    </p>
    <button className="btn btn-primary">{i18n.t('home.button')}</button>
    <p>
      <small>
        The following string <code>{i18n.t('tobetranslated')}</code> is not
        translated and can be found in the local storage
      </small>
    </p>
  </div>
);

export default () => I18nWrapper(i18n, UI);
