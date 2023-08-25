//MENUicon

let Menubtn =document.getElementById('Menubtn')

Menubtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bx-x')
});

/*=============typed=============*/

 const typed = new Typed('.typed-text', {
    strings: ['Web Developer!','Designers!', 'Freelancer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop:true
});


const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    centeredSlides: true,
    speed: 200,
    autoplay: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  // Full-Web-Page-Animation

  const sr = ScrollReveal ({
    distance: '45px',
    duration: 2900,
    reset: true
  })
  
  sr.reveal('.row-text',{delay:350, origin:'top'})
  sr.reveal('.about-section-text,.about-detels,.my-detels,.skills-title,.skill-option,.projects-title,.projects-box,.servics-text-title',{delay:300, origin:'bottom'})
  sr.reveal('.sub-box,.swiper-container,.testimonials-title,.contact-title,.contact-address,.contact-form',{delay:300, origin:'bottom'})
  