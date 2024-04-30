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

const toggleIcons = document.getElementById('toggle-icons');
  const navbar = document.getElementById('navbar');
  const imagePaths = [
   'img/malindi2.png',
   'img/display104.jpg',
   'img/display105.jpg' ,
   ' img/display102.jpg',
  ];



  toggleIcons.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-solid') || event.target.classList.contains('fa-regular')) {
      const clickedIndex = Array.from(toggleIcons.children).indexOf(event.target);

      // Check for valid index within imagePaths array
      if (clickedIndex >= 0 && clickedIndex < imagePaths.length) {
        navbar.style.backgroundImage = `url(${imagePaths[clickedIndex]})`;
      } else {
        console.error("Invalid icon click index"); // Optional: Handle unexpected clicks
      }
    }
  });

  