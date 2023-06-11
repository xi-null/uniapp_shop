"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("../common/vendor.js");
const request_first = require("./first.js");
common_vendor.index.$u.http.setConfig((config) => {
  config.baseURL = "https://www.example.com";
  return config;
});
common_vendor.index.$u.http.interceptors.request.use((config) => {
  config.data = config.data || {};
  return config;
}, (config) => {
  return Promise.reject(config);
});
common_vendor.index.$u.http.interceptors.response.use((response) => {
  var _a;
  const data = response.data;
  const custom = (_a = response.config) == null ? void 0 : _a.custom;
  if (data.code !== 200) {
    if (custom.toast !== false) {
      common_vendor.index.$u.toast(data.message);
    }
    if (custom == null ? void 0 : custom.catch) {
      return Promise.reject(data);
    } else {
      return new Promise(() => {
      });
    }
  }
  return data.data === void 0 ? {} : data.data;
}, (response) => {
  return Promise.reject(response);
});
exports.getHttp = request_first.getHttp;
