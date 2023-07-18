import jQuery from "jquery";
const $ = jQuery;

// -----------------------------

// ページの全ての要素が読み込まれたら実行する
window.onload = function () {
  // デフォルトで表示する要素を指定
  // querySelectorでHTML内の.content-change-1を取得して、表示する
  let element = <HTMLElement>document.querySelector(".content-change-1");
  if (element) {
    element.style.display = "block";
  }

  // querySelectorでHTML内の.content-change-2を取得して、非表示にする
  element = <HTMLElement>document.querySelector(".content-change-2");
  if (element) {
    element.style.display = "none";
  }

  // buttonがクリックされたら処理を実行
  // querySelectorでHTML内の.changebtnを取得して、それぞれの要素に対して処理を行う
  let button = <HTMLButtonElement>document.querySelector(".changebtn");
  if (button) {
    // ここでbuttonがnullでないことを確認します
    button.addEventListener("click", function () {
      // クリックイベントを設定
      let contentChange1 = <HTMLElement>document.querySelector(".content-change-1");
      let contentChange2 = <HTMLElement>document.querySelector(".content-change-2");
      if (contentChange1 && contentChange2) {
        if (contentChange1.style.display === "block") {
          contentChange1.style.display = "none";
          contentChange2.style.display = "block";
          button.textContent = "年別"; // または button.innerText = "年別";
        } else {
          contentChange1.style.display = "block";
          contentChange2.style.display = "none";
          button.textContent = "月別"; // または button.innerText = "月別";
        }
      }
    });
  }
};

// --------------------------------------------

//アコーディオンをクリックした時の動作
$(".typhoon-item-title").on("click", function () {
  //タイトル要素をクリックしたら
  var findElm = $(this).next(".typhoon-item-box"); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass("close")) {
    //タイトル要素にクラス名closeがあれば
    $(this).removeClass("close"); //クラス名を除去し
  } else {
    //それ以外は
    $(this).addClass("close"); //クラス名closeを付与
  }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on("load", function () {
  // $(".typhoon-item").addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
  $(".open").each(function (_, element) {
    //openクラスを取得
    var Title = $(element).children(".typhoon-item-title"); //openクラスの子要素のtitleクラスを取得
    $(Title).addClass("close"); //タイトルにクラス名closeを付与し
    var Box = $(element).children(".typhoon-item-box"); //openクラスの子要素boxクラスを取得
    $(Box).slideDown(500); //アコーディオンを開く
  });
});
