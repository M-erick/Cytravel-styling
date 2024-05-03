const carousel = document.querySelector('.image-carousel');
const images = document.querySelectorAll('.image-carousel img');
const leftButton = document.querySelector('.chevron-left');
const rightButton = document.querySelector('.chevron-right');
const imageContainers = carousel.querySelectorAll('.image-with-text');

const menuButton = document.getElementById("menu-button");
const navbarLinksUrl = document.getElementById("mobile-navbar-links-url");
const planTripButton = document.getElementById("planTripbutton");
const siteIcons = document.getElementById("siteIcons");
const backdrop = document.querySelector(".backdrop");


//setting up the hamburger option
backdrop.addEventListener("click", function() {
  navbarLinksUrl.classList.remove("open");
  backdrop.classList.remove("open");
});
menuButton.addEventListener("click", function() {
  navbarLinksUrl.classList.add("open"); 
  backdrop.classList.add("open"); 
});


// data to carousel
const carouselData = [
  {
    id:1,
    image: "img/masaai2.png",
    title: "7 Days ",
    description: "Explore the vast plains of Africa.",
    price: "FROM $820",
    info:" (per person sharing)",
    stars: [true, true, true, true, true], 
  },
  {
    id:2,
    image: "img/masaai2.png", 
    title: "6 Days ",
    description: "Experience the thrill of safari journey.",
    price: "FROM $1200 ",
    info:" (per person sharing)",
    stars: [true, true, true, true, false],
  },
  {
    id:3,
    image: "img/masaai2.png", 
    title: "6 Days ",
    description: "Experience the thrill of safari journey.",
    price: "FROM $1240 ",
    info:" (per person sharing)",
    stars: [true, true, true, true, false],
  },
  {
    id:4,
    image: "img/masaai2.png", 
    title: "9 Days ",
    description: "Experience the thrill of safari journey.",
    price: "FROM $1540 ",
    info:" (per person sharing)",
    stars: [true, true, true, true, false],
  },
  
];
let displayedData = []; 



function updateCarousel(data) {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-with-text');

    imageContainer.innerHTML = `
    <img src="${data.image}" alt="Image" width="350"style="border-radius:5px;">
    <p class="text-top-right">${data.title}</p>
    <div class="text-bottom-left">
      <div style="padding-bottom:20px ;">
        <p>${data.description }  </p>
        <p style="margin-top:-18px; "> 
          <span style="font-weight:bold ;">${data.price}</span> <span style="font-size:small ;">${data.info}</span>
        </p>
        <div style="margin-top:-13px; display:flex; justify-content:left;gap:2px; ">
          ${data.stars.map(star=>star ? '<i class="fa-solid fa-star" style="font-size:8px;color: rgba(253,211,5,255);"></i>':'<i class="fa-solid fa-star" style="font-size:8px;"></i>').join('')}
        </div>
      </div>
      <p class="rotate-arrow">
      <i class="fa-solid fa-arrow-right" style="color: white"></i></p>
    </div>
  `;


  carousel.appendChild(imageContainer);
  carousel.insertBefore(imageContainer,carousel.firstChild);

  displayedData.push(data); 
}
leftButton.addEventListener('click', () => {
  if (displayedData.length > 1) {
    const dataIndexToRemove = displayedData.length - 1; 
    const leftData = carouselData[dataIndexToRemove - 1]; 

    carousel.lastChild.remove();

    displayedData.splice(dataIndexToRemove, 1); 
    const nextData = carouselData.find(item => !displayedData.some(displayedItem => displayedItem.id === item.id));
  if (nextData) {
    updateCarousel(leftData);
    displayedData.unshift(leftData); 
  }
  }
  leftButton.disabled = displayedData.length === carouselData.length;

  // Left button always clickable
});

rightButton.addEventListener('click', () => {
  if (displayedData.length < carouselData.length) {
    const dataIndex = carouselData.indexOf(displayedData[displayedData.length - 1]);
    const rightData = carouselData[dataIndex + 1];
    const nextData = carouselData.find(item => !displayedData.some(displayedItem => displayedItem.id === item.id));
  if (nextData) { 
    updateCarousel(rightData);
    displayedData.push(rightData); 
  }
  }
  rightButton.disabled = displayedData.length === carouselData.length;
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

      if (clickedIndex >= 0 && clickedIndex < imagePaths.length) {
        navbar.style.backgroundImage = `url(${imagePaths[clickedIndex]})`;

        for (const icon of toggleIcons.children) {
          icon.style.color = 'white';  
        }
  
        event.target.style.color = 'rgba(249,174,48,255)';
      } else {
        console.error("Invalid icon click index"); 
      }
    }
  });
  const imageCarousel = document.querySelector('.image-carousel2');
  const currentImageIndex2 = 0; // Keeps track of the currently displayed image
  
  const moveCarousel = (direction) => {
    const imageCount = imageCarousel.children.length;
    const imageWidth = imageCarousel.children[0].offsetWidth; 
  
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
  
  toggleMessageDetails .addEventListener('click', (event)=>{
    for (const icon of toggleMessageDetails.children) {
      icon.style.color = 'white';  
    }

    event.target.style.color = 'rgba(249,174,48,255)';
    toggleContent();

  }); 
  chevronLeft.addEventListener('click',toggleContent);
  chevronRight.addEventListener('click',toggleContent);  

  