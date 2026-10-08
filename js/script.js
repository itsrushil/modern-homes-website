const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#siteNav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
  menuButton.textContent = open ? "✕" : "☰";
});

document.querySelectorAll("#siteNav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
