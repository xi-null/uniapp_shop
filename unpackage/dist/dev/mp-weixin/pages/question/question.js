"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../request/index.js");
require("../../request/first.js");
require("../../request/second.js");
const _sfc_main = {
  data() {
    return {
      selected: 1,
      recordManager: "",
      voicePath: "",
      //录音地址
      text: ""
      //录音转成的文字
    };
  },
  mounted() {
    this.recordManager = common_vendor.index.getRecorderManager();
    this.recordManager.onStop(async (res) => {
      console.log("recorder stop" + JSON.stringify(res));
      this.voicePath = res.tempFilePath;
      common_vendor.index.uploadFile({
        url: "https://124.221.52.24:20235/api/qa/audio2text",
        //这是你自己后台的连接
        filePath: this.voicePath,
        name: "file",
        //后台要绑定的名称
        header: {
          "Content-Type": "multipart/form-data"
        },
        success: function(ress) {
          console.log("上传成功，返回内容是: " + ress.data);
        },
        fail: function(ress) {
          console.log("。。上传服务器 失败", ress);
        }
      });
    });
    console.log(this.recordManager);
  },
  methods: {
    //开始录音
    startRecord() {
      console.log(11);
      this.recordManager.start();
    },
    //结束
    endRecord() {
      console.log("end");
      this.recordManager.stop();
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
      title: "语言问答",
      backUrl: "/pages/index/index"
    }),
    b: common_vendor.o((...args) => $options.startRecord && $options.startRecord(...args)),
    c: common_vendor.o((...args) => $options.endRecord && $options.endRecord(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/uniapp_shop/uniapp_shop/pages/question/question.vue"]]);
wx.createPage(MiniProgramPage);
