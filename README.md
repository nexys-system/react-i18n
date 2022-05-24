# I18n for React

[![NPM package](https://badge.fury.io/js/%40nexys%2Freact-i18n.svg)](https://www.npmjs.com/package/@nexys/react-i18n)
[![NPM package](https://img.shields.io/npm/v/@nexys/react-i18n.svg)](https://www.npmjs.com/package/@nexys/react-i18n)
[![Bundleophobia](https://badgen.net/bundlephobia/min/@nexys/react-i18n)](https://bundlephobia.com/result?p=@nexys/react-i18n)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![Test Package](https://github.com/nexys-system/react-i18n/actions/workflows/test.yml/badge.svg)](https://github.com/nexys-system/react-i18n/actions/workflows/test.yml)
[![Publish](https://github.com/nexys-system/react-i18n/actions/workflows/publish.yml/badge.svg)](https://github.com/nexys-system/react-i18n/actions/workflows/publish.yml)

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

const UI = () => <p>{i18n.translate('myStringToBeTranslated')}</p>;

export default Wrapper(i18n, UI);
```

see https://github.com/nexys-system/react-i18n/blob/master/src/app.tsx for more information.
