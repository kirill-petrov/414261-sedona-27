const siteNav = document.querySelector(".site-nav");
const toggleMenu = document.querySelector(".site-nav__toggle-menu");

siteNav.classList.remove("site-nav--no-js");

toggleMenu.addEventListener("click", () => {
  if (siteNav.classList.contains('site-nav--closed')) {
    siteNav.classList.remove('site-nav--closed');
    siteNav.classList.add('site-nav--opened');
  } else {
    siteNav.classList.add('site-nav--closed');
    siteNav.classList.remove('site-nav--opened');
  }
});
