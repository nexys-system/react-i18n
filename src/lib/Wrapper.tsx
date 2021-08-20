/**
 * this will fetch the translation and the render the content
 */
import React from 'react';

import I18n from './main';
import * as U from './utils-ui';

const WrapperI18n = (
  i18n: I18n,
  Content: () => JSX.Element,
  Loader: () => JSX.Element = U.Loader
) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  if (loading) {
    i18n.init().then(_ => setLoading(false));

    return <Loader />;
  }

  return <Content />;
};

export default WrapperI18n;
