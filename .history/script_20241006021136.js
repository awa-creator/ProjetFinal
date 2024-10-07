
document.querySelector('.submit_form form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission normale du formulaire

  // Récupérer les valeurs des champs
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const phone = this.querySelector('input[type="tel"]').value;
  const message = this.querySelector('#message').value;

  // Créer un nouvel élément de notification
  const notification = document.createElement('div');
  notification.innerText = `Merci ${name}! Votre message a été envoyé avec succès.`;
  notification.style.backgroundColor = '#4CAF50'; // Couleur de fond
  notification.style.color = 'white'; // Couleur du texte
  notification.style.padding = '15px'; // Espacement intérieur
  notification.style.borderRadius = '5px'; // Coins arrondis
  notification.style.position = 'absolute'; // Positionner en haut à droite
  notification.style.top = '20px'; // Distance du haut
  notification.style.right = '20px'; // Distance de la droite
  notification.style.opacity = '0'; // Initialement caché
  notification.style.transition = 'opacity 0.5s'; // Transition d'opacité
  document.body.appendChild(notification); // Ajouter la notification au DOM

  // Afficher la notification
  setTimeout(() => {
      notification.style.opacity = '1'; // Rendre visible
  }, 100); // Délai léger pour voir l'effet

  // Masquer la notification après 3 secondes
  setTimeout(() => {
      notification.style.opacity = '0'; // Rendre invisible
      setTimeout(() => {
          document.body.removeChild(notification); // Retirer l'élément du DOM
      }, 500); // Correspond au temps de transition
  }, 3000);

  // Réinitialiser le formulaire (facultatif)
  this.reset();
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