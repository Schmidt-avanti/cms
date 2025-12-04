// Landing Page JavaScript

// Video Player Script
document.addEventListener('DOMContentLoaded', function() {
  const playBtn = document.querySelector('.playBtn');
  const video = document.querySelector('.otherVideo');
  
  if (playBtn && video) {
    playBtn.addEventListener('click', function() {
      video.controls = true;
      video.play();
      playBtn.style.display = 'none';
    });
    
    video.addEventListener('ended', function() {
      playBtn.style.display = 'block';
      video.controls = false;
    });
  }
});

// Sticky Header Script
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }
});

// Smooth scroll for in-page anchors
(function(){
  var HEADER_OFFSET = 90;
  function scrollToId(id){
    var el = document.getElementById(id);
    if (!el) return;
    var y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  document.addEventListener('click', function(e){
    var link = e.target.closest && e.target.closest('a[href^="#"]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href || href === '#') return;
    var id = href.slice(1);
    if (!id) return;
    if (document.getElementById(id)) {
      e.preventDefault();
      scrollToId(id);
    }
  });
})();

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

// Observe all elements with animate class
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.animate');
  animateElements.forEach(el => observer.observe(el));
});

// Contact Form Handler (if using Supabase)
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Add your form submission logic here
      console.log('Form data:', data);
      
      // Show success message
      const resultDiv = document.getElementById('form-result');
      if (resultDiv) {
        resultDiv.innerHTML = '<div class="alert alert-success">Vielen Dank! Wir melden uns bald bei Ihnen.</div>';
        resultDiv.setAttribute('aria-hidden', 'false');
      }
      
      // Reset form
      contactForm.reset();
    });
  }
});

// Cookie Banner (simplified version)
document.addEventListener('DOMContentLoaded', function() {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptAllBtn = document.getElementById('accept-all-cookies');
  const essentialOnlyBtn = document.getElementById('essential-only-cookies');
  
  // Check if cookies have been accepted
  if (!localStorage.getItem('cookies-accepted')) {
    if (cookieBanner) {
      cookieBanner.style.display = 'block';
    }
  }
  
  if (acceptAllBtn) {
    acceptAllBtn.addEventListener('click', function() {
      localStorage.setItem('cookies-accepted', 'all');
      localStorage.setItem('analytics-cookies', 'true');
      if (cookieBanner) {
        cookieBanner.style.display = 'none';
      }
    });
  }
  
  if (essentialOnlyBtn) {
    essentialOnlyBtn.addEventListener('click', function() {
      localStorage.setItem('cookies-accepted', 'essential');
      localStorage.setItem('analytics-cookies', 'false');
      if (cookieBanner) {
        cookieBanner.style.display = 'none';
      }
    });
  }
});
