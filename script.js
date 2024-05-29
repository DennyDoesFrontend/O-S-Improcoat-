document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const links = document.querySelector("ul.links");

  menuToggle.addEventListener("click", function () {
    links.classList.toggle("active");
  });
});
