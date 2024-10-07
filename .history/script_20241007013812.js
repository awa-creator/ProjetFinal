
document.getElementById('submitBtn').addEventListener('click', function() {
    // Alerte simple
    alert("Nous vous remercions pour l'envoi de votre formulaire ! Nous reviendrons vers vous prochainement.");
});

document.getElementById('1,2').addEventListener('click', function() {
  // Alerte simple
  alert("Nous vous remercions pour l'envoi de votre formulaire ! Nous reviendrons vers vous prochainement.");
});
//Initialize Swiper//
const swiper = new Swiper('.slider_categorie', {
    loop: true,
  
    // pagination //
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows//
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });