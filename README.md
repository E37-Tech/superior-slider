# Superior Slider

![Superior Slider Banner](images/1.jpg)

**Superior Slider** is a smooth, infinitely looping carousel slider that creates the illusion of images moving endlessly in a circular container. It provides a seamless and dynamic experience, perfect for showcasing images or content without any interruptions.

## Features

- **Infinite Looping:** Slides transition continuously, creating a flawless endless loop.
- **Smooth Transitions:** Fluid and visually appealing animations enhance user experience.
- **Responsive Design:** Adapts seamlessly to all screen sizes and devices.
- **Customization:** Easily configurable settings for slides, speed, effects, and more.
- **Accessibility:** Keyboard navigation and screen reader support ensure inclusivity.
- **Lightweight:** Minimal footprint for optimal performance and quick load times.
- **Easy Integration:** Simple setup with support for npm, CDN, or manual inclusion.
- **Open Source:** Free to use and modify under the MIT License.

## Demo

Experience **Superior Slider** in action: [Live Demo](https://e37tech.site/superior)

## Installation

Choose one of the following methods to include Superior Slider in your project:

### Using npm

```bash
npm install superior-slider --save
```

## Import into your project:

```
import SuperiorSlider from 'superior-slider';
import 'superior-slider/dist/superior-slider.css';
```

## Using CDN
- Include the following links in your HTML file:

```
<link rel="stylesheet" href="https://e37tech.site/superior-slider/superior-slider.min.css">
<script src="https://e37tech.site/superior-slider/superior-slider.min.js"></script>
```

## Manual Download
- Download the latest release from the GitHub Releases page.
- Include the CSS and JS files in your project:

```
<link rel="stylesheet" href="path/to/superior-slider.min.css">
<script src="path/to/superior-slider.min.js"></script>
```

## Usage
- Follow these steps to implement Superior Slider on your website:

## HTML Structure
- Add the following HTML structure where you want the slider to appear:

```
<div class="superior-slider">
  <div class="superior-slider__wrapper">
    <div class="superior-slider__slide">
      <!-- Slide 1 content -->
      <img src="image1.jpg" alt="Slide 1">
    </div>
    <div class="superior-slider__slide">
      <!-- Slide 2 content -->
      <img src="image2.jpg" alt="Slide 2">
    </div>
    <div class="superior-slider__slide">
      <!-- Slide 3 content -->
      <img src="image3.jpg" alt="Slide 3">
    </div>
    <!-- Add more slides as needed -->
  </div>
</div>
```

## Initialization
- Initialize the slider using JavaScript:

```
const slider = new SuperiorSlider('.superior-slider', {
  visibleSlides: 3,
  transitionSpeed: 500,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  navigation: true,
  pagination: true,
  pauseOnHover: true,
});
```

## Configuration Options

* Option  Type  Default Description
* visibleSlides Number  1 Number of slides visible at once.
* transitionSpeed Number  500 Duration of slide transition in milliseconds.
* infinite  Boolean true  Enables infinite looping of slides.
* autoplay  Boolean false Enables automatic sliding.
* autoplaySpeed Number  3000  Time interval between slides in autoplay mode (in milliseconds).
* navigation  Boolean true  Displays next and previous navigation arrows.
* pagination  Boolean true  Displays pagination dots.
* pauseOnHover  Boolean true  Pauses autoplay when hovering over the slider.

## Styling
- Customize the appearance by overriding default CSS classes or adding your own styles:

```
.superior-slider__slide {
  /* Your custom styles */
}

.superior-slider__navigation {
  /* Custom navigation styles */
}

.superior-slider__pagination {
  /* Custom pagination styles */
}
```

## Browser Support
- Superior Slider is compatible with all modern browsers:

* Chrome (latest two versions)
* Firefox (latest two versions)
* Safari (latest two versions)
* Edge (latest two versions)
* Opera (latest two versions)
* Internet Explorer 11 (with polyfills)

## Contributing
- Contributions are welcome! Follow these steps to contribute:

* Fork the repository.
* Create a new branch:

```
git checkout -b feature/your-feature-name

```

- Commit your changes:

```
git commit -m "Add your descriptive commit message"
```

- Push to your branch:
```
git push origin feature/your-feature-name
```

- Open a Pull Request detailing your changes and improvements.

## Development Setup
- Clone the repository:

```
git clone git@github.com:E37-Tech/superior-slider.git
```

## Install dependencies:
```
npm install
```

## Start the development server:
```
npm start
```

## Build for production:
```
npm run build
```

## License
- This project is licensed under the MIT License.

## Acknowledgements
- Inspired by various carousel sliders and built with a focus on simplicity and performance.
- Thanks to all contributors and the open-source community for their support.

## Contact
- For questions, suggestions, or support, please reach out:

- Email: e37tech@gmail.com
- GitHub: E37-Tech

#### If you find Superior Slider useful, please consider giving it a star on GitHub! ⭐
