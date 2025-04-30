
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
