
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
            const field_show_detail = document.getElementById('details_field')

            field_management_cont.classList.remove('flex');
            field_management_cont.classList.add('hidden');
            stock_management.classList.remove('flex');
            stock_management.classList.add('hidden');
            field_show_detail.classList.remove('flex')
            field_show_detail.classList.add('hidden')

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
