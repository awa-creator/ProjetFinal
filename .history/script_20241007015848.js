
document.getElementById('submitBtn').addEventListener('click', function() {
    // Alerte simple
    alert("Nous vous remercions pour l'envoi de votre formulaire ! Nous reviendrons vers vous prochainement.");
});

function changeAllchoco() {
  // Array of IDs
  const ids = ["choco1", "choco2", "choco3", "choco4", "choco5", "choco6"];

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