let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slideshow")[0];
    slideIndex++;
    if (slideIndex > slides.children.length - 1) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("slideshow")[0];
    if (slideIndex < 0) {
        slideIndex = slides.children.length - 1;
    } else if (slideIndex >= slides.children.length) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show'); /* Toggle the 'show' class */
}

  window.addEventListener('scroll', function() { /* this is for the navbar sticky and hide the contact links */
    const contactContainer = document.querySelector('.contact-container');
    if (window.scrollY > 0) {
      contactContainer.style.display = 'none';
    } else {
      contactContainer.style.display = 'flex';
    }
  });



  /* about section numbers*/
  document.addEventListener("DOMContentLoaded", function () {
    // Detect scroll event
    window.addEventListener('scroll', function () {
        // Get all counters
        let counters = document.querySelectorAll('.counter');

        counters.forEach(counter => {
            let target = +counter.getAttribute('data-target');
            let counterPosition = counter.getBoundingClientRect().top + window.scrollY;
            let screenPosition = window.scrollY + window.innerHeight;

            // When the user reaches the section and the counter is fully visible
            if (window.scrollY >= counterPosition - window.innerHeight && !counter.classList.contains('counted')) {
                counter.classList.add('counted');  // To ensure it only counts once

                let increment = target / 100;

                let updateCounter = function () {
                    let current = +counter.innerText;

                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment);
                        setTimeout(updateCounter, 50);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCounter();
            }
        });
    });
});



// Function to handle the scroll event
function revealOnScroll() {
    const cards = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        // Add 'show' class if the card is within the viewport
        if (cardTop < windowHeight - 100) {
            card.classList.add('show');
        }
    });
}

// Listen for the scroll event
window.addEventListener('scroll', revealOnScroll);






