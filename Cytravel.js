const carousel = document.querySelector('.image-carousel');
const images = document.querySelectorAll('.image-carousel img');
const leftButton = document.querySelector('.chevron-left');
const rightButton = document.querySelector('.chevron-right');

let currentImageIndex = 0;

rightButton.addEventListener('click', () => {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  carousel.style.transform = `translateX(-${currentImageIndex * 100}%)`;
  leftButton.disabled = false;
  if (currentImageIndex === images.length - 1) {
    rightButton.disabled = true;
  }
});

leftButton.addEventListener('click', () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  carousel.style.transform = `translateX(-${currentImageIndex * 100}%)`;
  rightButton.disabled = false;
  if (currentImageIndex === 0) {
    leftButton.disabled = true;
  }
});