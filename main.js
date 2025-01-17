AOS.init({
  duration: 1000,
  once: true,
});

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-close");

function toggleMobileMenu(show) {
  mobileMenu.classList.toggle("active", show);
  document.body.style.overflow = show ? "hidden" : "";
}

menuBtn.addEventListener("click", () => toggleMobileMenu(true));
closeBtn.addEventListener("click", () => toggleMobileMenu(false));

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => toggleMobileMenu(false));
});
