"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onLoad() {
    this.nickName = common_vendor.index.getStorageSync("nickname");
  },
  data() {
    return {
      selected: 2,
      nickName: "",
      itemList: [
        { label: "\u4E2A\u4EBA\u5386\u53F2\u8BA2\u5355", url: "/pages/history_orders/history_orders", imgUrl: "../../static/img/historical.svg" },
        { label: "\u5DF2\u7ED1\u5B9A\u5B50\u5973", url: "/pages/child_information/child_information", imgUrl: "../../static/img/sondaughter.svg" },
        { label: "\u9080\u8BF7\u7801\u586B\u5199", url: "/pages/Invitation_code/Invitation_code/Historical_orders", imgUrl: "../../static/img/invited.svg" },
        { label: "\u9080\u8BF7\u597D\u53CB\u6FC0\u52B1", url: "/pages/Historical_orders/Historical_orders", imgUrl: "../../static/img/present.svg" },
        { label: "\u667A\u80FD\u751F\u6210\u513F\u7AE5\u5FC3\u7406\u5065\u5EB7\u62A5\u544A", url: "/pages/report/report", imgUrl: "../../static/img/report.svg" },
        { label: "\u610F\u89C1\u53CD\u9988", url: "/pages/feedback/feedback", imgUrl: "../../static/img/advice.svg" }
      ]
    };
  },
  methods: {
    goPage(goUrl) {
      common_vendor.index.navigateTo({
        url: goUrl
      });
    }
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
    a: common_vendor.t($data.nickName),
    b: common_vendor.o(($event) => $options.goPage("/pages/pay/pay")),
    c: common_vendor.f($data.itemList, (item, index, i0) => {
      return {
        a: item.imgUrl,
        b: common_vendor.t(item.label),
        c: common_vendor.o(($event) => $options.goPage(item.url), item.index),
        d: item.index
      };
    }),
    d: common_vendor.p({
      selected: $data.selected
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/uni-app/uniapp_shop/pages/center/center.vue"]]);
wx.createPage(MiniProgramPage);
