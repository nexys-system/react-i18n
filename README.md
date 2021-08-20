# I18n for React

[![npm version](https://badge.fury.io/js/%40nexys%2Freact-i18n.svg)](https://www.npmjs.com/package/@nexys/react-i18n)
[![npm version](https://img.shields.io/npm/v/@nexys/react-i18n.svg)](https://www.npmjs.com/package/@nexys/react-i18n)
![Test Package](https://github.com/Nexysweb/react-i18n/workflows/Test%20Package/badge.svg)
![Publish](https://github.com/Nexysweb/react-i18n/workflows/Publish/badge.svg)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Bundlephobia](https://badgen.net/bundlephobia/min/@nexys/react-i18n)](https://bundlephobia.com/result?p=@nexys/react-i18n)

I18n implementation.

## Features

- get strings from a backend
- strings are cached in the local store
- untranslated strings are added to the local store

## Get Started

### Installation

`yarn add @nexys/react-i18n`

### Intialization

```
import I18nService from '@nexys/react-i18n';

const i18n = new I18n(); // this needs to be done once
i18n.init(); // gets the strings

i18n.translate('myStringToBeTranslated')
```

#### With wrapper

```
import I18nService from '@nexys/react-i18n';

const i18n = new I18n(); // this needs to be done once

export default () => (<Wrapper i18n={i18n}>
  <p>{i18n.translate('myStringToBeTranslated')}
</Wrapper>);
```
