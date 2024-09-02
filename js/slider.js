document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.superior-slider').forEach(function (slider) {
    const slideContainers = slider.querySelectorAll(".superior-slide-container");
    const totalImages = slideContainers.length;
    let currentIndex = 0;

    const superiorImageHolder = slider.querySelector(".superior-image-holder");
    const superiorImageCaption = slider.querySelector(".superior-image-caption");
    const nextButton = slider.querySelector(".superior-next");
    const prevButton = slider.querySelector(".superior-prev");

    let autoSlideInterval = null;

    function updateActiveImage(index) {
      const selectedSlide = slideContainers[index].querySelector(".superior-slide");
      superiorImageHolder.src = selectedSlide.src;

      const selectedCaptionElement = slideContainers[index].querySelector(".superior-slide-caption");
      if (superiorImageCaption && selectedCaptionElement) {
        superiorImageCaption.textContent = selectedCaptionElement.textContent;
      } else if (superiorImageCaption) {
        superiorImageCaption.textContent = '';
      }
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

    slideContainers.forEach((container, index) => {
      container.addEventListener("click", function () {
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
