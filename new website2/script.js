// JavaScript for Carousel
document.addEventListener("DOMContentLoaded", function () {
  var carouselItems = document.querySelectorAll(".carousel-item");
  var carouselIndicators = document.querySelectorAll(".carousel-indicators li");

  function setActiveCarouselItem(index) {
    for (var i = 0; i < carouselItems.length; i++) {
      carouselItems[i].classList.remove("active");
      carouselIndicators[i].classList.remove("active");
    }

    carouselItems[index].classList.add("active");
    carouselIndicators[index].classList.add("active");
  }

  function handleCarouselIndicatorClick(event) {
    var targetIndex = parseInt(event.target.getAttribute("data-bs-slide-to"));
    setActiveCarouselItem(targetIndex);
  }

  carouselIndicators.forEach(function (indicator) {
    indicator.addEventListener("click", handleCarouselIndicatorClick);
  });
});
