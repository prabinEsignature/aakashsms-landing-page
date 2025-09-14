/* ####### FIXED NAVBAR EFFECT AFTER SCROLL ####### */
const navbar = document.querySelector(".asms-header");
const scrollThreshold = 20;

const handleScroll = () => {
  const isScrolled = window.scrollY > scrollThreshold;
  navbar.classList.toggle("asms-header-fixed", isScrolled);
  navbar.classList.toggle("shadow-default", isScrolled);
};

handleScroll();
window.addEventListener("scroll", handleScroll);
/* ####### EOF FIXED NAVBAR EFFECT AFTER SCROLL ####### */