// loader set animation
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content1 = document.getElementById('hero-header');
    const content2 = document.getElementById('modalsShow');
    const content3 = document.getElementById('main_su');

    loader.classList.add('opacity-0');


    setTimeout(() => {
        loader.classList.remove('flex');
        loader.classList.add('hidden');

        content1.classList.remove('opacity-0');
        content2.classList.remove('opacity-0');
        content3.classList.remove('opacity-0');
    })
});

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

        navbar.classList.remove('h-16');
        navbar.classList.remove('relative');
        navbar.classList.add('h-96');
        navbar.classList.add('md:h-96');
        navbar.classList.add('absolute');
        navbar.classList.add('top-0');

        nav_part2.classList.remove('hidden');
        nav_part2.classList.add('flex');
        nav_part3.classList.remove('hidden');
        nav_part3.classList.add('flex');


        console.log('Nav Show', option);
    } else {
        show.classList.remove('hidden');
        show.classList.add('flex');
        hiddenBox.classList.remove('flex');
        hiddenBox.classList.add('hidden');

        navbar.classList.remove('h-96');
        navbar.classList.remove('md:h-96');
        navbar.classList.remove('absolute');
        navbar.classList.remove('top-0');
        navbar.classList.add('h-16');
        navbar.classList.add('relative');

        nav_part2.classList.remove('flex');
        nav_part2.classList.add('hidden');
        nav_part3.classList.remove('flex');
        nav_part3.classList.add('hidden');

        console.log('Nav hidden', option);
    }
}

//sidebar find which button was clicked
const buttons = document.querySelectorAll(".aside_btn");
const largeur = window.innerWidth;
if (buttons) {
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Réinitialiser tous les boutons
            buttons.forEach(btn => {
                if (largeur < 1024) {

                } else {
                    btn.classList.remove("bg-blue-500", "text-white");
                    btn.classList.add("bg-white", "text-gray-700");
                }
            });
    
            // Activer le bouton cliqué
            this.classList.add("bg-blue-500", "text-white");
            this.classList.remove("bg-white", "text-gray-700");
        });
    })
} else {
    console.log('SideBar buttons not found');
}

function button_clicked(valeur) {
    // alert(`ID:  ${valeur}`);
    const container_aside = document.getElementById('container_aside');
    const dashboard = document.getElementById('dashboard');
    const field_management = document.getElementById('field_management');
    const stock = document.getElementById('stock');
    const delivery = document.getElementById('delivery');
    const settings = document.getElementById('settings');
    const signout = document.getElementById('signout');

    if (valeur === "dashboard" && dashboard && field_management && stock && delivery && settings && signout) {

    } else if (valeur === "field_management" && container_aside && dashboard && field_management && stock && delivery && settings && signout) {
        
    } else if (valeur === "stock" && container_aside && dashboard && field_management && stock && delivery && settings && signout) {
        
    } else if (valeur === "delivery" && container_aside && dashboard && field_management && stock && delivery && settings && signout) {
        
    } else if (valeur === "settings" && container_aside && dashboard && field_management && stock && delivery && settings && signout) {
        
    } else if (valeur === "signout" && container_aside && dashboard && field_management && stock && delivery && settings && signout) {
        
    }
}
// sign in & sign up pages set hidden or flex
function closeModalSign(valeur) {
    const signin = document.getElementById('signin');
    const signup = document.getElementById('signup');
    const parent = document.getElementById('modalsShow');
    const body = document.getElementsByName('body');

    if (valeur === 'signin' && signin && parent) {
        signin.classList.remove('flex');
        signin.classList.add('hidden');
        parent.classList.remove('flex');
        parent.classList.add('hidden');
        body.classList.remove = "fixed";
        body.style.top = "";

        console.log('Sign in found Close button');
    } else if (valeur === 'signup' && signup && parent) {
        signup.classList.remove('flex');
        signup.classList.add('hidden');
        parent.classList.remove('flex');
        parent.classList.add('hidden');

        console.log('Sign up found Close button');
    }  else {
        console.log('Valeurs d\'entrée incorrectes');
    }
}

function OpenModalSign(valeur) {
    const signin = document.getElementById('signin');
    const signup = document.getElementById('signup');
    const parent = document.getElementById('modalsShow');
    const body = document.getElementsByName('body');

    if (valeur === 'signin' && signin && signup && parent) {
        signup.classList.remove('flex');
        signup.classList.add('hidden');
        signin.classList.remove('hidden');
        signin.classList.add('flex');
        signin.classList.add("backdrop-blur-xl")
        parent.classList.remove('hidden');
        parent.classList.add('flex');
        body.classList.add = "fixed";
        body.style.top = `-${window.scrollY}px`;
        // parent.classList.add("backdrop-blur-md");

        console.log('Sign in found Open button');
    } else if (valeur === 'signup' && signup && signin && parent) {
        signin.classList.remove('flex');
        signin.classList.add('hidden');
        signup.classList.remove('hidden');
        signup.classList.add('flex');
        parent.classList.remove('hidden');
        parent.classList.add('flex');
        // parent.classList.add("backdrop-blur-md");


        console.log('Sign up found Open button');
    } else {
        console.log('Valeurs d\'entrée incorrectes');
    }
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
    }, 5000);
} else {
    console.log('flash_msg not found');
}
function closeFlash() {
    const flash_msg = document.getElementById('flash_msg')

    flash_msg.classList.remove('flex');
    flash_msg.classList.add('hidden');
    flash_msg.classList.remove('opacity-100');            
    flash_msg.classList.add('opacity-0');
}