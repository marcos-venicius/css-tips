window.onload = () => {
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  const allPTagsInsideView = [...document.querySelectorAll(".view > p")];

  for (const p of allPTagsInsideView) {
    const link = p.querySelector("a.goto");

    link.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.classList.remove("show");
      const href = link.getAttribute("href");

      if (!window.location.href.includes(href)) {
        setTimeout(() => {
          window.location.href = href;
        }, 20);
      }
    });
  }

  menu.addEventListener("click", () => {
    overlay.classList.toggle("show");
  });
};
