
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission normale du formulaire

  // Afficher la notification
  const notification = document.getElementById('notification');
  notification.classList.add('show');

  // Masquer la notification après 3 secondes
  setTimeout(() => {
      notification.classList.remove('show');
  }, 3000);

  // Tu peux également réinitialiser le formulaire ici si nécessaire
  // this.reset();
});

//Initialize Swiper//
const swiper = new Swiper('.slider_choco', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });