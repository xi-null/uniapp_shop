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
      text: "",
      list: [],
      isEnd: false,
      index: 0
    };
  },
  mounted() {
    this.recordManager = common_vendor.index.getRecorderManager();
    this.recordManager.onStop(async (res) => {
      console.log("recorder stop" + JSON.stringify(res));
      this.voicePath = res.tempFilePath;
      this.list[this.index].text = "\u95EE\u9898\u65E5\u6492\u65E6\u6492\u65E6sad";
      this.isEnd = true;
    });
    console.log(this.recordManager);
  },
  methods: {
    startRecord() {
      console.log(11);
      this.recordManager.start();
      let obj = {
        type: 0,
        text: ""
      };
      this.list.push(obj);
      this.index = this.list.length - 1;
    },
    endRecord() {
      console.log("end");
      this.recordManager.stop();
    },
    getAnswer() {
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
    b: common_vendor.f($data.list, (item, key, i0) => {
      return common_vendor.e($data.isEnd ? {
        a: common_vendor.t(item.text),
        b: common_vendor.t(item.time)
      } : {
        c: _ctx.type == 0 ? "../../static/img/radio.gif" : "../../static/img/radio.gif"
      }, {
        d: item.type == 0 ? 1 : "",
        e: item.type == 1 ? 1 : ""
      });
    }),
    c: $data.isEnd,
    d: $data.index,
    e: common_vendor.o((...args) => $options.startRecord && $options.startRecord(...args)),
    f: common_vendor.o((...args) => $options.endRecord && $options.endRecord(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/uni-app/uniapp_shop/pages/question/question.vue"]]);
wx.createPage(MiniProgramPage);
