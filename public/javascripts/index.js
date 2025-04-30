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