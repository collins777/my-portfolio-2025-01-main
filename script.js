const hamburger = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");
let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  if (menuOpen) {
    navLinks.classList.add("mobile");
  } else {
    navLinks.classList.remove("mobile");
  }
}

hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") toggleMenu();
});

// Optional: close menu when clicking a link (mobile only)
navLinks.addEventListener("click", (e) => {
  if (menuOpen && e.target.tagName === "A") {
    toggleMenu();
  }
});

// Optional: close menu on resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 700 && menuOpen) {
    menuOpen = false;
    navLinks.classList.remove("mobile");
  }
});
