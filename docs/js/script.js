const anchorList = document.querySelectorAll('a[href^="#"]');
anchorList.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = anchor.getAttribute("href").substring(1);
        scrollToHash(targetId);
    });
});
const scrollToHash = (targetId) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement === null)
      return;
  const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
  window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
  });
};