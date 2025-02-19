// Navbar show & hidden

function navbarSet(option) {
    let show = document.getElementById('show');
    let hiddenBox = document.getElementById('hiddenBox');
    let navbar = document.getElementById('navbar'); 
    let nav_part2 = document.getElementById('nav_part2')
    let nav_part3 = document.getElementById('nav_part3')

    if (option === 'open') {
        show.classList.remove('block');
        show.classList.add('hidden');
        hiddenBox.classList.remove('hidden');
        hiddenBox.classList.add('block');

        navbar.classList.remove('h-24');
        navbar.classList.remove('relative');
        navbar.classList.add('h-96');
        navbar.classList.add('absolute');
        navbar.classList.add('top-0');

        nav_part2.classList.remove('hidden');
        nav_part2.classList.add('flex');
        nav_part3.classList.remove('hidden');
        nav_part3.classList.add('flex');

        console.log('Nav Show', option);
    } else {
        show.classList.remove('hidden');
        show.classList.add('block');
        hiddenBox.classList.remove('block');
        hiddenBox.classList.add('hidden');

        navbar.classList.remove('h-96');
        navbar.classList.remove('absolute');
        navbar.classList.remove('top-0');
        navbar.classList.add('h-24');
        navbar.classList.add('relative');

        nav_part2.classList.remove('flex');
        nav_part2.classList.add('hidden');
        nav_part3.classList.remove('flex');
        nav_part3.classList.add('hidden');

        console.log('Nav hidden', option);
    }
}
// système de notation

const stars = document.querySelectorAll('.stars');

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