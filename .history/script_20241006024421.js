
document.getElementById('submitBtn').addEventListener('click', function() {
    // Alerte simple
    alert("Merci d'avoir soumis le formulaire!");

    
//Initialize Swiper//
const swiper = new Swiper('.slider_choco', {
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