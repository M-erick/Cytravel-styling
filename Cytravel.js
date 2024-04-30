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
  const imageCarousel = document.querySelector('.image-carousel2');
  const currentImageIndex2 = 0; // Keeps track of the currently displayed image
  
  const moveCarousel = (direction) => {
    const imageCount = imageCarousel.children.length;
    const imageWidth = imageCarousel.children[0].offsetWidth; // Get width of first image
  
    const newIndex = (currentImageIndex2 + imageCount + direction) % imageCount;
  
    imageCarousel.style.transform = `translateX(-${newIndex * imageWidth}px)`;
    currentImageIndex2 = newIndex;
  };
  
  const leftButton2 = document.querySelector('.chevron-left2');
  leftButton2.addEventListener('click', () => moveCarousel(-1));
  
  const rightButton2 = document.querySelector('.chevron-right2');
  rightButton2.addEventListener('click', () => moveCarousel(1));
  



  