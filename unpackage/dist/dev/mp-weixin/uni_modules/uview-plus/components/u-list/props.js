"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    showScrollbar: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.showScrollbar
    },
    lowerThreshold: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.lowerThreshold
    },
    upperThreshold: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.upperThreshold
    },
    scrollTop: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.scrollTop
    },
    offsetAccuracy: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.offsetAccuracy
    },
    enableFlex: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.enableFlex
    },
    pagingEnabled: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.pagingEnabled
    },
    scrollable: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.scrollable
    },
    scrollIntoView: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.scrollIntoView
    },
    scrollWithAnimation: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.scrollWithAnimation
    },
    enableBackToTop: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.enableBackToTop
    },
    height: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.height
    },
    width: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.width
    },
    preLoadScreen: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.preLoadScreen
    }
  }
};
exports.props = props;
