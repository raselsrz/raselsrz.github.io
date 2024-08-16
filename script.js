//MENUicon

let Menubtn =document.getElementById('Menubtn')

Menubtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bx-x')
});

/*=============typed=============*/

 const typed = new Typed('.typed-text', {
    strings: ['Web Developer !','Web Designer !', 'Freelancer !'],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
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
    reset: false
  })
  
  sr.reveal('.row-text',{delay:350, origin:'top'})
  sr.reveal('.about-section-text,.about-detels,.my-detels,.skills-title,.skill-option,.projects-title,.projects-box,.servics-text-title',{delay:300, origin:'bottom'})
  sr.reveal('.sub-box,.swiper-container,.testimonials-title,.contact-title,.contact-address,.contact-form',{delay:300,origin:'bottom'})
  


  document.addEventListener("DOMContentLoaded", function() {
    // Get all the menu links
    const menuLinks = document.querySelectorAll('nav ul li a');
    
    // Function to remove active class from all links
    function removeActiveClass() {
        menuLinks.forEach(link => {
            link.style.color = '';
        });
    }

    // Function to add active class to the current link
    function addActiveClass(link) {
        removeActiveClass();
        link.style.color = '#58D68D'; // Adjust the color as needed
    }

    // Set the active link based on scroll position
    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        menuLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = link;
            }
        });

        if (currentSection) {
            addActiveClass(currentSection);
        }
    });

    // Set the active link when clicking on the menu
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            addActiveClass(link);
        });
    });
});

    document.addEventListener('DOMContentLoaded', function() {
        const birthDate = new Date('2004-06-23'); // Use your birth date here
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        // Adjust age if the birth date has not occurred yet this year
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        document.getElementById('age').textContent = `${age} years`;
    });