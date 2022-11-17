let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};

var swiper = new Swiper(".home-slider",{
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

  var swiper = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoinys:{
        "0":{
            slidesPerView:1,
            autoplay:{
                delay:700,
                disableOnInteraction:false,
            },
        },
        "768":{
            slidesPerView:2,

        },
        "1020":{
            slidesPerView:3,
        },
    },
   
  });