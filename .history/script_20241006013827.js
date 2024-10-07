
// Créer un bouton
const button = document.createElement('Submit');
button.innerText = 'Click Me!';
document.body.appendChild(button);

// Créer un élément de notification
const notification = document.createElement('div');
notification.innerText = 'This is a notification!';
notification.style.backgroundColor = '#4CAF50';
notification.style.color = 'white';
notification.style.padding = '15px';
notification.style.borderRadius = '5px';
notification.style.position = 'absolute';
notification.style.top = '20px';
notification.style.right = '20px';
notification.style.opacity = '0'; // Initialement caché
notification.style.transition = 'opacity 0.5s';
document.body.appendChild(notification);

// Ajouter un événement de clic au bouton
button.addEventListener('click', function() {
    // Afficher la notification
    notification.style.opacity = '1';

    // Masquer la notification après 3 secondes
    setTimeout(() => {
        notification.style.opacity = '0';
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