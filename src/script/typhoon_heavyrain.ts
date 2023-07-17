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
