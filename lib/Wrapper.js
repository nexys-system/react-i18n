import React from "../_snowpack/pkg/react.js";
import * as U from "./utils-ui.js";
const WrapperI18n = ({
  I18n: I18n2,
  children,
  Loader = U.Loader
}) => {
  const [loading, setLoading] = React.useState(true);
  if (loading) {
    I18n2.init().then((_) => setLoading(false));
    return /* @__PURE__ */ React.createElement(Loader, null);
  }
  return children;
};
export default WrapperI18n;
