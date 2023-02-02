"use strict";

const tabsTitlesServices = Array.from(
  document.querySelectorAll(".services-tabs-title")
);
const tabsContentListsServices = Array.from(
  document.querySelectorAll(".services-tabs-content-list")
);

tabsTitlesServices.forEach((el) => {
  el.addEventListener("click", () => {
    tabsTitlesServices.forEach((el) =>
      el.classList.remove("active-services-tab")
    );
    tabsContentListsServices.forEach((el) =>
      el.classList.remove("active-services-tab-content")
    );

    el.classList.add("active-services-tab");
    const content = document.querySelector("#" + el.dataset.tab);
    content.classList.add("active-services-tab-content");
  });
});

const tabsTitlesWork = Array.from(
  document.querySelectorAll(".work-tabs-title")
);
const tabsContentListsWork = Array.from(
  document.querySelectorAll(".work-tabs-content-list")
);

tabsTitlesWork.forEach((elem) => {
  elem.addEventListener("click", () => {
    tabsTitlesWork.forEach((el) => el.classList.remove("active-work-tab"));
    tabsContentListsWork.forEach((el) =>
      el.classList.remove("active-work-tab-content")
    );

    elem.classList.add("active-work-tab");

    tabsContentListsWork.forEach((el) => {
      if (el.dataset.tab === elem.dataset.tab) {
        el.classList.add("active-work-tab-content");
      }

      if (elem.dataset.tab === "workAll") {
        tabsContentListsWork.forEach((el) =>
          el.classList.add("active-work-tab-content")
        );
      }
    });
  });
});

const btnWork = document.querySelector(".work-btn");
const workList = document.querySelector(".work-tabs-content");
const workListItem = document.querySelector(".work-tabs-content-list");
const preloader = document.querySelector(".preloader");

btnWork.addEventListener("click", () => {
  preloader.classList.remove("preloader-hide");
  setTimeout(() => {
    for (let i = 1; i <= 12; i++) {
      const listItem = document.createElement("li");
      listItem.classList.add("work-tabs-content-list");
      listItem.classList.add("active-work-tab-content");
      listItem.innerHTML = workListItem.innerHTML;
      workList.append(listItem);

      tabsContentListsWork.push(listItem);

      const p = listItem.querySelector("p");
      const img = listItem.querySelector("img");

      if (i < 4) {
        listItem.dataset.tab = "workGraphicDesign";
        p.innerText = "Graphic Design";
      } else if (i >= 4 && i < 7) {
        listItem.dataset.tab = "workWebDesign";
        p.innerText = "Web Design";
      } else if (i >= 7 && i < 10) {
        listItem.dataset.tab = "workLandingPages";
        p.innerText = "Landing Pages";
      } else if (i > 10) {
        listItem.dataset.tab = "workWordpress";
        p.innerText = "Wordpress";
      }

      if (i === 1) {
        img.src = "./img/graphic_design/graphic-design5.jpg";
      }
      if (i === 2) {
        img.src = "./img/graphic_design/graphic-design6.jpg";
      }
      if (i === 3) {
        img.src = "./img/graphic_design/graphic-design7.jpg";
      }
      if (i === 4) {
        img.src = "./img/web_design/web-design2.jpg";
      }
      if (i === 5) {
        img.src = "./img/web_design/web-design3.jpg";
      }
      if (i === 6) {
        img.src = "./img/web_design/web-design4.jpg";
      }
      if (i === 7) {
        img.src = "./img/landing_page/landing-page5.jpg";
      }
      if (i === 8) {
        img.src = "./img/landing_page/landing-page6.jpg";
      }
      if (i === 9) {
        img.src = "./img/landing_page/landing-page7.jpg";
      }
      if (i === 10) {
        img.src = "./img/wordpress/wordpress4.jpg";
      }
      if (i === 11) {
        img.src = "./img/wordpress/wordpress5.jpg";
      }
      if (i === 12) {
        img.src = "./img/wordpress/wordpress6.jpg";
      }
    }

    tabsTitlesWork.forEach((elem) => {
      if (elem.classList.contains("active-work-tab")) elem.click();
    });

    btnWork.remove();

    preloader.classList.add("preloader-hide");
  }, 2000);
});

const titlesFeedback = document.querySelector(".feedback-tabs");
const contentListsFeedback = document.querySelector(".feedback-tabs-content");

const tabsTitlesFeedback = Array.from(
  document.querySelectorAll(".feedback-tabs-title")
);
const tabsContentListsFeedback = Array.from(
  document.querySelectorAll(".feedback-tabs-content-list")
);

tabsTitlesFeedback.forEach((el) => {
  el.addEventListener("click", () => {
    tabsTitlesFeedback.forEach((el) =>
      el.classList.remove("active-feedback-tab")
    );
    tabsContentListsFeedback.forEach((el) =>
      el.classList.remove("active-feedback-tab-content")
    );

    el.classList.add("active-feedback-tab");
    const content = document.querySelector("#" + el.dataset.tab);
    content.classList.add("active-feedback-tab-content");
  });
});

const rightBtnFeedback = document.querySelector(".carousel-btn-right");
const leftBtnFeedback = document.querySelector(".carousel-btn-left");

tabsTitlesFeedback.forEach((el, index) => {
  el.dataset.index = index;
});

tabsContentListsFeedback.forEach((el, index) => {
  el.dataset.index = index;
});

rightBtnFeedback.addEventListener("click", () => {
  showNextTab("right");
});

leftBtnFeedback.addEventListener("click", () => {
  showNextTab("left");
});

function showNextTab(btn) {
  const activeTab = document.querySelector(".active-feedback-tab");

  tabsTitlesFeedback.forEach((el) =>
    el.classList.remove("active-feedback-tab")
  );
  tabsContentListsFeedback.forEach((el) =>
    el.classList.remove("active-feedback-tab-content")
  );

  const activeTabIndex = +activeTab.dataset.index;
  let nextActiveTabIndex;

  if (btn === "right") {
    nextActiveTabIndex =
      activeTabIndex + 1 === tabsTitlesFeedback.length ? 0 : activeTabIndex + 1;
  } else if (btn === "left") {
    nextActiveTabIndex =
      activeTabIndex === 0 ? tabsTitlesFeedback.length - 1 : activeTabIndex - 1;
  }

  titlesFeedback
    .querySelector(`[data-index="${nextActiveTabIndex}"]`)
    .classList.add("active-feedback-tab");
  contentListsFeedback
    .querySelector(`[data-index="${nextActiveTabIndex}"]`)
    .classList.add("active-feedback-tab-content");
}

$(".grid").masonry({
  columnWidth: 373,
  gutter: 20.5,
  itemSelector: ".grid-item",
});

const $grid2 = $(".grid2").masonry({
  columnWidth: ".grid-sizer",
  gutter: 3,
  itemSelector: ".grid2-item",
  percentPosition: true,
});

$grid2.on("click", ".grid2-item", function () {
  $(".modal").removeClass("modal-hide");
  $(".modal-img").attr("src", `${$(this).attr("src")}`);
});

$(".modal").click(() => {
  $(".modal").addClass("modal-hide");
});
