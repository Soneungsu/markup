"use strict";

const navBtn = document.querySelector(".nav_btn");
const navMenu = document.querySelector(".nav_items");
let isMenu = false;
navBtn.addEventListener("click", (e) => {
  //   console.log("gg");
  e.preventDefault();
  isMenu = !isMenu;
  navMenu.style.display = isMenu ? "block" : "none";
});

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
