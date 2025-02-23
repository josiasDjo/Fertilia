document.getElementById('connexion_page_send').addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById('email_signin').value;
    const mot_de_passe = document.getElementById('password_signin').value;

    const response = await fetch("/api/utilisateurs/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mot_de_passe})
    });

    const data = await response.json();
    const message_error = document.getElementById('message_error');
    if (data.success) {
        window.location.href = '/users/mon-profile';
    } else {
        message_error.innerText = data.message;
    }
});

document.getElementById('signup').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const default_mot_de_passe =  document.getElementById('password').value;
});