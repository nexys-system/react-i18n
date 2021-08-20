import React from "../_snowpack/pkg/react.js";
import * as U from "./utils-ui.js";
const WrapperI18n = (i18n, Content, Loader = U.Loader) => {
  const [loading, setLoading] = React.useState(true);
  if (loading) {
    i18n.init().then((_) => setLoading(false));
    return /* @__PURE__ */ React.createElement(Loader, null);
  }
  return /* @__PURE__ */ React.createElement(Content, null);
};
export default WrapperI18n;
