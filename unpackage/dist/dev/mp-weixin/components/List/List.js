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
  },
  methods: {
    scrolltolower() {
      console.log("加载");
    }
  }
};
if (!Array) {
  const _easycom_u_list_item2 = common_vendor.resolveComponent("u-list-item");
  const _easycom_u_list2 = common_vendor.resolveComponent("u-list");
  (_easycom_u_list_item2 + _easycom_u_list2)();
}
const _easycom_u_list_item = () => "../../uni_modules/uview-plus/components/u-list-item/u-list-item.js";
const _easycom_u_list = () => "../../uni_modules/uview-plus/components/u-list/u-list.js";
if (!Math) {
  (_easycom_u_list_item + _easycom_u_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, key, i0) => {
      return {
        a: common_vendor.t(item.questionText),
        b: common_vendor.t(item.askTime),
        c: common_vendor.t(item.answerText),
        d: "dd3f4994-1-" + i0 + ",dd3f4994-0"
      };
    }),
    b: common_vendor.o($options.scrolltolower)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/uniapp_shop/uniapp_shop/components/List/List.vue"]]);
wx.createComponent(Component);
