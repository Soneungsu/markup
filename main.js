"use strict";

// nav버튼 클릭시 보여지고 가려지기
const navBtn = document.querySelector(".nav_btn");
const navMenu = document.querySelector(".nav_items");
const overLayout = document.querySelector(".overlayout");
let isMenu = true;
navBtn.addEventListener("click", (e) => {
  //   console.log("gg");
  e.preventDefault();
  isMenu = !isMenu;
  navMenu.style.display = isMenu ? "block" : "none";
  if (navMenu.style.display === "block") {
    overLayout.style.display = "block";
  }
});

//해당 탭 버튼 클릭시 active 추가,

document.addEventListener("click", () => {
  const tabs = document.querySelectorAll(".tab");
  const tabPanes = document.querySelectorAll(".section_pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      tabs.forEach((t) => t.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      tab.classList.add("active");
      const index = [...tabs].indexOf(tab);
      tabPanes[index].classList.add("active");
    });
  });
});
