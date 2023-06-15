"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../request/index.js");
require("../../request/first.js");
const _sfc_main = {
  onLoad() {
    console.log(1);
    this.login();
    this.nickName = common_vendor.index.getStorageSync("nickname");
  },
  data() {
    return {
      selected: 2,
      nickName: "",
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
    },
    login() {
      common_vendor.index.login({
        "provider": "weixin",
        "onlyAuthorize": true,
        // 微信登录仅请求授权认证
        success: function(event) {
          console.log(event.code);
          common_vendor.index.request({
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "http://124.221.52.24:20235/api/user/login",
            data: {
              code: event.code
            },
            method: "POST",
            success: (res) => {
              console.log(res);
              common_vendor.index.setStorageSync("accessToken", res.data.item.accessToken);
              common_vendor.index.setStorageSync("userId", res.data.item.userId);
              common_vendor.index.setStorageSync("refreshToken", res.data.item.refreshToken);
              common_vendor.index.setStorageSync("openid", res.data.item.openid);
              common_vendor.index.setStorageSync("nickname", res.data.item.nickname);
            },
            fail() {
              console.log("请求失败");
            }
          });
        },
        fail: function(err) {
          console.log("登录失败");
        }
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
    b: common_vendor.f($data.itemList, (item, index, i0) => {
      return {
        a: item.imgUrl,
        b: common_vendor.t(item.label),
        c: common_vendor.o(($event) => $options.goPage(item.url), item.index),
        d: item.index
      };
    }),
    c: common_vendor.p({
      selected: $data.selected
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/uniapp_shop/uniapp_shop/pages/center/center.vue"]]);
wx.createPage(MiniProgramPage);
