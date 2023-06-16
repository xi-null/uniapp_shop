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
      //导航栏选中
      role: "角色1",
      //角色
      roleList: [
        { nickname: "角色1", childId: 0 },
        { nickname: "角色2", childId: 1 }
      ],
      //角色列表
      show: false,
      //角色选择
      selectIcon: "../../static/img/go2.svg",
      //图片路径
      qaList: [
        {
          "qaId": "string",
          "questionText": "阿斯顿撒旦阿萨大阿萨大撒赖扩大就撒旦卢卡斯离开洒家的立刻撒旦立刻爱上角度来看阿斯利康撒低级",
          "answerText": "阿斯顿金克拉阿斯兰的空间阿里山扩大啊离开洒家道路喀什的艰苦拉萨大家雷克萨角度来看撒阿",
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
    //下拉框数据要求
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
    /***
     角色下拉框变换
    ***/
    change(e) {
      console.log(e);
    },
    confirm(e) {
      console.log(e.value[0], "role");
      this.selectIcon = "../../static/img/go2.svg";
      this.role = e.value[0].label;
      this.show = false;
    },
    //扫码功能
    scan() {
      common_vendor.index.scanCode({
        success: function(res) {
          console.log("条码类型：" + res.scanType);
          console.log("条码内容：" + res.result);
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/uniapp_shop/uniapp_shop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
