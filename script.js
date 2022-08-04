const sliderImage = document.getElementById("slide-image");

const images = ["Slider", "Slider-1", "Slider-2", "Slider-3"];

let index = 0;

setInterval(() => {
  index++;
  if (index === 4) {
    index = 0;
  }
}, 2000);
