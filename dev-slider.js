const slides = document.querySelectorAll(".slide");
const slider = document.querySelectorAll(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const indicatorsContainer = document.querySelector(".dev-slider-container");

console.log(prevBtn);

let slideIndex = 0;

// slider control
const devSliderControl = {
  arrows: true,
  indicators: true,
  speed: 5000,
  prevArrows: "prev",
  nextArrows: "next",
};

showSlide(slideIndex);
console.log(slideIndex);

function showSlide(index) {
  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

function showSlide(index) {
  // Remove "active" class from all slides
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}
// next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

// slider speed
setInterval(nextSlide, devSliderControl.speed);

// document
//   .querySelector(".slider")
//   .insertBefore(indicatorParent, slider.nextSibling);

// =======================START CAROUSEL ARROWS CONDITION==============================
if (devSliderControl.arrows && devSliderControl.arrows) {
  // dev slider arrows parent create dynamic
  const devSliderArrowsParent = document.createElement("div");
  devSliderArrowsParent.classList.add("dev-slider-arrows-parent");
  indicatorsContainer.appendChild(devSliderArrowsParent);

  // Previous button
  const devSliderPrevArrowsCreate = document.createElement("button");
  devSliderPrevArrowsCreate.classList.add("dev-prev-btn");
  devSliderArrowsParent.appendChild(devSliderPrevArrowsCreate);

  // Next button
  const devSliderNextArrowsCreate = document.createElement("button");
  devSliderNextArrowsCreate.classList.add("dev-next-btn");
  devSliderArrowsParent.appendChild(devSliderNextArrowsCreate);

  // previous array set
  const devPrev = devSliderArrowsParent.childNodes[0];
  if (devSliderControl.arrows) {
    console.log(devSliderControl.prevArrows);
    devSliderControl.prevArrows
      ? (devPrev.innerHTML = devSliderControl.prevArrows)
      : (devPrev.innerHTML = "prev-array");
  }

  devPrev.addEventListener("click", () => {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
  });

  // next array set
  const devNext = devSliderArrowsParent.childNodes[1];
  if (devSliderControl.arrows) {
    console.log(devSliderControl.nextArrows);
    devSliderControl.nextArrows
      ? (devNext.innerHTML = devSliderControl.nextArrows)
      : (devNext.innerHTML = "next-array");
  }
  devNext.addEventListener("click", () => {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  });
}
// =======================END OF CAROUSEL ARROWS CONDITION==============================

// =======================START CAROUSEL INDICATORS CONDITION==============================
if (devSliderControl.indicators && devSliderControl.indicators) {
  // indicator parent create
  const indicatorParent = document.createElement("div");
  indicatorParent.classList.add("indicator-parent");
  indicatorsContainer.appendChild(indicatorParent);

  // indicator child create
  // for (let i = 0; i < slides.length; i++) {
  //   const indicator = document.createElement("li");
  //   indicator.classList.add("indicator");

  //   indicator.addEventListener("click", function (event) {
  //     // Change active slide
  //     console.log(event);
  //   });
  //   indicatorParent.appendChild(indicator);
  // }

  // -------------------------------------------------------
  if (devSliderControl.indicators) {
    indicatorParent.classList.add("indicator-block");
  } else {
    indicatorParent.classList.add("indicator-none");
  }

  const childNodes = indicatorParent.childNodes;

  // *************************************************************************
  // Create a dot for each slide
  slides.forEach((slide, index) => {
    const devIndicator = document.createElement("li");
    devIndicator.classList.add("dev-indicator");
    if (index === 0) {
      devIndicator.classList.add("active");
    }
    indicatorParent.appendChild(devIndicator);

    // Make the dot clickable
    devIndicator.addEventListener("click", () => {
      setActiveSlide(index);
    });
  });

  let activeSlideIndex = 0;

  function setActiveSlide(index) {
    // Update the active slide index
    activeSlideIndex = index;

    // Update the active dot
    const dots = document.querySelectorAll(".dev-indicator");
    dots.forEach((dot, dotIndex) => {
      if (dotIndex === activeSlideIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    // Update the slider
    updateSlider();
  }

  function updateSlider() {
    // Update the display of the slides to show the active slide
    const slides = document.querySelectorAll(".slides > *");
    slides.forEach((slide, index) => {
      if (index === activeSlideIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  // Automatic slideshow
  setInterval(() => {
    setActiveSlide((activeSlideIndex + 1) % slides.length);
  }, devSliderControl.speed);
  // *************************************************************************

  childNodes.forEach((node, index) => {
    node.addEventListener("click", () => {
      // if(index)
    });
  });
}

// =======================END OF CAROUSEL INDICATORS CONDITION==============================
