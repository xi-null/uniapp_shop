"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Navigator",
  props: {
    //页面标题
    title: {
      type: String,
      default: ""
    },
    // 该页面返回时候要跳转去的页面
    backUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    //跳转回原来的页面
    goBack() {
      common_vendor.index.switchTab({
        url: this.backUrl
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.goBack()),
    b: common_vendor.t($props.title)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/uniapp_shop/uniapp_shop/components/Navigator/Navigator.vue"]]);
wx.createComponent(Component);
