import React from 'react';

import I18n from './main';
import * as U from './utils-ui';

const WrapperI18n = ({
  I18n,
  children,
  Loader = U.Loader
}: {
  I18n: I18n;
  children: JSX.Element | JSX.Element[];
  Loader?: () => JSX.Element;
}) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  if (loading) {
    I18n.init().then(_ => setLoading(false));

    return <Loader />;
  }

  return children;
};

export default WrapperI18n;
