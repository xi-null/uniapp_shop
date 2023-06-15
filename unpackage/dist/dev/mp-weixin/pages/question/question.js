"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      selected: 1
    };
  }
};
if (!Array) {
  const _easycom_Tabbar2 = common_vendor.resolveComponent("Tabbar");
  _easycom_Tabbar2();
}
const _easycom_Tabbar = () => "../../components/Tabbar/Tabbar.js";
if (!Math) {
  _easycom_Tabbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      selected: $data.selected
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/uni-app/uniapp_shop/pages/question/question.vue"]]);
wx.createPage(MiniProgramPage);
