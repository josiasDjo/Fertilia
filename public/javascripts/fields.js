
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

// Afficher l'interface pour montrer le détails du terrain souhaiter
const field_details_show = document.querySelectorAll('.field_details_show')
if(field_details_show) {
    field_details_show.forEach(btn => {
        btn.addEventListener('click', function(){
            // alert('field_details_show')
            const parentBtn = this.closest('.field_card')
            const show_details = parentBtn.querySelector('.btn_show_option');

            const field_management_cont = document.getElementById('field_management_cont');
            const stock_management = document.getElementById('stock_management');
            const field_show_detail = document.getElementById('details_field')
            const nameFieldDetails = document.getElementById('nameFieldDetails')
            const id_field_details = document.getElementById('id_field_details')
            const responsableTerrainDetails = document.getElementById('responsableTerrainDetails')
            const typeCultureTerrainDetails = document.getElementById('typeCultureTerrainDetails')
            const superficieTerrainDetails = document.getElementById('superficieTerrainDetails')

            const parent_field_card = this.closest('.field_card')
            const field_name = parent_field_card.querySelector('#field_name').textContent
            const id_fields_list = parent_field_card.querySelector('#id_fields_list').textContent

            nameFieldDetails.textContent = field_name
            id_field_details.textContent = id_fields_list
            typeCultureTerrainDetails.textContent = parent_field_card.querySelector('#cultureType').textContent
            responsableTerrainDetails.textContent = parent_field_card.querySelector('#nomPrenomProprio').textContent
            superficieTerrainDetails.textContent = parent_field_card.querySelector('#superficieChamps').textContent
            // console.log(`Nom : ${NomProprio}`)

            field_management_cont.classList.remove('flex');
            field_management_cont.classList.add('hidden');
            stock_management.classList.remove('flex');
            stock_management.classList.add('hidden');

            field_show_detail.classList.remove('hidden')
            field_show_detail.classList.add('flex')

            show_details.click()
        })
    })
}
// Revenir à la page de champs avec les informations générales 
const gobackGeneralField = document.getElementById('gobackGeneralField')
if(gobackGeneralField) {
    gobackGeneralField.addEventListener('click', function(){
        // alert('Go Back')
        const field_management_cont = document.getElementById('field_management_cont');
        const field_show_detail = document.getElementById('details_field')

        field_show_detail.classList.remove('flex')
        field_show_detail.classList.add('hidden')
        field_management_cont.classList.remove('hidden');
        field_management_cont.classList.add('flex');
        // stock_management.classList.remove('flex');
        // stock_management.classList.add('hidden');
    })
}
const btnEtatFields = document.querySelectorAll('.btnEtatFields')
if(btnEtatFields) {
    btnEtatFields.forEach(btn => {
        const etatChamps = btn.querySelector('#etatchamps').textContent
        // console.log('Text : ', etatChamps)
        if(etatChamps === "BON") {
            btn.classList.add('green_color_bg')
        } else if (etatChamps.textContent === "ATTENTION") {
            btn.classList.add('backgroud_btn_h')
        } else if (etatChamps.textContent === "CRITIQUE") {
            btn.classList.add('bg-red-500')
        }
    })
}
const showFormAddField = document.getElementById('showFormAddField')
if(showFormAddField) {
    showFormAddField.addEventListener('click', function(){
        // alert('showFormAddField')
        const formAddField = document.getElementById('formAddField')

        if(formAddField && formAddField.classList.contains('hidden')) {
            formAddField.classList.remove('hidden')
            formAddField.classList.add('flex')
        } else if(formAddField && formAddField.classList.contains('flex')){
            formAddField.classList.remove('flex')
            formAddField.classList.add('hidden')
        } else {
            console.log('Valeur incorrect')
        }
    })
} else {
    console.log('Valeur incorrect')
}
//fermer l'interface d'ajout de capteur
const closeAddFieldSenor = document.getElementById('closeAddFieldSenor')
if(closeAddFieldSenor){
    closeAddFieldSenor.addEventListener('click', function(){
        CloseAddSensor()
    })
}
function CloseAddSensor(){
    const formAddField = document.getElementById('formAddField')

    if(formAddField && formAddField.classList.contains('flex')){
        formAddField.classList.remove('flex')
        formAddField.classList.add('hidden')
    } else {
        console.log('Valeur incorrect')
    }
}
// document.addEventListener('click', function() {
//     const formAddField = document.getElementById('formAddField')

//     if(formAddField && formAddField.classList.contains('flex')){
//         formAddField.classList.remove('flex')
//         formAddField.classList.add('hidden')
//     } else {
//         console.log('Valeur incorrect')
//     }
// });

// Rechercher un terrain (Gestion des terrains interface)
const show_search_bar = document.getElementById('show_search_bar')
const label_add_field = document.getElementById('label_add_field')
if(show_search_bar) {
    show_search_bar.addEventListener('click', function() {
        const search_bar_fields = document.getElementById('search_bar_fields')
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
    if(search_bar_fields && label_add_field && searchInput){
        search_bar_fields.classList.remove('flex')
        search_bar_fields.classList.add('hidden')
        label_add_field.classList.remove('hidden')
        label_add_field.classList.add('flex')
        searchInput.classList.add('hidden')
        searchInput.blur()
    }
});

// Télécharger le fichier pdf des champs
const fileExports = document.getElementById('fileExports')
if(fileExports) {
    fileExports.addEventListener('click', function(){
        alert('Télécharger le fichier des champs')
    })
}