import jQuery from "jquery";
const $ = jQuery;

window.onload = function () {
  // --- 台風被害と進路図のコード ---
  let typhoonItems = document.querySelectorAll(".typhoon-item");

  for (let i = 0; i < typhoonItems.length; i++) {
    let typhoonButton = <HTMLButtonElement>typhoonItems[i].querySelector(".changebtn-ty");
    let table = <HTMLElement>typhoonItems[i].querySelector(".typhoon-change-1-1");
    let img = <HTMLElement>typhoonItems[i].querySelector(".typhoon-change-1-2");

    if (typhoonButton && table && img) {
      // button, table, imgが存在することを確認
      // console.log(typhoonButton);

      table.style.display = "block";
      img.style.display = "none";

      typhoonButton.addEventListener("click", function () {
        if (table.style.display === "block") {
          table.style.display = "none";
          img.style.display = "block";
          typhoonButton.textContent = "被害詳細";
        } else {
          table.style.display = "block";
          img.style.display = "none";
          typhoonButton.textContent = "進路図";
        }
        console.log("Button was clicked");
      });
    } else {
      console.error("Button, table or img not found");
    }
  }

  // --- 大雨特別警報の年別回数のコード ---
  let element = <HTMLElement>document.querySelector(".content-change-1");
  if (element) {
    element.style.display = "block";
  }

  element = <HTMLElement>document.querySelector(".content-change-2");
  if (element) {
    element.style.display = "none";
  }

  let changeButton = <HTMLButtonElement>document.querySelector(".changebtn");
  if (changeButton) {
    changeButton.addEventListener("click", function () {
      let contentChange1 = <HTMLElement>document.querySelector(".content-change-1");
      let contentChange2 = <HTMLElement>document.querySelector(".content-change-2");
      if (contentChange1 && contentChange2) {
        if (contentChange1.style.display === "block") {
          contentChange1.style.display = "none";
          contentChange2.style.display = "block";
          changeButton.textContent = "年別";
        } else {
          contentChange1.style.display = "block";
          contentChange2.style.display = "none";
          changeButton.textContent = "月別";
        }
      }
    });
  }

  // --- アコーディオンのコード ---
  $(".typhoon-item-title").on("click", function () {
    var findElm = $(this).next(".typhoon-item-box");
    $(findElm).slideToggle();

    if ($(this).hasClass("close")) {
      $(this).removeClass("close");
    } else {
      $(this).addClass("close");
    }
  });

  $(".open").each(function (_, element) {
    var Title = $(element).children(".typhoon-item-title");
    $(Title).addClass("close");
    var Box = $(element).children(".typhoon-item-box");
    $(Box).slideDown(500);
  });
};
