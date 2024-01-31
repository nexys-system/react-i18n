import React from 'react';

import I18n from './lib/main';
import I18nWrapper from './lib/Wrapper';

const language = localStorage.getItem('LANG') || 'en';
const langUrl = './assets/' + language + '.json';

const i18n = new I18n(language, langUrl);

const UI = () => {
  const handleClick = () => {
    localStorage.setItem('LANG', language === 'en' ? 'fr' : 'en');
    window.location.href = window.location.pathname;
  };

  return (
    <div className="container">
      <h1>{i18n.translate('home.title')}</h1>{' '}
      <p>
        {i18n.t('home.description')}
        <a href="https://www.npmjs.com/package/@nexys/react-i18n">
          @nexys/react-i18n
        </a>
      </p>
      <button onClick={handleClick} className="btn btn-primary">
        {i18n.t('home.button')}
      </button>
      <p>{i18n.t('home.intro', { name: 'John' })}</p>
      <p>
        <small>
          The following string <code>{i18n.t('tobetranslated')}</code> is not
          translated and can be found in the local storage
        </small>
      </p>
    </div>
  );
};

export default () => I18nWrapper(i18n, UI);
