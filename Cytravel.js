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
  

  const testimonials = [
    {
      image: "img/person105.jpeg",
      name: "Lynette",
      rating: [true, true, true, true, true], 
      message: "I had a wonderful experience booking my recent trip to Hawaii through your company. The process was smooth and efficient, and your customer service representatives were very helpful. The resort you recommended was perfect for our needs."
    },
    {
      image: "img/person106.jpeg",
      name: "Agnes",
      rating: [true, true, true, true, false], 
      message: "Booked a vacation through your company in Cyprus at the end of April. The hotel is decent, the quality of food is good, the area is large, so even the pool is there. Azure water and white velvet sand will not leave anyone indifferent."
    },
    {
      image: "img/person107.jpeg",
      name: "Mark",
      rating: [true, true, true, false, false], 
      message: "Booked a vacation through your company in Hawaii at the end of April. The hotel is decent, the quality of food is good, the area is large, so even the pool is there. Azure water and white velvet sand will not leave anyone indifferent."
    },
    {
      image: "img/person108.jpeg",
      name: "Taylor",
      rating: [true, true, true, false, false], 
      message: "Booked a vacation through your company in Cyprus at the end of April. The hotel is decent, the quality of food is good, the area is large, so even the pool is there. Azure water and white velvet sand will not leave anyone indifferent."
    },
  ];
  const toggleMessageDetails = document.querySelector('.toggleInfo');
  const testimonialInfo = document.getElementById('testimonial-info');
  const testimonialMessage = document.getElementById('testimonial-info-message');
  const chevronLeft = document.getElementById('chevronLeft');
  const chevronRight = document.getElementById('chevronRight');

  let currentContentIndex = 0;
  function updateContent() {
    const currentTestimonial = testimonials[currentContentIndex];
  
    // Update testimonial-info
    testimonialInfo.innerHTML = `
      <img src="${currentTestimonial.image}" width="40" height="50" alt="">
      <div>
        <h4>${currentTestimonial.name}</h4>
        <div id="testimonial-info-rating">
          ${currentTestimonial.rating.map(star => star ? '<i class="fa-solid fa-star" style="font-size:8px;color: rgba(249,174,48,255);"></i>' : '<i class="fa-solid fa-star" style="font-size:8px;"></i>').join('')}
        </div>
      </div>
    `;
  
    // Update testimonial-info-message
    testimonialMessage.textContent = currentTestimonial.message;
  }
  function toggleContent() {
    currentContentIndex = (currentContentIndex + 1) % testimonials.length;
    updateContent();
  }
  
  toggleMessageDetails .addEventListener('click', toggleContent); 
  chevronLeft.addEventListener('click',toggleContent);
  chevronRight.addEventListener('click',toggleContent);  

  