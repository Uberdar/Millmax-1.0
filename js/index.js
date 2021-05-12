var a = document.getElementById("js_burger");
var s = document.getElementById("js_menu-slide");

var burgerBtn = document.getElementById("js_burger");
burgerBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  magicHappens();
});
function magicHappens() {
  a.classList.toggle("js_burger_rotation");
  s.classList.toggle("slide");
}

document.addEventListener("click", function (e) {
  a.classList.remove("js_burger_rotation");
  s.classList.remove("slide");
});

$(document).ready(function () {
  $(".slider_block").slick({
    slidesToShow: 4,
    arrows: false,
    prevArrow: "<button class='prev'></button>",
    nextArrow: "<button class='next'></button>",
    dots: false,
    dotsClass: "custom-dots",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: true,
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          autoplay: false,
          autoplaySpeed: 2000,
        },
      },
    ],
  });
});
