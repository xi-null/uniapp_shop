"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Navigator",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.goBack()),
    b: common_vendor.t($props.title)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/uniapp_shop/uniapp_shop/components/Navigator/Navigator.vue"]]);
wx.createComponent(Component);
