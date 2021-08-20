import React from "./_snowpack/pkg/react.js";
import I18n from "./lib/main.js";
import I18nWrapper from "./lib/Wrapper.js";
const language = localStorage.getItem("LANG") || "en";
const langUrl = "/assets/" + language + ".json";
const i18n = new I18n(language, langUrl);
const UI = () => {
  const handleClick = () => {
    localStorage.setItem("LANG", language === "en" ? "fr" : "en");
    window.location.href = window.location.pathname;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, i18n.translate("home.title")), " ", /* @__PURE__ */ React.createElement("p", null, i18n.t("home.description"), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.npmjs.com/package/@nexys/react-i18n"
  }, "@nexys/react-i18n")), /* @__PURE__ */ React.createElement("button", {
    onClick: handleClick,
    className: "btn btn-primary"
  }, i18n.t("home.button")), /* @__PURE__ */ React.createElement("p", null, i18n.t("home.intro", {name: "John"})), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("small", null, "The following string ", /* @__PURE__ */ React.createElement("code", null, i18n.t("tobetranslated")), " is not translated and can be found in the local storage")));
};
export default () => I18nWrapper(i18n, UI);
