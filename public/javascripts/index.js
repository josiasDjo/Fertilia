// loader set animation
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content1 = document.getElementById('hero-header');
    const content2 = document.getElementById('modalsShow');
    const content3 = document.getElementById('main_su');

    loader.classList.add('opacity-0');
    if (loader && content1 && content2 && content3) {
        setTimeout(() => {
            loader.classList.remove('flex');
            loader.classList.add('hidden');
    
            content1.classList.remove('opacity-0');
            content2.classList.remove('opacity-0');
            content3.classList.remove('opacity-0');
        })
    } else {
        setTimeout(() => {
            loader.classList.remove('flex');
            loader.classList.add('hidden');
        })
    }
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
//sidebar cliqued by default
document.addEventListener("DOMContentLoaded", function() {
    const firstButton = document.querySelector('.aside_btn');
    if (firstButton) {
        firstButton.click();
    } else {
        console.log('aside_btn not found');
    }
});
//sidebar find which button was clicked
const buttons = document.querySelectorAll(".aside_btn");
const largeur = window.innerWidth;
if (buttons) {
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Réinitialiser tous les boutons et les contenneur
            const field_management_cont = document.getElementById('field_management_cont');
            const stock_management = document.getElementById('stock_management');

            field_management_cont.classList.remove('flex');
            field_management_cont.classList.add('hidden');
            stock_management.classList.remove('flex');
            stock_management.classList.add('hidden');

            buttons.forEach(btn => {
                const child_name = this.querySelector('#btn_label');
                if (largeur < 1024) {
                    btn.classList.remove("bg-black", "text-white", "transform", "-translate-y-10", "absolute", "bottom-0","flex", "flex-col");
                    btn.classList.add("bg-white", "text-black");
                    if (child_name) {
                        child_name.classList.remove("flex");
                        child_name.classList.add('hidden');
                    } else {
                        alert("child_name not found")
                    }
                } else {
                    btn.classList.remove("blue_color_btn", "text-white");
                    btn.classList.add("bg-white", "text-gray-700");
                }
            });
            
            const btn_id = this.id;

            switch(btn_id) {
                case "dashboard":
                    console.log(btn_id)
                    break;
                case "field_management":
                    console.log(btn_id);
                    field_management_cont.classList.remove('hidden');
                    field_management_cont.classList.add('flex');
                    break;
                case "stock":
                    console.log(btn_id)
                    stock_management.classList.remove('hidden');
                    stock_management.classList.add('flex');
                    break;
                case "delivery":
                    console.log(btn_id)
                    break;
                case "settings":
                    console.log(btn_id)
                    break;
                default:
                    console.log('Aucun id de button trouvé');
                    break;
            }

            // Activer le bouton cliqué
            if (largeur < 1024) {
                const child_name = this.querySelector('#btn_label');

                this.classList.add("bg-black", "text-white", "rounded-tr-lg", "rounded-tl-lg", "transform", "-translate-y-3", "flex", "flex-col");
                this.classList.remove("bg-white", "text-gray-700");
                if (child_name) {
                    child_name.classList.remove('hidden');
                    child_name.classList.add("flex", "text-white", "text-center");
                } else {
                    alert("child_name not found")
                }
            } else {
                this.classList.add("blue_color_btn", "text-white", "hover:text-black");
                this.classList.remove("bg-white", "text-gray-700");
            }
        });
    })
} else {
    console.log('SideBar buttons not found');
}

function button_clicked(valeur) {
    // alert(`Width:  ${largeur}`);
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

    if (valeur === 'signin' && signin && signup && parent) {
        signup.classList.remove('flex');
        signup.classList.add('hidden');
        signin.classList.remove('hidden');
        signin.classList.add('flex');
        signin.classList.add("backdrop-blur-xl")
        parent.classList.remove('hidden');
        parent.classList.add('flex');

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

// Afficher Ajouter un terrain comme modal
function show_adding_field(param) {
    const parent = document.getElementById('modals_addFields');
    const adding_field = document.getElementById('show_addField');

    if (param === "open" && parent && adding_field) {
        parent.classList.remove('hidden');
        parent.classList.add('flex');
        adding_field.classList.add('flex');
        adding_field.classList.remove('hidden');

    } else {
        parent.classList.remove('flex');
        parent.classList.add('hidden');
        adding_field.classList.add('hidden');
        adding_field.classList.remove('flex');

    }
}

// afficher les détails du terrain selon le button cliqué
const show_details = document.querySelectorAll('.btn_show_option');
if (show_details) {
    show_details.forEach(details => {

        details.addEventListener('click', function() {
            const container = this.closest('.field_card');
            const child_name_detail = container.querySelector('#show_details_div');

            if (child_name_detail.classList.contains('flex')) {
                child_name_detail.classList.add('hidden');
                child_name_detail.classList.remove("flex");
            } else {
                child_name_detail.classList.remove('hidden');
                child_name_detail.classList.add("flex");
            }

        })
        console.log('show_details : ', details);
    })
} else {
    console.log('show_details : ', show_details);
}

// Stock config 

// afficher l'historique des entrées et sorties
const show_hidden_history_stock = document.getElementById('show_or_hidden_history_stock');
if (show_hidden_history_stock) {
    show_hidden_history_stock.addEventListener('click', () => {
        const history_container = document.getElementById('history_container');
        const show_history_stock = document.getElementById('show_history_stock');
        const hidden_history_stock = document.getElementById('hidden_history_stock');

        if (history_container && history_container.classList.contains('hidden')) {
            history_container.classList.remove('hidden');
            history_container.classList.add('flex');
            hidden_history_stock.classList.remove('hidden');
            hidden_history_stock.classList.add('flex');
            show_history_stock.classList.remove('flex');
            show_history_stock.classList.add('hidden')
        } else {
            history_container.classList.remove('flex');
            history_container.classList.add('hidden');
            show_history_stock.classList.remove('hidden');
            show_history_stock.classList.add('flex');
            hidden_history_stock.classList.remove('flex');
            hidden_history_stock.classList.add('hidden');
        }
    });
}

// Show container add Product
const addMore_Product = document.getElementById('addMore_Product');
if(addMore_Product) {
    addMore_Product.addEventListener('click', close_add_product);
}
function close_add_product() {
    const add_produt = document.getElementById('add_produt');
    const modals_addProduct = document.getElementById('modals_addProduct');

    if (modals_addProduct && add_produt && add_produt.classList.contains('flex') && modals_addProduct.classList.contains('flex')) {
        add_produt.classList.remove('flex');
        add_produt.classList.add('hidden');
        modals_addProduct.classList.remove('flex');
        modals_addProduct.classList.add('hidden');
    } else {
        add_produt.classList.add('flex');
        add_produt.classList.remove('hidden');
        modals_addProduct.classList.add('flex');
        modals_addProduct.classList.remove('hidden');
    }
}
const modify_product_on_stock = document.querySelectorAll('.edit_product_on_stock');
if (modify_product_on_stock) {
    modify_product_on_stock.forEach(modify_product => {
        modify_product.addEventListener('click', close_modify_product())
    })
}
function close_modify_product() {
    const modify_product = document.getElementById('modify_product');
    const modals_addProduct = document.getElementById('modals_addProduct');

    if (modals_addProduct && modify_product && modify_product.classList.contains('flex') && modals_addProduct.classList.contains('flex')) {
        modify_product.classList.remove('flex');
        modify_product.classList.add('hidden');
        modals_addProduct.classList.remove('flex');
        modals_addProduct.classList.add('hidden');
    } else {
        modify_product.classList.add('flex');
        modify_product.classList.remove('hidden');
        modals_addProduct.classList.add('flex');
        modals_addProduct.classList.remove('hidden');
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