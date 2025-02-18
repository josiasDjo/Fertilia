// système de notation

const stars = document.querySelectorAll('.star');

    // Ajout des écouteurs d'événements sur chaque étoile
    stars.forEach(star => {
        star.addEventListener('click', setRating);
        star.addEventListener('mouseover', addHover);
        star.addEventListener('mouseout', removeHover);
    });

    let rating = 0; // Note actuelle

    // Fonction pour définir la note
    function setRating(e) {
        rating = parseInt(e.currentTarget.getAttribute('data-value'));
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            if (starValue <= rating) {
                star.classList.remove('text-gray-300');
                star.classList.add('text-yellow-500');
            } else {
                star.classList.remove('text-yellow-500');
                star.classList.add('text-gray-300');
            }
        });
        console.log("Note attribuée :", rating);
      // Envoyer la note vers votre serveur
    }

    // Fonction pour gérer le survol des étoiles
    function addHover(e) {
        const hoverValue = parseInt(e.currentTarget.getAttribute('data-value'));
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-value')) <= hoverValue) {
                star.classList.add('text-yellow-400');
            } else {
                star.classList.remove('text-yellow-400');
            }
        });
    }

    // Réinitialise le survol pour afficher la note actuelle
    function removeHover() {
        stars.forEach(star => {
            star.classList.remove('text-yellow-400');
        });
    }