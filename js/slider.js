document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll("#superior-slide-wraper .superior-slide");
  const totalImages = slides.length;
  let currentIndex = 0;

  const superiorImageHolder = document.getElementById("superior-image-holder");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  function updateActiveImage(index) {
    const selectedSlide = slides[index];
    superiorImageHolder.src = selectedSlide.src;
  }

  slides.forEach((slide, index) => {
    slide.addEventListener("click", function () {
      currentIndex = index;
      updateActiveImage(currentIndex);
    });
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalImages;
    updateActiveImage(currentIndex);
  });

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateActiveImage(currentIndex);
  });

  updateActiveImage(currentIndex);
});
