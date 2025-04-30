
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
            const show_details = document.querySelectorAll('.btn_show_option');

            const field_management_cont = document.getElementById('field_management_cont');
            const stock_management = document.getElementById('stock_management');
            const field_show_detail = document.getElementById('details_field')
            const nameFieldDetails = document.getElementById('nameFieldDetails')
            const id_field_details = document.getElementById('id_field_details')

            const parent_field_card = this.closest('.field_card')
            const field_name = parent_field_card.querySelector('#field_name').textContent
            const id_fields_list = parent_field_card.querySelector('#id_fields_list').textContent
            nameFieldDetails.textContent = field_name
            id_field_details.textContent = id_fields_list
            console.log('Data : ', field_name)

            field_management_cont.classList.remove('flex');
            field_management_cont.classList.add('hidden');
            stock_management.classList.remove('flex');
            stock_management.classList.add('hidden');

            field_show_detail.classList.remove('hidden')
            field_show_detail.classList.add('flex')

            show_details.click
        })
    })
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
const showFormAddField = document.getElementById('showFormAddField')
if(showFormAddField) {
    showFormAddField.addEventListener('click', function(){
        alert('showFormAddField')
        const formAddField = document.getElementById('formAddField')

        if(formAddField && formAddField.contains('hidden')) {
            formAddField.classList.remove('hidden')
            formAddField.classList.add('flex')
        } else if(formAddField && formAddField.contains('flex')){
            formAddField.classList.remove('flex')
            formAddField.classList.add('hidden')
        } else {
            console.log('Valeur incorrect')
        }
    })
} else {
    console.log('Valeur incorrect')
}
