const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });
  });
};

navSlide();

// carousel slider
$(".col-right").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
});

// pagination carousel
$(".featured-companies").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
});
