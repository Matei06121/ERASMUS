const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const heroTitle = document.getElementById('hero-title');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const limit = 200; // cât de repede dispare
  const opacity = Math.max(0, 1 - scrollY / limit);
  const translateY = Math.min(scrollY / 3, 100); // mișcare ușoară în sus

  heroTitle.style.opacity = opacity;
  heroTitle.style.transform = `translateY(-${translateY}px)`;
});


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: { lat: 30, lng: 0 },
      mapTypeId: "satellite"
    });
  }
  

  let slideIndex = 1;
  let slideTimer;
  
  showSlides(slideIndex);
  startAutoSlide();
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
    resetAutoSlide();
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
    resetAutoSlide();
  }
  
  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
  
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
  
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].classList.add("active");
  }
  
  function startAutoSlide() {
    slideTimer = setInterval(() => {
      plusSlides(1);
    }, 3000); // schimbă poza la 3 secunde
  }
  
  function resetAutoSlide() {
    clearInterval(slideTimer);
    startAutoSlide();
  }
  

  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: { lat: 30, lng: 0 },
      mapTypeId: "satellite"
    });
  }
  
  // Poți adăuga dinamic zboruri în flight-data aici dacă vrei mai multă interactivitate
  