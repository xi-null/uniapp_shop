"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      selected: 2,
      itemList: [
        { label: "个人历史订单", url: "/pages/history_orders/history_orders", imgUrl: "../../static/img/historical.svg" },
        { label: "已绑定子女", url: "/pages/child_information/child_information", imgUrl: "../../static/img/sondaughter.svg" },
        { label: "邀请码填写", url: "/pages/Invitation_code/Invitation_code/Historical_orders", imgUrl: "../../static/img/invited.svg" },
        { label: "邀请好友激励", url: "/pages/Historical_orders/Historical_orders", imgUrl: "../../static/img/present.svg" },
        { label: "智能生成儿童心理健康报告", url: "/pages/report/report", imgUrl: "../../static/img/report.svg" },
        { label: "意见反馈", url: "/pages/feedback/feedback", imgUrl: "../../static/img/advice.svg" }
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
    a: common_vendor.f($data.itemList, (item, index, i0) => {
      return {
        a: item.imgUrl,
        b: common_vendor.t(item.label),
        c: common_vendor.o(($event) => $options.goPage(item.url), item.index),
        d: item.index
      };
    }),
    b: common_vendor.p({
      selected: $data.selected
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/uniapp_shop/uniapp_shop/pages/center/center.vue"]]);
wx.createPage(MiniProgramPage);
