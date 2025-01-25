const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link"); // Select all navigation links
const hamburger = document.getElementById("hamburger"); // Select the hamburger icon's container

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
    // Toggle the menu visibility
    navMenu.classList.toggle("left-0");
    navMenu.classList.toggle("left-[-100%]");

    // Toggle the icon class (use only the child <i> element)
    const icon = hamburger.querySelector("i"); // Select the <i> inside the hamburger
    icon.classList.toggle("ri-close-line");
    icon.classList.toggle("ri-menu-4-line");
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Ensure the menu is hidden
        navMenu.classList.remove("left-0");
        navMenu.classList.add("left-[-100%]");

        // Reset the hamburger icon to its default state
        const icon = hamburger.querySelector("i"); // Select the <i> inside the hamburger
        icon.classList.remove("ri-close-line");
        icon.classList.add("ri-menu-4-line");
    });
});
//swiper 
const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination', // Ensure this matches the pagination element
      clickable: true,          // Allows clicking on pagination dots
    },
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  });
  
  
  
  
  // Show Scroll Up
  const scrollUp= () =>{
    const scrollUpBtn =document.getElementById("scroll-up")
    if(this.scrollY >=250)
    {
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    }
    else
    {    
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")

    }
  }
  window.addEventListener("scroll",scrollUp)

  // Change background header
  const scrollHeader = () =>{
    const header =document.getElementById("navbar")
    if(this.scrollY >=50)
    {
        header.classList.add("border-b","bordet-yellow-500")
    }
    else
    {    
        header.classList.remove("border-b","border-yellow-500")

    }
  }
  window.addEventListener("scroll",scrollHeader)

  //scroll section active link

  const activeLink = () =>
  {
    const sections= document.querySelectorAll("section")
    const navLinks=document.querySelectorAll(".nav-link")
   

    let current = "home"

   sections.forEach( section =>
   {
    const sectionTop =DeviceMotionEvent.offsetTop;
    if(this.scrollY >= sectionTop - 60) {
        current=section.getAttribute("id")
    }
   })
       navLinks.forEach(item =>{
         item.classList.remove("active")
            
         if(item.href.includes(current)){
            item.classList.add("active")
         }
       }

       )
}
window.addEventListener("scroll" , activeLink)

//scroll reveal animation

const sr=ScrollReveal({
    origin: "top",
    distance:"60px",
    duration: 2500,
    delay:300,
    reset:true
})
sr.reveal('.home__data, .about__top, .popular__top, .review__top ,.review__swiper, .footer__icon,.footer__content,.copy__right')
sr.reveal('.home__image', {delay:500, scale:0.5})
sr.reveal('.service__card, .popular__card' , {interval:100})
sr.reveal('.about__leaf', {delay:1000, origin:"right"})
sr.reveal('.about__item__1-content,.about__item__2.img', {origin:"right"})
sr.reveal('.about__item__2-content,.about__item__1.img', {origin:"left"})
sr.reveal('.review__leaf , .footer__floral', {delay:1000,origin:"left"})


