"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    selected: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      color: "#333333",
      selectedColor: "#000000",
      list: [
        {
          "pagePath": "/pages/index/index",
          "text": "\u95EE\u548C\u7B54",
          "iconPath": "../../static/img/QA1.svg",
          "selectedIconPath": "../../static/img/QA2.svg"
        },
        {
          "pagePath": "/pages/question/question",
          "text": "\u8BED\u97F3\u95EE\u7B54",
          "iconPath": "../../static/img/logo.svg",
          "selectedIconPath": "../../static/img/logo.svg"
        },
        {
          "pagePath": "/pages/center/center",
          "text": "\u6211\u7684",
          "iconPath": "../../static/img/me1.svg",
          "selectedIconPath": "../../static/img/me2.svg"
        }
      ]
    };
  },
  methods: {
    switchTab(item, index) {
      console.log("item", item);
      console.log("index", index);
      let url = item.pagePath;
      if (index == 1) {
        common_vendor.index.navigateTo({
          url
        });
        return;
      }
      common_vendor.index.switchTab({
        url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: $props.selected === index ? item.selectedIconPath : item.iconPath,
        b: common_vendor.t(item.text),
        c: $props.selected === index ? $data.selectedColor : $data.color,
        d: index,
        e: common_vendor.o(($event) => $options.switchTab(item, index), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/uni-app/uniapp_shop/components/Tabbar/Tabbar.vue"]]);
wx.createComponent(Component);
