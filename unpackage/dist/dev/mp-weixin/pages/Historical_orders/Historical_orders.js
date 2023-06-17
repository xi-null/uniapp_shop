"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../request/index.js");
const request_second = require("../../request/second.js");
require("../../request/first.js");
const _sfc_main = {
  data() {
    return {
      userId: common_vendor.index.getStorageSync("userId"),
      invideInfo: {
        inviteCode: 0,
        inviteNum: 0,
        inviteTotalProfit: 0,
        inviteBalance: 0
      }
    };
  },
  onLoad() {
    console.log(this.invideInfo.inviteCode);
    this.getCode();
  },
  methods: {
    async getCode() {
      let result = await request_second.codeAPI(this.userId);
      this.invideInfo = result.item;
      console.log(this.invideInfo, result);
    },
    copy() {
      common_vendor.index.setClipboardData({
        data: this.invideInfo.inviteCode,
        success: function() {
          common_vendor.index.showToast({
            title: "\u590D\u5236\u6210\u529F"
          });
        },
        fail: function() {
          common_vendor.index.showToast({
            title: "\u590D\u5236\u5931\u8D25"
          });
        }
      });
    },
    income() {
      common_vendor.index.showModal({
        title: "\u8F93\u5165\u63D0\u73B0\u91D1\u989D(\u5143)",
        placeholderText: "\u4E0D\u53EF\u591A\u4E8E\u672A\u63D0\u73B0\u91D1\u989D",
        editable: true,
        success: function(res) {
          if (res.confirm) {
            console.log("\u7528\u6237\u70B9\u51FB\u786E\u5B9A");
          } else if (res.cancel) {
            console.log("\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
          }
        }
      });
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
      title: "\u9080\u8BF7\u597D\u53CB",
      backUrl: "/pages/center/center"
    }),
    b: common_vendor.t($data.invideInfo.inviteCode),
    c: common_vendor.o((...args) => $options.copy && $options.copy(...args)),
    d: common_vendor.t($data.invideInfo.inviteNum),
    e: common_vendor.t($data.invideInfo.inviteTotalProfit),
    f: common_vendor.t($data.invideInfo.inviteBalance),
    g: common_vendor.o((...args) => $options.income && $options.income(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/uni-app/uniapp_shop/pages/Historical_orders/Historical_orders.vue"]]);
wx.createPage(MiniProgramPage);
