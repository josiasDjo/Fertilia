let ready = false;
let loaded = false;

// Timer de 2 secondes
setTimeout(() => {
    ready = true;
    if (loaded) finishLoader();
}, 2000);

// Quand la page est chargée
window.addEventListener('load', () => {
    loaded = true;
    if (ready) finishLoader();
});

function finishLoader() {
    const loader = document.getElementById('loaderContainer');
    const content1 = document.getElementById('hero-header');
    const content2 = document.getElementById('modalsShow');
    const content3 = document.getElementById('main_su');

    if (loader) loader.classList.add('opacity-0');

    setTimeout(() => {
    if (loader) {
        loader.classList.remove('flex');
        loader.classList.add('hidden');
    }

    [content1, content2, content3].forEach(content => {
        if (content) content.classList.remove('opacity-0');
    });
  }, 500); // délai pour que l’animation de fade-out se termine
}


//Afficher paramètre et deconnexion
const showMoreOptionPofil = document.getElementById('showMoreOptionPofil')
const more = document.getElementById('moreoptionusers')
if(showMoreOptionPofil) {
    showMoreOptionPofil.addEventListener('click', function() {
        if(more) {
            if(more.classList.contains('hidden')) {
                more.classList.remove('hidden')
                more.classList.add('flex')
            } else if(more.classList.contains('flex')) {
                more.classList.remove('flex')
                more.classList.add('hidden')
            } else {
                console.log('Propriété non trouvé')
            }
        }
    })
}

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


// Message Flash config
const flash_msg = document.getElementById('flash_msg');

if (flash_msg) {
    console.log('flash_msg found');
    let opacity = 100;
    if(opacity > 0) {
        opacity -= 0.5;
        flash_msg.style.opacity = opacity;
    }
    setTimeout(() => {
        flash_msg.classList.remove('flex');
        flash_msg.classList.add('hidden');
        flash_msg.classList.remove('opacity-100');            
        flash_msg.classList.add('opacity-0');
    }, 2000);
} else {
    console.log('flash_msg not found');
}
const closeFlashId = document.querySelectorAll('.closeFlash');
closeFlashId.forEach((closeFlh) =>{
    closeFlh.addEventListener('click', function() {
        closeFlash()
    })
})
function closeFlash() {
    const flash_msg = document.getElementById('flash_msg')

    flash_msg.classList.remove('flex');
    flash_msg.classList.add('hidden');
    flash_msg.classList.remove('opacity-100');            
    flash_msg.classList.add('opacity-0');
}