// import jQuery from "jquery";
// const $ = jQuery;
import ScrollHint from "scroll-hint";
import "scroll-hint/css/scroll-hint.css";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox-plus-jquery.min.js";

// クリックすると画像が変わる部分の最初の色が黄色とScrollHint
window.onload = function () {
  let texts = document.querySelectorAll("#gke-fire-date p.c-pointer");
  for (let i = 0; i < texts.length; i++) {
    if (i === 0) {
      texts[i].classList.add("clicked"); // 最初のテキストに .clicked クラスを追加
    } else {
      texts[i].classList.remove("clicked"); // 他のテキストから .clicked クラスを削除
    }
  }

  // ScrollHint
  new ScrollHint(".img_scroll", {
    scrollHintIconAppendClass: "scroll-hint-icon-white", //背景白
    suggestiveShadow: true, //シャドウを追加
    i18n: {
      scrollable: "スクロールできますのだ", //表示されるテキストを変更
    },
  });
};
