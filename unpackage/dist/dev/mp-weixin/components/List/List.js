"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["list"],
  name: "List",
  data() {
    return {};
  },
  mounted() {
    console.log(this.list);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, key, i0) => {
      return {
        a: common_vendor.t(item.questionText),
        b: common_vendor.t(item.askTime),
        c: common_vendor.t(item.answerText)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/uni-app/uniapp_shop/components/List/List.vue"]]);
wx.createComponent(Component);
