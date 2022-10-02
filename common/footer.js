
var scrollToTopBtn = document.getElementById("topBtn02");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const img = document.querySelector('img')
img.ondragstart = () => {
  return false;
};
