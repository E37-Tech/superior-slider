document.addEventListener("DOMContentLoaded", function() {
  const wrapper = document.querySelector(".superior-wrapper-holder");
  const images = Array.from(wrapper.querySelectorAll(".superior-element-holder"));
  const prevButton = document.querySelector(".superior-prev-multiple");
  const nextButton = document.querySelector(".superior-next-multiple");

  function getTotalElements() {
    const sizeClass = Array.from(wrapper.classList).find(cls => cls.startsWith('superior-wrapper-size-'));
    if (sizeClass) {
      const sizeNumber = parseInt(sizeClass.replace('superior-wrapper-size-', ''), 10);
      return isNaN(sizeNumber) ? images.length : sizeNumber;
    }
    return images.length;
  }

  function applyStyling() {
    const totalElements = getTotalElements();

    if (totalElements <= 0 || images.length === 0) return;

    images.forEach(image => {
      image.classList.add("hidden");
      image.classList.remove("scale-125", "z-10");
    });

    const visibleImages = images.slice(0, totalElements);
    visibleImages.forEach(image => {
      image.classList.remove("hidden");
    });

    const middleIndex = Math.floor(visibleImages.length / 2);

    if (visibleImages[middleIndex]) {
      visibleImages[middleIndex].classList.add("scale-125", "z-10");
    }
  }

  function updateSlider(direction) {
    const totalElements = images.length;

    if (totalElements <= 0) return;

    const firstElement = images[0];
    const lastElement = images[totalElements - 1];

    if (direction === 'next') {
      wrapper.appendChild(firstElement);
    } else if (direction === 'prev') {
      wrapper.insertBefore(lastElement, images[0]);
    }

    images.splice(0, totalElements);
    images.push(...Array.from(wrapper.querySelectorAll(".superior-element-holder")));
    applyStyling();
  }

  applyStyling();
  window.addEventListener("resize", applyStyling);

  prevButton.addEventListener("click", function() {
    updateSlider('prev');
  });

  nextButton.addEventListener("click", function() {
    updateSlider('next');
  });
});
