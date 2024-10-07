
document.getElementById('submitBtn').addEventListener('click', function() {
    // Alerte simple
    alert("Merci d'avoir soumis le formulaire!");

    // Créer et afficher la notification
    const notification = document.getElementById('notification');
    notification.style.display = 'block'; // Afficher la notification

    // Animer l'apparition de la notification
    setTimeout(() => {
        notification.style.opacity = '1'; // Rendre visible
    }, 100); // Délai léger pour voir l'effet

    // Masquer la notification après 3 secondes
    setTimeout(() => {
        notification.style.opacity = '0'; // Rendre invisible
        setTimeout(() => {
            notification.style.display = 'none'; // Cacher complètement
        }, 500); // Correspond au temps de transition
    }, 3000);
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