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

// Navbar show & hidden
const showNav = document.getElementById('showNav')
if(showNav){
    showNav.addEventListener("click", function(){
        navbarSet('open');
    })
}
const hideNav = document.getElementById('hideNav')
if(hideNav) {
    hideNav.addEventListener("click", function(){
        navbarSet('close');
    })
}

function navbarSet(option) {
    let show = document.getElementById('showNav');
    let hiddenBox = document.getElementById('hideNav');
    let navbar = document.getElementById('navbar'); 
    let nav_part2 = document.getElementById('nav_part2')
    let nav_part3 = document.getElementById('nav_part3')

    if (option === 'open') {
        // alert('show nav')
        show.classList.remove('block');
        show.classList.add('hidden');
        hiddenBox.classList.remove('hidden');
        hiddenBox.classList.add('block');
        navbar.classList.remove("h-16", "relative");
        navbar.classList.add("h-96", "md:h-96", "absolute", "top-0", "inset-0");
        nav_part2.classList.remove('hidden');
        nav_part2.classList.add('flex');
        nav_part3.classList.remove('hidden');
        nav_part3.classList.add('flex');
        // console.log('Nav Show', option);
    } else {
        // alert('hide nav')
        show.classList.remove('hidden');
        show.classList.add('flex');
        hiddenBox.classList.remove('flex');
        hiddenBox.classList.add('hidden');
        navbar.classList.remove("h-96", "md:h-96", "absolute", "top-0");
        navbar.classList.add("h-16", "relative");
        nav_part2.classList.remove('flex');
        nav_part2.classList.add('hidden');
        nav_part3.classList.remove('flex');
        nav_part3.classList.add('hidden');
        // console.log('Nav hidden', option);
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
                    btn.classList.remove("bg-black", "text-white", "transform", "-translate-y-10", "absolute", "bottom-0");
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
                    field_management_cont.classList.remove('hidden');
                    field_management_cont.classList.add('flex');
                    break;
                case "stock":
                    stock_management.classList.remove('hidden');
                    stock_management.classList.add('flex');
                    break;
                case "delivery":
                    console.log(btn_id)
                    break;
                case "settings":
                    console.log(btn_id)
                    break;
                case "field_details_show":
                    alert('Field' + btn_id)
                    console.log(btn_id)
                default:
                    console.log('Aucun id de button trouvé');
                    break;
            }

            // Activer le bouton cliqué
            if (largeur < 1024) {
                const child_name = this.querySelector('#btn_label');

                this.classList.add("bg-black", "text-white", "rounded-tr-lg", "rounded-tl-lg", "transform", "-translate-y-3", "flex", "flex-col", "items-center", "justify-center");
                this.classList.remove("bg-white", "text-gray-700");
                if (child_name) {
                    // child_name.classList.remove('hidden');
                    // child_name.classList.add("flex", "text-white", "text-center");
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

// sign in & sign up pages set hidden or flex
const openSignin = document.querySelectorAll('.openSignin')
openSignin.forEach((btn) => {
    btn.addEventListener('click', function() {
        OpenModalSign('signin')
    })
})
const closeSignin = document.querySelectorAll('.closeSignin')
closeSignin.forEach((btn) => {
    btn.addEventListener('click', function() {
        closeModalSign('signin')
    })
})
const openSignup = document.querySelectorAll('.openSignup')
openSignup.forEach((btn) => {
    btn.addEventListener('click', function() {
        OpenModalSign('signup');
    })
})
const closeSignup = document.querySelectorAll('.closeSignup')
closeSignup.forEach((btn) => {
    btn.addEventListener('click', function() {
        closeModalSign('signup');
    })
})

function closeModalSign(valeur) {
    const signin = document.getElementById('signin');
    const signup = document.getElementById('signup');
    const parent = document.getElementById('modalsShow');

    if (valeur === 'signin' && signin && parent) {
        signin.classList.remove('flex');
        signin.classList.add('hidden');
        parent.classList.remove('flex');
        parent.classList.add('hidden');
    } else if (valeur === 'signup' && signup && parent) {
        signup.classList.remove('flex');
        signup.classList.add('hidden');
        parent.classList.remove('flex');
        parent.classList.add('hidden');
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
        signin.classList.add("backdrop-blur-xl","flex")
        parent.classList.remove('hidden');
        parent.classList.add('flex');
    } else if (valeur === 'signup' && signup && signin && parent) {
        signin.classList.remove('flex');
        signin.classList.add('hidden');
        signup.classList.remove('hidden');
        signup.classList.add('flex');
        parent.classList.remove('hidden');
        parent.classList.add('flex');
    } else {
        console.log('Valeurs d\'entrée incorrectes');
    }
}

// Afficher Ajouter un terrain comme modal
const show_adding_field_id = document.getElementById('show_adding_field')
if(show_adding_field_id) {
    show_adding_field_id.addEventListener('click', function() {
        show_adding_field('open')
    })
}
const hide_adding_field_id = document.getElementById('hide_adding_field')
if(hide_adding_field_id) {
    hide_adding_field_id.addEventListener('click', function() {
        show_adding_field('close')
    })
}
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
            const container = this.closest('.field_card')
            const child_name_detail = container.querySelector('#show_details_div')
            const allContainerDetails = document.querySelectorAll('.show_details_div')

            if (child_name_detail.classList.contains('flex')) {
                child_name_detail.classList.add('hidden');
                child_name_detail.classList.remove("flex");
            } else {
                allContainerDetails.forEach(all => {
                    all.classList.remove('flex')
                    all.classList.add('hidden')
                })
                child_name_detail.classList.remove('hidden');
                child_name_detail.classList.add("flex");
            }
        })
    })
} else {
    console.log('Button afficher les détails du terrain non trouvé');
}

// Afficher le détails d'un terrain dans une nouvelle interface
//sidebar find which button was clicked
const buttons_show_details_field = document.querySelectorAll(".field_details_show");
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

            // buttons.forEach(btn => {
            //     const child_name = this.querySelector('#btn_label');
            //     if (largeur < 1024) {
            //         btn.classList.remove("bg-black", "text-white", "transform", "-translate-y-10", "absolute", "bottom-0");
            //         btn.classList.add("bg-white", "text-black");
            //         if (child_name) {
            //             child_name.classList.remove("flex");
            //             child_name.classList.add('hidden');
            //         } else {
            //             alert("child_name not found")
            //         }
            //     } else {
            //         btn.classList.remove("blue_color_btn", "text-white");
            //         btn.classList.add("bg-white", "text-gray-700");
            //     }
            // });
            
            const btn_id = this.id;

            switch(btn_id) {
                case "field_details_show":
                    alert('Field' + btn_id)
                    console.log(btn_id)
                default:
                    console.log('Aucun id de button trouvé');
                    break;
            }

            // Activer le bouton cliqué
            // if (largeur < 1024) {
            //     const child_name = this.querySelector('#btn_label');

            //     this.classList.add("bg-black", "text-white", "rounded-tr-lg", "rounded-tl-lg", "transform", "-translate-y-3", "flex", "flex-col", "items-center", "justify-center");
            //     this.classList.remove("bg-white", "text-gray-700");
            //     if (child_name) {
            //         // child_name.classList.remove('hidden');
            //         // child_name.classList.add("flex", "text-white", "text-center");
            //     } else {
            //         alert("child_name not found")
            //     }
            // } else {
            //     this.classList.add("blue_color_btn", "text-white", "hover:text-black");
            //     this.classList.remove("bg-white", "text-gray-700");
            // }
        });
    })
} else {
    console.log('SideBar buttons not found');
}


const btnEtatFields = document.querySelectorAll('.btnEtatFields')
if(btnEtatFields) {
    btnEtatFields.forEach(btn => {
        const etatChamps = btn.querySelector('#etatchamps').textContent
        console.log('Text : ', etatChamps)
        if(etatChamps === "BON") {
            btn.classList.add('green_color_bg')
        } else if (etatChamps.textContent === "ATTENTION") {
            btn.classList.add('backgroud_btn_h')
        } else if (etatChamps.textContent === "CRITIQUE") {
            btn.classList.add('bg-red-500')
        }
    })
}
const lastUpdateDate = document.querySelectorAll('.lastUpdateDate')
if(lastUpdateDate){
    const dateNow = new Date()
    const timeNow = dateNow.toLocaleString()
    console.log('Date : ', timeNow)
    lastUpdateDate.forEach(upd => {
        upd.textContent = timeNow
    })
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
const close_add_product_id = document.getElementById('close_add_product');
if(close_add_product_id) {
    close_add_product_id.addEventListener('click', close_add_product);
}
function close_add_product() {
    const add_product = document.getElementById('add_produt');
    const modals_addProduct = document.getElementById('modals_addProduct');

    if (modals_addProduct && add_product && add_product.classList.contains('flex') && modals_addProduct.classList.contains('flex')) {
        add_product.classList.remove('flex');
        add_product.classList.add('hidden');
        modals_addProduct.classList.remove('flex');
        modals_addProduct.classList.add('hidden');
    } else {
        add_product.classList.add('flex');
        add_product.classList.remove('hidden');
        modals_addProduct.classList.add('flex');
        modals_addProduct.classList.remove('hidden');
    }
}
// Show container show substrate container
const sortir_produit_on_stock = document.querySelectorAll('.sortir_produit');
if (sortir_produit_on_stock) {
    sortir_produit_on_stock.forEach(sortir_produit => {
        sortir_produit.addEventListener('click', async (event) => {
            event.preventDefault();
            
            let row = event.target.closest('tr');

            // Récupère les cellules de la ligne
            let cells = row.getElementsByTagName('td');

            // Assigne les valeurs aux champs du formulaire

            let quantite_NC = cells[4].textContent.trim();
            let quantite = quantite_NC.split("").filter(char => !isNaN(char) && char !== " ").join("");
            let quantite_unite = quantite_NC.split("").filter(char => /[a-zA-Z]/.test(char)).join("");


            document.getElementById('id_substrate_product').value = cells[0].textContent.trim();
            document.getElementById('nom_produit_substrate').value = cells[2].textContent.trim();
            document.getElementById('type_produit_substrate').value = cells[3].textContent.trim();
            document.getElementById('quantite_substrate').value = quantite;
            document.getElementById('quantite_initiale').textContent = quantite;
            document.getElementById('quantite_unite_substrate').textContent = quantite_unite;
            document.getElementById('Emplacement_substrate').value = cells[5].textContent.trim();

            const substrate_product = document.getElementById('substrate_product');
            const modals_addProduct = document.getElementById('modals_addProduct');

            substrate_product.classList.remove('hidden');
            substrate_product.classList.add('flex');
            modals_addProduct.classList.remove('hidden');
            modals_addProduct.classList.add('flex');
            // alert('Quitter');
        });
    });
}
function close_substrate_product() {
    const substrate_product = document.getElementById('substrate_product');
    const modals_addProduct = document.getElementById('modals_addProduct');

    if (substrate_product && modals_addProduct) {
        substrate_product.classList.remove('flex');
        substrate_product.classList.add('hidden');
        modals_addProduct.classList.remove('flex');
        modals_addProduct.classList.add('hidden');
    }
}
const modify_product_on_stock = document.querySelectorAll('.edit_product_on_stock');
if (modify_product_on_stock) {
    modify_product_on_stock.forEach(modify_product => {
        modify_product.addEventListener('click', (event) => {
            let row = event.target.closest('tr');

            // Récupère les cellules de la ligne
            let cells = row.getElementsByTagName('td');

            // Assigne les valeurs aux champs du formulaire

            let quantite_NC = cells[4].textContent.trim();
            let quantite = quantite_NC.split("").filter(char => !isNaN(char) && char !== " ").join("");

            document.getElementById('id_modify_product').value = cells[0].textContent.trim();
            document.getElementById('nom_produit_modify').value = cells[2].textContent.trim();
            document.getElementById('quantite_produit_modify').value = quantite;
            document.getElementById('quantite_init_modify').textContent = quantite;
            document.getElementById('Emplacement_stock_modify').value = cells[5].textContent.trim();
            
            close_modify_product();
        })
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
// Rechercher un terrain (Gestion des terrains interface)
const show_search_bar = document.getElementById('show_search_bar')
if(show_search_bar) {
    show_search_bar.addEventListener('click', function() {
        const search_bar_fields = document.getElementById('search_bar_fields')
        const label_add_field = document.getElementById('label_add_field')
        if(search_bar_fields){
            search_bar_fields.classList.remove('hidden')
            search_bar_fields.classList.add('flex')
            label_add_field.classList.remove('flex')
            label_add_field.classList.add('hidden')
            show_search_bar.classList.remove("w-14")
            show_search_bar.classList.add('w-auto')
            search_bar_fields.focus()
        }
    })
}
const searchContainer = document.getElementById('show_search_bar');
const searchInput = document.getElementById('search_bar_fields');
const container_fields_action = document.getElementById('container_fields_action')

searchContainer.addEventListener('click', (e) => {
    e.stopPropagation()
    searchInput.classList.remove('hidden')
    // container_fields_action.classList.add('')
    searchInput.focus()
});

// Quand on clique ailleurs dans le document
document.addEventListener('click', () => {
    search_bar_fields.classList.remove('flex')
    search_bar_fields.classList.add('hidden')
    label_add_field.classList.remove('hidden')
    label_add_field.classList.add('flex')
    searchInput.classList.add('hidden')
    searchInput.blur()
});

// Télécharger le fichier pdf des champs
const fileExports = document.getElementById('fileExports')
if(fileExports) {
    fileExports.addEventListener('click', function(){
        alert('Télécharger le fichier des champs')
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