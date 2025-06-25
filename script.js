document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  function activateTab(tabId) {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add("active");
    document.getElementById(`tab-${tabId}`).classList.add("active");
    localStorage.setItem("activeTab", tabId);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");
      activateTab(tabId);
    });
  });

  // Activar la última pestaña usada o la primera
  const lastTab = localStorage.getItem("activeTab") || "1";
  activateTab(lastTab);
});
