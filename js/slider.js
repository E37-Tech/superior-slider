document.addEventListener("DOMContentLoaded", function () {
  // superior-slider
  document.querySelectorAll('.superior-slider').forEach(function (slider) {
    const slideContainers = slider.querySelectorAll(".superior-slide-container");
    const totalImages = slideContainers.length;
    let currentIndex = 0;

    const superiorImageHolder = slider.querySelector(".superior-image-holder");
    const superiorImageCaption = slider.querySelector(".superior-image-caption");
    const nextButton = slider.querySelector(".superior-next");
    const prevButton = slider.querySelector(".superior-prev");

    let autoSlideInterval = null;

    function updateActiveImage(index, animate = true, slideDirection = 'down') {
      if (animate) {
        superiorImageHolder.classList.add(`slide-${slideDirection}`);

        if (superiorImageCaption) {
          superiorImageCaption.classList.add(`slide-${slideDirection}`);
        }

        setTimeout(() => {
          changeImage(index);

          superiorImageHolder.classList.remove(`slide-${slideDirection}`);
          superiorImageHolder.classList.add(`slide-${slideDirection}-in`);

          if (superiorImageCaption) {
            superiorImageCaption.classList.remove(`slide-${slideDirection}`);
            superiorImageCaption.classList.add(`slide-${slideDirection}-in`);
          }

          setTimeout(() => {
            superiorImageHolder.classList.remove(`slide-${slideDirection}-in`);

            if (superiorImageCaption) {
              superiorImageCaption.classList.remove(`slide-${slideDirection}-in`);
            }
          }, 1000);
        }, 1000);
      } else {
        changeImage(index);
      }
    }

    function changeImage(index) {
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
        updateActiveImage(currentIndex, true, 'down');
        startAutoSlide(getAutoSlideInterval());
      });
    });

    nextButton.addEventListener("click", function () {
      stopAutoSlide();
      currentIndex = (currentIndex + 1) % totalImages;
      updateActiveImage(currentIndex, true, 'down');
      startAutoSlide(getAutoSlideInterval());
    });

    prevButton.addEventListener("click", function () {
      stopAutoSlide();
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateActiveImage(currentIndex, true, 'up');
      startAutoSlide(getAutoSlideInterval());
    });

    updateActiveImage(currentIndex, false);

    const interval = getAutoSlideInterval();
    if (interval) {
      startAutoSlide(interval);
    }
  });

  // superior-multiple-slider
  const sliders = document.querySelectorAll(".superior-multiple-slider");

  sliders.forEach((slider) => {
    const wrapper = slider.querySelector(".superior-wrapper-holder");
    const images = Array.from(wrapper.querySelectorAll(".superior-element-holder"));
    const prevButton = slider.querySelector(".superior-prev-multiple");
    const nextButton = slider.querySelector(".superior-next-multiple");

    let autoSlideInterval = null;
    let slideIntervalDuration = getAutoSlideInterval(wrapper);

    function getTotalElements() {
      const sizeClass = Array.from(wrapper.classList).find(cls => cls.startsWith('superior-wrapper-size-'));
      if (sizeClass) {
        const sizeNumber = parseInt(sizeClass.replace('superior-wrapper-size-', ''), 10);
        return isNaN(sizeNumber) ? images.length : sizeNumber;
      }
      return images.length;
    }

    function showImages() {
      const totalElements = getTotalElements();

      if (totalElements <= 0 || images.length === 0) return;

      images.forEach(image => {
        image.classList.add("hidden");
      });

      const visibleImages = images.slice(0, totalElements);
      visibleImages.forEach(image => {
        image.classList.remove("hidden");
      });
    }

    function updateSlider(direction) {
      const totalElements = images.length;

      if (totalElements <= 0) return;

      images.forEach(image => {
        image.style.transition = "transform 1s ease-in-out";
        image.style.transform = direction === 'next' ? "translateX(-131%)" : "translateX(131%)";
      });

      setTimeout(() => {
        if (direction === 'next') {
          wrapper.appendChild(images[0]);
        } else if (direction === 'prev') {
          wrapper.insertBefore(images[totalElements - 1], images[0]);
        }

        images.splice(0, totalElements);
        images.push(...Array.from(wrapper.querySelectorAll(".superior-element-holder")));

        images.forEach(image => {
          image.style.transition = "none";
          image.style.transform = "translateX(0)";
        });

        showImages();
      }, 1000);
    }

    function getAutoSlideInterval(wrapper) {
      const autoSlideClass = Array.from(wrapper.classList).find(className => 
        className.startsWith("superior-multiple-slider-auto-")
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
          updateSlider('next');
        }, interval);
      }
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }

    prevButton.addEventListener("click", function() {
      stopAutoSlide();
      updateSlider('prev');
      slideIntervalDuration = getAutoSlideInterval(wrapper);
      startAutoSlide(slideIntervalDuration);
    });

    nextButton.addEventListener("click", function() {
      stopAutoSlide();
      updateSlider('next');
      slideIntervalDuration = getAutoSlideInterval(wrapper);
      startAutoSlide(slideIntervalDuration);
    });

    window.addEventListener("resize", showImages);

    showImages();
    slideIntervalDuration = getAutoSlideInterval(wrapper);
    if (slideIntervalDuration) {
      startAutoSlide(slideIntervalDuration);
    }
  });
});
