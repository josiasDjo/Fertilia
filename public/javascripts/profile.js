document.getElementById('connexion_page_send').addEventListener("submit", async function(event) {
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
            try {
                // alert('G : ', data.message);
                message_error.innerText = data.message;
                message_error.style.color = "green";
                window.location.href = "/users/mon-profile/flash";
            } catch (err) {
                console.log('Une erreur est survenue, ', err);
            }
        } else {
            // alert('G : ', data.message);

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

document.getElementById('form_add_field').addEventListener('submit', async function(event) {
    event.defaultPrevented();
    alert('Field submit');
});
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