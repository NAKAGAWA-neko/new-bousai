import $ from "jquery";
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

// ハンバーガーメニュー

$(function () {
  $(".naviBtn").on("click", function (this: HTMLElement) {
    $(this).toggleClass("active");
    $(".naviSp").toggleClass("active");
  });
});

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
