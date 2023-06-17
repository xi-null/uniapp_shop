"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("../common/vendor.js");
const request_first = require("./first.js");
const request_second = require("./second.js");
common_vendor.index.$u.http.setConfig((config) => {
  config.baseURL = "http://124.221.52.24:20235";
  config.header = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  return config;
});
common_vendor.index.$u.http.interceptors.request.use((config) => {
  config.data = config.data || {};
  if (common_vendor.index.getStorageSync("accessToken")) {
    config.header.accessToken = common_vendor.index.getStorageSync("accessToken");
  }
  return config;
}, (config) => {
  return Promise.reject(config);
});
common_vendor.index.$u.http.interceptors.response.use((response) => {
  const data = response.data;
  if (!data.success) {
    common_vendor.index.$u.toast(data.message);
  }
  return data;
}, (response) => {
  return Promise.reject(response);
});
exports.getHttp = request_first.getHttp;
exports.login = request_first.login;
exports.codeAPI = request_second.codeAPI;
exports.qaListAPI = request_second.qaListAPI;
exports.voiceToTextAPI = request_second.voiceToTextAPI;
