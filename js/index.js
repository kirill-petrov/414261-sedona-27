const siteNav = document.querySelector(".site-nav");
const toggleMenu = document.querySelector(".site-nav__toggle-menu");

const showMenu = () => {
  siteNav.classList.remove("site-nav--closed");
  siteNav.classList.add("site-nav--opened");
};

const hideMenu = () => {
  siteNav.classList.remove("site-nav--opened");
  siteNav.classList.add("site-nav--closed");
};

toggleMenu.classList.remove("site-nav__toggle-menu--js-hide");

hideMenu();

toggleMenu.addEventListener("click", () => {
  if (siteNav.classList.contains("site-nav--closed")) {
    showMenu();
  } else {
    hideMenu();
  }
});
