"use strict";
const common_vendor = require("../common/vendor.js");
const http = common_vendor.index.$u.http;
const getHttp = () => {
  return http;
};
exports.getHttp = getHttp;
