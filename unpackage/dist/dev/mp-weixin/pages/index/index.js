"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../request/index.js");
require("../../request/first.js");
require("../../request/second.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      selected: 0,
      role: "\u89D2\u82721",
      roleList: [
        { nickname: "\u89D2\u82721", childId: 0 },
        { nickname: "\u89D2\u82722", childId: 1 }
      ],
      show: false,
      selectIcon: "../../static/img/go2.svg",
      qaList: [
        {
          "qaId": "string",
          "questionText": "\u963F\u65AF\u987F\u6492\u65E6\u963F\u8428\u5927\u963F\u8428\u5927\u6492\u8D56\u6269\u5927\u5C31\u6492\u65E6\u5362\u5361\u65AF\u79BB\u5F00\u6D12\u5BB6\u7684\u7ACB\u523B\u6492\u65E6\u7ACB\u523B\u7231\u4E0A\u89D2\u5EA6\u6765\u770B\u963F\u65AF\u5229\u5EB7\u6492\u4F4E\u7EA7",
          "answerText": "\u963F\u65AF\u987F\u91D1\u514B\u62C9\u963F\u65AF\u5170\u7684\u7A7A\u95F4\u963F\u91CC\u5C71\u6269\u5927\u554A\u79BB\u5F00\u6D12\u5BB6\u9053\u8DEF\u5580\u4EC0\u7684\u8270\u82E6\u62C9\u8428\u5927\u5BB6\u96F7\u514B\u8428\u89D2\u5EA6\u6765\u770B\u6492\u963F",
          "askTime": "string",
          "answerTime": "string",
          "hasError": true,
          "errorMsg": "string"
        },
        {
          "qaId": "string",
          "questionText": "string",
          "answerText": "string",
          "askTime": "string",
          "answerTime": "string",
          "hasError": true,
          "errorMsg": "string"
        },
        {
          "qaId": "string",
          "questionText": "string",
          "answerText": "string",
          "askTime": "string",
          "answerTime": "string",
          "hasError": true,
          "errorMsg": "string"
        }
      ]
    };
  },
  onLoad() {
    common_vendor.index.hideTabBar();
    console.log(this.selectList);
  },
  computed: {
    selectList() {
      return [this.roleList.map((item) => {
        return {
          label: item.nickname,
          id: item.childId
        };
      })];
    }
  },
  methods: {
    change(e) {
      console.log(e);
    },
    confirm(e) {
      console.log(e.value[0], "role");
      this.selectIcon = "../../static/img/go2.svg";
      this.role = e.value[0].label;
      this.show = false;
    },
    scan() {
      common_vendor.index.scanCode({
        success: function(res) {
          console.log("\u6761\u7801\u7C7B\u578B\uFF1A" + res.scanType);
          console.log("\u6761\u7801\u5185\u5BB9\uFF1A" + res.result);
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_picker2 = common_vendor.resolveComponent("u-picker");
  const _easycom_List2 = common_vendor.resolveComponent("List");
  const _easycom_Tabbar2 = common_vendor.resolveComponent("Tabbar");
  (_easycom_u_picker2 + _easycom_List2 + _easycom_Tabbar2)();
}
const _easycom_u_picker = () => "../../uni_modules/uview-plus/components/u-picker/u-picker.js";
const _easycom_List = () => "../../components/List/List.js";
const _easycom_Tabbar = () => "../../components/Tabbar/Tabbar.js";
if (!Math) {
  (_easycom_u_picker + _easycom_List + _easycom_Tabbar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.role),
    b: $data.selectIcon,
    c: common_vendor.o($options.confirm),
    d: common_vendor.o(($event) => {
      $data.show = false;
      $data.selectIcon = "../../static/img/go2.svg";
    }),
    e: common_vendor.p({
      show: $data.show,
      columns: $options.selectList,
      keyName: "label"
    }),
    f: common_vendor.o(($event) => {
      $data.show = true;
      $data.selectIcon = "../../static/img/go1.svg";
    }),
    g: common_vendor.o((...args) => $options.scan && $options.scan(...args)),
    h: common_vendor.p({
      list: $data.qaList
    }),
    i: common_vendor.p({
      selected: $data.selected
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/uni-app/uniapp_shop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
