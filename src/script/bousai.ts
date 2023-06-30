import jQuery from "jquery";
const $ = jQuery;
import ScrollHint from "scroll-hint";

import "scroll-hint/css/scroll-hint.css";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox-plus-jquery.min.js";

// トップへ
const btn = document.getElementById("gototop-btn") as HTMLCanvasElement;
btn.addEventListener("click", () => {
  const duration = 250; // スクロールの時間（ミリ秒）
  const start = window.scrollY;
  const startTime = performance.now();

  const scroll = () => {
    const currentTime = performance.now();
    const time = Math.min(1, (currentTime - startTime) / duration);
    window.scroll(0, Math.ceil((1 - time) * start));
    if (time < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
});

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

// グループが出てくる

//scroll_effect
var scrollAnimationElm = document.querySelectorAll(
  ".upface_op_pc_none, .upface_op, .upface, .upface_left, .upface_right"
);
var scrollAnimationFunc = function () {
  for (let i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 150;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add("on");
    }
  }
};
window.addEventListener("load", scrollAnimationFunc);
window.addEventListener("scroll", scrollAnimationFunc);

// ハンバーガーメニュー

$(function () {
  $(".naviBtn").on("click", function (this: HTMLElement) {
    $(this).toggleClass("active");
    $(".naviSp").toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".naviSp").css("visibility", "visible");
    } else {
      $(".naviSp").css("visibility", "hidden");
    }
  });
});
