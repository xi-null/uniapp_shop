"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "\u5B50\u5973\u8D44\u6599",
      childList: [
        1,
        2
      ],
      backUrl: "/pages/center/center"
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_Navigator2 = common_vendor.resolveComponent("Navigator");
  _easycom_Navigator2();
}
const _easycom_Navigator = () => "../../components/Navigator/Navigator.js";
if (!Math) {
  _easycom_Navigator();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: $data.title,
      backUrl: $data.backUrl
    }),
    b: common_vendor.f($data.childList, (item, k0, i0) => {
      return {};
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/uni-app/uniapp_shop/pages/child_information/child_information.vue"]]);
wx.createPage(MiniProgramPage);
