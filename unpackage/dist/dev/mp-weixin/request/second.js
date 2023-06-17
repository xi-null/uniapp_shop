"use strict";
const common_vendor = require("../common/vendor.js");
const http = common_vendor.index.$u.http;
const qaListAPI = ({ userId, checkAdult, page, size }) => {
  return http.get(`/api/qa/list/${userId}/${checkAdult}/${page}/${size}`);
};
const voiceToTextAPI = (fileUrl) => http.post("/api/qa/audio2text", {
  file: fileUrl
});
const codeAPI = (userId) => http.get(`/api/invitation/info/${userId}`);
exports.codeAPI = codeAPI;
exports.qaListAPI = qaListAPI;
exports.voiceToTextAPI = voiceToTextAPI;
