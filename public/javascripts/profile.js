const conn_sub = document.getElementById('connexion_page_send');
if (conn_sub) {
    conn_sub.addEventListener("submit", async function(event) {
        event.preventDefault();

        const email = document.getElementById('email_signin').value;
        const mot_de_passe = document.getElementById('password_signin').value;

        if (email != "" && mot_de_passe != "") {
            const response = await fetch("/api/utilisateurs/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, mot_de_passe})
            });

            const data = await response.json();
            const message_error = document.getElementById('message_error');
            if (data.success) {
                message_error.innerText = data.message;
                message_error.style.color = "green";
                window.location.href = "/users/mon-profile/flash";
            } else {
                message_error.innerText = data.message;
                message_error.style.color = "red";
            }
        } else {
            // alert('Tous les champs sont réquis');
            let err_msg = "Tous les champs sont réquis";
            const message_error = document.getElementById('message_error');
            if (message_error) {
                message_error.innerText = err_msg;
            }else {
                alert('Message error not found');
            } 
        }
    });
}
const inscri_sub = document.getElementById('inscription_page_submit');
if (inscri_sub) {
    document.getElementById('inscription_page_submit').addEventListener('submit', async function(event) {
        event.preventDefault();
        console.log('Sign up send data')
        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const email = document.getElementById('email_signup').value;
        const phone = document.getElementById('phone').value;
        const default_mot_de_passe =  document.getElementById('password').value;
        const message_error_in = document.getElementById('message_error_in');


        if (nom != "" && prenom != ""  && email != "" && phone != "" && default_mot_de_passe != "") {
            console.log('Block check', email);
            const response = await fetch("/api/utilisateurs/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nom, prenom, email , phone, default_mot_de_passe})
            });
        
            const data = await response.json();
            
            if (data.success) {
                message_error_in.innerText = data.message;
                message_error_in.style.color = "green";
                window.location.href = '/users/mon-profile/flash';
            } else {
                message_error_in.innerText = data.message;
                message_error_in.style.color = "red";
            }
        } else {
            alert('Tous les champs sont réquis');
            let err_msg = "Tous les champs sont réquis";
            const message_error = document.getElementById('message_error');
            if (message_error) {
                message_error_in.innerText = err_msg;
                message_error_in.style.color = "red";

            }else {
                alert('Une erreur s\'est produite');
            } 
        }
    });
}

// Ajouter un champs
const form_add_field = document.getElementById('form_add_field');
if(form_add_field) {
    form_add_field.addEventListener('submit', async function(event) {
        event.preventDefault();
        console.log('Add field');
        // alert('Field submit');

        const nom = document.getElementById('nom').value;
        const surface = document.getElementById('surface').value;
        const type_culture = document.getElementById('type_culture').value;
        const etat = document.getElementById('etat').value;
        const longitude = document.getElementById('longitude').value;
        const latitude = document.getElementById('latitude').value;
        const message_error = document.getElementById('message_error');

        if (nom != "" && surface != "" && type_culture != "" && etat != "") {
            console.log(`Nom: ${nom}, Surface : ${surface}, etat : ${etat}`);
            const response = await fetch("/api/champs/nouveau-champ", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nom, surface, type_culture, etat, longitude, latitude })
            })

            const data = await response.json();
            if(data.success) {
                message_error.innerText = data.message;
                message_error.style.color = "green";
            } else {
                message_error.innerText = data.message;
                message_error.style.color = "red";
            }
        } else {
            const err_l = "Tous les champs sont réquis !!! ";
            message_error.innerText = err_l;
            message_error.style.color = "red";
            alert('Erreur : ', err_l);
        }
    });
}
//Ajouter un produit au stock
const form_add_products = document.getElementById('form_add_products');
if(form_add_products) {
    form_add_products.addEventListener('submit', async (event) => {
        event.preventDefault();
        const produit = document.getElementById('nom_produit').value;
        const type_produit = document.getElementById('type_produit').value;
        const quantite = document.getElementById('quantite_produit').value;
        const unite = document.getElementById('unite_produit').value;
        const emplacement = document.getElementById('Emplacement_stock').value;
        const fournisseur = document.getElementById('fournisseur_produit').value;
        const message_show = document.getElementById('message_show');

        if (produit && produit != "" && type_produit && type_produit != "" && quantite && quantite != "" && unite && unite != "" && emplacement && emplacement != "" && fournisseur && fournisseur != "") {
            const response = await fetch("/user/mon-compte/ajouter-produit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ produit, type_produit, quantite, unite, emplacement, fournisseur })
            });
            
            const data = await response.json();

            if (data.success) {
                const action = "Entrée";
                const History = EntreeSortieHistory(produit,type_produit,quantite,unite,action);

                message_show.innerText = data.message;
                message_show.style.color = "green"
            } else {
                message_show.innerText = data.message;
                message_show.style.color = "red"
            }
        } else {
            message_show.innerText = "Tous les champs sont réquis !! ";
            message_show.style.color = "red";
        }

    })
}
//Sortir un produit du stock
const form_substrate_products = document.getElementById('form_substrate_products');
if (form_substrate_products) {
    form_substrate_products.addEventListener('submit', async (event) => {
        event.preventDefault();
        alert('Submitted');
        const id_stock = document.getElementById('id_substrate_product').value;
        const produit = document.getElementById('nom_produit_substrate').value;
        const type_produit = document.getElementById('type_produit_substrate').value;
        const quantite = document.getElementById('quantite_substrate').value;
        const quantite_initiale = document.getElementById('quantite_initiale').textContent;
        const unite = document.getElementById('quantite_unite_substrate').textContent;
        const emplacement = document.getElementById('Emplacement_substrate').value;
        const message_show = document.getElementById('message_show_substrate');

        if (id_stock != "" && produit != "" && type_produit != "" && quantite != "" && unite != "" && emplacement != "" && message_show) {
            console.log(`produit : ${produit}, type_produit : ${type_produit}, quantite : ${quantite}, unite : ${unite}, emplacement : ${emplacement}`);
            
            const response = await fetch("/user/mon-compte/modifier-produit", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id_stock, produit, quantite, emplacement })
            })
            const data = response.json();

            if(data.success) {
                message_show.innerText = "Opération réussie !";
                message_show.style.color = "green";

                const action = "Sortie";
                EntreeSortieHistory(produit,type_produit,quantite,unite,action);
            } else {
                message_show.innerText = data.message;
                message_show.style.color = "red";
            }

        } else {
            message_show.innerText = "Tous les champs sont réquis !! ";
            message_show.style.color = "red";
            console.log(`produit : ${produit}, type_produit : ${type_produit}, quantite : ${quantite}, unite : ${unite}, emplacement : ${emplacement}`);
        }
    })
}
// supprimer un produit
const delete_product_on_stock = document.querySelectorAll('.delete_product_on_stock');
if(delete_product_on_stock) {
    delete_product_on_stock.forEach(delete_product => {
        delete_product.addEventListener('click', async (event) => {
            event.preventDefault();
            if(confirm("Voulez-vous vraiment supprimer ce produit ? ")) {
                const id_stock  = document.getElementById('id_product_modify').textContent;
                console.log('ID STOCK : ', id_stock);
                const response = await fetch("/user/mon-compte/supprimer-produit", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id_stock })
                })
                const data = await response.json();
                if (data.success) {
                    alert('Produit supprimé avec succès')
                    window.location.reload();
                } else {
                    console.log('Erreur : ', data.message);
                    alert('Une erreur s\'est produite')
                }
            }
        })
    });
}
//modifier un produit 
const form_modify_products = document.getElementById('form_modify_products');
if(form_modify_products){
    form_modify_products.addEventListener('submit', async (event) => {
        event.preventDefault();
        alert('Modifier');

        const id_stock = document.getElementById('id_modify_product').value;
        const produit = document.getElementById('nom_produit_modify').value;
        const quantite = document.getElementById('quantite_produit_modify').value;
        const emplacement = document.getElementById('Emplacement_stock_modify').value;
        const message_show = document.getElementById('message_show'); 

        const response = await fetch("/user/mon-compte/modifier-produit", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id_stock, produit, quantite, emplacement })
        })

        const data = await response.json();

        if(data.success) {
            message_show.innerText = data.message;
            message_show.style.color = "green";
            window.location.reload();
        } else {
            message_show.innerText = data.message;
            message_show.style.color = "red"
        }
    });
}


// Historique Entrées et Sorties
async function EntreeSortieHistory(produit,type_produit,quantite,quantite_init,unite,action) {
    const quantite_total = quantite_init - quantite
    const response = await fetch("/api/mon-compte/historique/ajouter_action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ produit,type_produit,quantite,quantite_init,unite,action})
    });

    const data = response.json();
    if(data.success) {
        // alert('Ajouté à l`\'Historique');
        return 'Ajouté à l`\'Historique'
    } else {
        // alert('Erreur lors de \'ajout à l\'historique');
        return 'Erreur lors de \'ajout à l\'historique';
    }
}

async function signout() {
    const etat = "Se deconnecter";
    const response = await fetch("/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({etat})
    })

    const data = await response.json();

    if (data.success) {
        window.location.href = "/";
    } else {
        window.location.reload();
    }
}