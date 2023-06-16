"use strict";
const common_vendor = require("../common/vendor.js");
const http = common_vendor.index.$u.http;
const getHttp = () => {
  return http;
};
const login = (data) => {
  return http.post("/api/user/login", { code: data });
};
exports.getHttp = getHttp;
exports.login = login;
