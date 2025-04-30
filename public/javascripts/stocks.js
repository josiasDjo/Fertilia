
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