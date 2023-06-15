"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../request/index.js");
require("../../request/first.js");
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
      console.log(e);
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
    d: common_vendor.o(($event) => $data.show = false),
    e: common_vendor.p({
      show: $data.show,
      columns: $options.selectList,
      keyName: "label"
    }),
    f: common_vendor.o(($event) => $data.show = true),
    g: common_vendor.p({
      list: $data.qaList
    }),
    h: common_vendor.p({
      selected: $data.selected
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/uni-app/uniapp_shop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
