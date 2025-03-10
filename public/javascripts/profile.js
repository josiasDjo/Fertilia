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
async function field_mngt(event) {
    let fields_container = document.getElementById('container_fields');
    let not_element = document.getElementById('not_element');
    const response = await fetch("/api/champs/terrain/getAll", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    const fields = await response.json();

    if (fields.length > 0) {
        not_element.classList.remove('flex');
        not_element.classList.add('hidden');

        fields_container.innerHTML = "";
        console.log({fields});
        fields.forEach(element => {
            const articleHTML = `
                <div id="field" class="w-full h-64 lg:h-64 lg:w-64 mx-2 my-10 lg:m-3 bg-gray-200 shadow-lg rounded-lg overflow-hidden flex flex-col relative">
                    <div id="show_details" onclick="detail_me();" class="backdrop-blur bg-white h-10 w-10 absolute top-2 right-2 z-30 rounded-lg py-2 text-center justify-center items-center flex">
                        <button type="button" id="show_details" class="btn_show_option h-full w-full text-xl text-center justify-center items-center flex"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                    </div>    
                    <div class="bg-gray-200 w-full h-4/12 my-3 relative z-10">
                        <h2 class="font-bold text-xl">${element.nom} </h2>
                        <p>${element.surface} hectare</p>
                    </div>

                    <div id="graphic" class="w-full h-7/12 relative justify-center items-center flex my-3">
                        <div class="w-16 items-center justify-center flex flex-col m-2">
                            <div class="h-12 w-12 rounded-full border-4 border-solid border-yellow-500 text-center items-center justify-center flex">100</div>
                            <p class="font-medium text-black">Humidité</p>
                        </div>
                        <div class="w-16 items-center justify-center flex flex-col m-2">
                            <div class="h-12 w-12 rounded-full border-4 border-solid border-yellow-500 text-center items-center justify-center flex">100</div>
                            <p class="font-medium text-black">Humidité</p>
                        </div>                        
                        <div class="w-16 items-center justify-center flex flex-col m-2">
                            <div class="h-12 w-12 rounded-full border-4 border-solid border-yellow-500 text-center items-center justify-center flex">100</div>
                            <p class="font-medium text-black">Humidité</p>
                        </div>
                    </div>
                    <div class="w-full px-3">
                        <button class="w-full backgroud_btn_h text-white rounded-xl my-5 p-2 border-2 border-solid border-yellow-500 border-opacity-30">Irriger</button>
                    </div>
                </div>
            `;
            fields_container.innerHTML += articleHTML;
            console.log('Element', element.nom);
        });
    } else {
        not_element.classList.add('flex');
        not_element.classList.hidden('hidden');
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