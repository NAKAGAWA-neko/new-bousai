document.addEventListener("DOMContentLoaded", function () {
  // 全てのフレックスアイテムを取得し、JavaScript配列に変換
  let items = Array.from(document.querySelectorAll(".flex-item"));

  // 各アイテムにクリックイベントを追加
  items.forEach((item, index) => {
    item.addEventListener("click", function () {
      // 既に表示されているextra-contentがあれば非表示にする
      let existingExtraContent = document.querySelector(
        ".extra-content:not(.hidden)"
      );
      if (existingExtraContent) {
        if (existingExtraContent.id === "content-" + item.id) {
          // 同じアイテムをクリックした場合は閉じる
          existingExtraContent.classList.add("hidden");
          return;
        } else {
          existingExtraContent.classList.add("hidden");
        }
      }

      // クリックしたアイテムに対応するextra-contentを取得し表示する
      let extraContent = document.querySelector("#content-" + item.id);
      if (extraContent) {
        extraContent.classList.remove("hidden");

        // extra-contentを適切な位置に移動
        let nextRowFirstItem = items[(Math.floor(index / 3) + 1) * 3];
        if (nextRowFirstItem) {
          nextRowFirstItem.before(extraContent);
        } else {
          // 次の行がなければ、最後のアイテムの後に挿入
          items[items.length - 1].after(extraContent);
        }
      }
    });
  });

  // 閉じるボタンにイベントリスナーを追加
  let closeButtons = Array.from(document.querySelectorAll(".close-button"));
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // 閉じるボタンの親要素（extra-content）を非表示にする
      button.parentNode.classList.add("hidden");
    });
  });
});

// ts//
