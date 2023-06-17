"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        { number: 20, price: 900 },
        { number: 20, price: 900 },
        { number: 20, price: 900 },
        { number: 20, price: 900 },
        { number: 20, price: 900 },
        { number: 20, price: 900 }
      ],
      inroductionList: ["\u8BF4\u660E\u8BF4\u660E\u8BF4\u660E", "\u8BF4\u660E\u8BF4\u660E"],
      select: 0
    };
  },
  methods: {
    choose(index) {
      this.select = index;
    }
  }
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
      title: "\u5145\u503C",
      backUrl: "/pages/center/center"
    }),
    b: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.price),
        b: common_vendor.t(item.number),
        c: index,
        d: common_vendor.o(($event) => $options.choose(index), index),
        e: index == $data.select ? 1 : ""
      };
    }),
    c: common_vendor.f($data.inroductionList, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.t(item),
        c: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/uni-app/uniapp_shop/pages/pay/pay.vue"]]);
wx.createPage(MiniProgramPage);
