import ScrollHint from "scroll-hint";
import "scroll-hint/css/scroll-hint.css";

// ScrollHint
window.onload = function () {
  new ScrollHint(".img_scroll", {
    scrollHintIconAppendClass: "scroll-hint-icon-white", //背景白
    suggestiveShadow: true, //シャドウを追加
    i18n: {
      scrollable: "スクロールできます", //表示されるテキストを変更
    },
  });
};
