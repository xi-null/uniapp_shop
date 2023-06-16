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
      text: ""
    };
  },
  mounted() {
    this.recordManager = common_vendor.index.getRecorderManager();
    this.recordManager.onStop(async (res) => {
      console.log("recorder stop" + JSON.stringify(res));
      this.voicePath = res.tempFilePath;
      common_vendor.index.uploadFile({
        url: "https://124.221.52.24:20235/api/qa/audio2text",
        filePath: this.voicePath,
        name: "file",
        header: {
          "Content-Type": "multipart/form-data"
        },
        success: function(ress) {
          console.log("\u4E0A\u4F20\u6210\u529F\uFF0C\u8FD4\u56DE\u5185\u5BB9\u662F: " + ress.data);
        },
        fail: function(ress) {
          console.log("\u3002\u3002\u4E0A\u4F20\u670D\u52A1\u5668 \u5931\u8D25", ress);
        }
      });
    });
    console.log(this.recordManager);
  },
  methods: {
    startRecord() {
      console.log(11);
      this.recordManager.start();
    },
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
      title: "\u8BED\u8A00\u95EE\u7B54",
      backUrl: "/pages/index/index"
    }),
    b: common_vendor.o((...args) => $options.startRecord && $options.startRecord(...args)),
    c: common_vendor.o((...args) => $options.endRecord && $options.endRecord(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/uni-app/uniapp_shop/pages/question/question.vue"]]);
wx.createPage(MiniProgramPage);
