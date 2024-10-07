
document.getElementById('submitBtn').addEventListener('click', function() {
    // Alerte simple
    alert("Nous vous remercions pour l'envoi de votre formulaire ! Nous reviendrons vers vous prochainement.");
});

function changeAllordernow() {
  // Array of IDs
  const ids = ["order1", "order", "order3", "order4", "order5", "order6"];

  // Loop through the IDs and update the text
  ids.forEach(id => {
      document.getElementById(id).innerHTML = "New Message!";
  });
}
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