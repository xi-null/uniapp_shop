"use strict";
const common_vendor = require("../common/vendor.js");
const http = common_vendor.index.$u.http;
const getHttp = () => {
  return http;
};
const login = (params, config = {}) => http.post("/api/user/login", params, config);
exports.getHttp = getHttp;
exports.login = login;
