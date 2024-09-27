"use strict";
document.addEventListener("DOMContentLoaded", () => {
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
