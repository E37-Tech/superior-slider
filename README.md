# Superior Slider

![Superior Slider Banner](images/1.jpg)

**Superior Slider** is a smooth, infinitely looping carousel slider that creates the illusion of images moving endlessly in a circular container. It provides a seamless and dynamic experience, perfect for showcasing images or content without any interruptions.

## Requirements
- Tailwind CSS: [Install Tailwind](https://tailwindcss.com/docs/installation)

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

Experience **Superior Slider** in action: [Live Demo](https://superior-slider-demo.onrender.com)

## Installation

Choose one of the following methods to include Superior Slider in your project:

### Using npm

```bash
npm install superior-slider --save
```

## Import into your project(Rails etc):

```
import SuperiorSlider from 'superior-slider';
```

Or 

## Import to html file:
```
<script src="node_modules/superior-slider/dist/superior-slider.min.js"></script>
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
<div class="superior-slider w-full h-[20rem] md:h-[25rem] lg:h-[30rem] relative bg-gray-500 overflow-hidden">
  <img class="superior-image-holder size-full object-cover" src="https://raw.githubusercontent.com/E37-Tech/superior-slider/master/images/slider-images/1.jpg" alt="Selected Image"/>

  <div class="superior-slide-wrapper hidden">
    <div class="superior-slide-container">
      <img class="superior-slide" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/1.jpg"/>
    </div>
    <div class="superior-slide-container">
      <img class="superior-slide" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/2.jpg"/>
    </div>
    <div class="superior-slide-container">
      <img class="superior-slide" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/3.jpg"/>
    </div>
    <div class="superior-slide-container">
      <img class="superior-slide" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/4.jpg"/>
    </div>
    <div class="superior-slide-container">
      <img class="superior-slide" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/5.jpg"/>
    </div>
    <div class="superior-slide-container">
      <img class="superior-slide" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/6.jpg"/>
    </div>
    <div class="superior-slide-container">
      <img class="superior-slide" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/7.jpg"/>
    </div>
    <div class="superior-slide-container">
      <img class="superior-slide" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/8.jpg"/>
    </div>
  </div>
  <div class="flex lg:grid text-white text-xl absolute bottom-0 right-0 z-10">
    <button class="superior-prev group relative size-[3.3rem] bg-slate-800/80 hover:text-slate-800">
      <div class="absolute inset-0 bg-white/80 translate-x-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></div>
      <i class="fa-solid fa-angle-left group-hover:rotate-[90deg] transition-all duration-300 ease-in-out"></i>
    </button>
    <button class="superior-next group relative size-[3.3rem] bg-slate-800/80 hover:text-slate-800">
      <div class="absolute inset-0 bg-white/80 translate-x-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></div>
      <i class="fa-solid fa-angle-right group-hover:rotate-[90deg] transition-all duration-300 ease-in-out"></i>
    </button>
  </div>
</div>
```

```
<div class="superior-multiple-slider relative">
  <div class="superior-wrapper-holder superior-wrapper-size-5 superior-multiple-slider-auto-5 w-[180%] -ml-[40%] h-[10rem] md:h-[14rem] lg:h-[18rem] flex space-x-[5%]">
    <div class="superior-element-holder relative">
      <img class="size-full object-cover cursor-pointer rounded-lg border border-slate-300 bg-slate-500 shadow-md shadow-slate-900" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/1.jpg"/>
    </div>
    <div class="superior-element-holder relative">
      <img class="size-full object-cover cursor-pointer rounded-lg border border-slate-300 bg-slate-500 shadow-md shadow-slate-900" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/2.jpg"/>
    </div>
    <div class="superior-element-holder relative">
      <img class="size-full object-cover cursor-pointer rounded-lg border border-slate-300 bg-slate-500 shadow-md shadow-slate-900" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/3.jpg"/>
    </div>
    <div class="superior-element-holder relative">
      <img class="size-full object-cover cursor-pointer rounded-lg border border-slate-300 bg-slate-500 shadow-md shadow-slate-900" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/4.jpg"/>
    </div>
    <div class="superior-element-holder relative">
      <img class="size-full object-cover cursor-pointer rounded-lg border border-slate-300 bg-slate-500 shadow-md shadow-slate-900" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/5.jpg"/>
    </div>
    <div class="superior-element-holder relative">
      <img class="size-full object-cover cursor-pointer rounded-lg border border-slate-300 bg-slate-500 shadow-md shadow-slate-900" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/6.jpg"/>
    </div>
    <div class="superior-element-holder relative">
      <img class="size-full object-cover cursor-pointer rounded-lg border border-slate-300 bg-slate-500 shadow-md shadow-slate-900" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/7.jpg"/>
    </div>
    <div class="superior-element-holder relative">
      <img class="size-full object-cover cursor-pointer rounded-lg border border-slate-300 bg-slate-500 shadow-md shadow-slate-900" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/8.jpg"/>
    </div>
  </div>

  <button class="superior-prev-multiple group absolute z-20 left-1 md:left-3 top-1/2 transform translate-y-[-50%] text-teal-900 text-[2rem] size-[3.4rem] rounded-full border border-transparent hover:border-teal-800 transition-all duration-500 ease-in-out">
    <i class="fa-solid fa-angle-left group-hover:scale-[120%] transition-all duration-500 ease-in-out"></i>
  </button>
  <button class="superior-next-multiple group absolute z-20 right-1 md:right-3 top-1/2 transform translate-y-[-50%] text-teal-900 text-[2rem] size-[3.4rem] rounded-full border border-transparent hover:border-teal-800 transition-all duration-500 ease-in-out">
    <i class="fa-solid fa-angle-right group-hover:scale-[120%] transition-all duration-500 ease-in-out"></i>
  </button>

  <div class="absolute z-10 left-0 h-full w-[5rem] md:w-[7rem] lg:w-[9rem] top-0 bg-gradient-to-r from-gray-200 via-gray-200/50 to-transparent"></div>
  <div class="absolute z-10 right-0 h-full w-[5rem] md:w-[7rem] xl:w-[9rem] top-0 bg-gradient-to-r from-transparent via-gray-200/50 to-gray-200"></div>
</div>
```

## Configuration Options

* Autoslide: 

superior-slide-auto-7 (The number at the end represents the number of seconds for autoslide)
```
<img class="superior-image-holder superior-slide-auto-7 size-full object-cover" src="https://raw.githubusercontent.com/E37-Tech/superior-slider-demo/master/images/slider-images/1.jpg" alt="Selected Image"/>
```
superior-multiple-slider-auto-5 (5 represents the number of seconds for autoslide)

* Visible Images: superior-wrapper-size-5 (Five represents the number of images to load, but the first and the last are hidden by default so 3 will be shown)


## Styling
- Customize the appearance by overriding default CSS classes or adding your own styles:

```
.superior-image-holder {
  /* Your custom styles */
}

.slide-down {
  /* Your custom styles */
}

.slide-up {
  /* Your custom styles */
}

.slide-down-in {
  /* Your custom styles */
}

.slide-up-in {
  /* Your custom styles */
}

.superior-image-caption {
  /* Your custom styles */
}

.superior-image-caption.slide-up,
.superior-image-caption.slide-down {
  /* Your custom styles */
}

.superior-image-caption.slide-up-in,
.superior-image-caption.slide-down-in {
  /* Your custom styles */
}

.image-overlay {
  /* Your custom styles */
}

.superior-element-holder {
  /* Your custom styles */
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

#### If you find Superior Slider useful, please consider giving it a star ⭐
