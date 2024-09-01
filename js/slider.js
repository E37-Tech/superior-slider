document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.superior-slider').forEach(function (slider) {
    const slides = slider.querySelectorAll(".superior-slide-wrapper .superior-slide");
    const totalImages = slides.length;
    let currentIndex = 0;

    const superiorImageHolder = slider.querySelector(".superior-image-holder");
    const nextButton = slider.querySelector(".superior-next");
    const prevButton = slider.querySelector(".superior-prev");

    let autoSlideInterval = null;

    function updateActiveImage(index) {
      const selectedSlide = slides[index];
      superiorImageHolder.src = selectedSlide.src;
    }

    function getAutoSlideInterval() {
      const autoSlideClass = Array.from(superiorImageHolder.classList).find(className => 
        className.startsWith("superior-slide-auto-")
      );
      if (autoSlideClass) {
        const seconds = parseInt(autoSlideClass.split("-").pop());
        return seconds * 1000;
      }
      return null;
    }

    function startAutoSlide(interval) {
      if (interval) {
        autoSlideInterval = setInterval(() => {
          currentIndex = (currentIndex + 1) % totalImages;
          updateActiveImage(currentIndex);
        }, interval);
      }
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }

    slides.forEach((slide, index) => {
      slide.addEventListener("click", function () {
        stopAutoSlide();
        currentIndex = index;
        updateActiveImage(currentIndex);
        startAutoSlide(getAutoSlideInterval());
      });
    });

    nextButton.addEventListener("click", function () {
      stopAutoSlide();
      currentIndex = (currentIndex + 1) % totalImages;
      updateActiveImage(currentIndex);
      startAutoSlide(getAutoSlideInterval());
    });

    prevButton.addEventListener("click", function () {
      stopAutoSlide();
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateActiveImage(currentIndex);
      startAutoSlide(getAutoSlideInterval());
    });

    updateActiveImage(currentIndex);

    const interval = getAutoSlideInterval();
    if (interval) {
      startAutoSlide(interval);
    }
  });
});
