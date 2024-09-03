document.addEventListener("DOMContentLoaded", function() {
  const wrapper = document.querySelector(".superior-wrapper-holder");
  const images = Array.from(wrapper.querySelectorAll(".superior-element-holder"));

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
    });

    const visibleImages = images.slice(0, totalElements);
    visibleImages.forEach(image => {
      image.classList.remove("hidden");
    });

    const middleIndex = Math.floor(visibleImages.length / 2);

    visibleImages.forEach((image, index) => {
      if (index === 0) {
        image.querySelector(".superior-image-overlay")?.classList.remove("hidden");
        image.querySelector(".superior-image-overlay")?.classList.add("bg-gradient-to-r", "from-black", "via-black/50", "to-transparent");
      } else if (index === middleIndex) {
        image.classList.add("scale-125", "z-10");
      } else if (index === visibleImages.length - 1) {
        image.querySelector(".superior-image-overlay")?.classList.remove("hidden");
        image.querySelector(".superior-image-overlay")?.classList.add("bg-gradient-to-r", "from-transparent", "via-black/50", "to-black");
      }
    });
  }

  applyStyling();
  window.addEventListener("resize", applyStyling);
});
