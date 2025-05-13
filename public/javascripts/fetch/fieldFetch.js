
async function getFields(sort = "all") {
    alert("function getFields")
    const token = localStorage.getItem('token')
    const response = await fetch("/api/champs/terrain/getAll", {
        method: "GET",
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' 
        },
    })
    const data = await response.json()

    if(data.success) {
        const container_fields = document.getElementById("container_fields")

        if(container_fields) {         
            data.message.forEach(champ => {
                fields_cards
                container_fields.innerHTML = ` 
                    <div class="field_card w-full h-auto md:w-64 lg:h-72 lg:w-72 mx-2 my-10 lg:m-3 bg-gray-200 shadow-lg rounded-lg flex flex-col relative">
                    <div class="backdrop-blur bg-white h-10 w-10 absolute top-2 right-2 z-30 rounded-lg py-2 text-center justify-center items-center flex">
                        <button type="button" id="show_details" class="btn_show_option h-full w-full text-xl text-center justify-center items-center flex"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                    </div>
                    <div id="show_details_div" class="show_details_div w-72 hidden flex-col items-start p-5 rounded-lg shadow-lg bg-gray-100 absolute top-16 right-2 z-30">
                        <button id="field_details_show" class="field_details_show flex flex-row text-lg my-2 mx-2">
                            <p><i class="fa-solid fa-arrow-up-right-from-square"></i></p>
                            <p class="px-3">Détails sur le terrain</p>
                        </button>
                        <button class="flex flex-row text-lg my-2 mx-2">
                            <p class="text-3xl"><i class='bx bx-edit-alt'></i></p>
                            <p class="px-3">Modifier le terrain</p>
                        </button>
                        <button class="flex flex-row text-lg my-2 mx-2 text-red-500">
                            <p class="text-3xl"><i class='bx bxs-trash'></i></p>
                            <p class="px-3">Supprimer le terrain</p>
                        </button>
                    </div>
                    <div class="bg-gray-200 w-full h-4/12 my-2 relative z-10">
                        <div class="w-full flex flex-row relative items-center justify-center">
                            <h2 id="field_name" class="font-bold text-xl">champ.nom</h2>
                            <span id="id_fields_list" class="hidden">champ.is_champs</span>
                            <span id="nomPrenomProprio" class="hidden">champ.nom_utilisateur champ.prenom</span>
                            <span id="EmailProprio" class="hidden">champ.email</span>
                            <span id="superficieChamps" class="hidden">champ.surface</span>
                            <p class="italic ml-3">Type : <span id="cultureType" class="font-medium not-italic"> champ.type_culture</span></p>
                        </div>
                        <div>
        
                        </div>
                        <p>Superficie : champ.surface hectare</p>
                    </div>
        
                    <div id="graphic" class="w-full h-7/12 relative justify-center items-center flex my-2">
                        <div class="w-16 items-center justify-center flex flex-col m-2">
                            <div class="h-14 w-14 rounded-full border-4 border-solid border-gray-800 text-center items-center justify-center flex"><p class="text-sm font-bold">champ.valeur</p></div>
                            <p class="font-medium text-black text-sm">Température</p>
                        </div>
                        <div class="w-16 items-center justify-center flex flex-col m-2">
                            <div class="h-14 w-14 rounded-full border-4 border-solid border-gray-800 text-center items-center justify-center flex"><p class="text-sm font-bold">champ.valeur</p></div>
                            <p class="font-medium text-black text-sm">Humidité</p>
                        </div>                        
                        <div class="w-16 items-center justify-center flex flex-col m-2">
                            <div class="h-14 w-14 rounded-full border-4 border-solid border-gray-800 text-center items-center justify-center flex"><p class="text-sm font-bold">champ.valeur</p></div>
                            <p class="font-medium text-black text-sm">pH du sol</p>
                        </div>
                    </div>
                    <div class="w-full items-center justify-center flex">
                        <ul class="flex flex-row"><p class="text-sm">Capteurs Connectés : <span class="green_color_text font-bold">10</span> / Hors ligne : <span class="font-bold text-red-500">2</span></p></ul>
                    </div>
                    <p class="text-xs italic text-left m-3">Dernière mise à jour : <span class="lastUpdateDate"> champ.max_date</span></p>
                    <div class="w-full px-3">
                        <button id="" class="btnEtatFields w-full text-white rounded-xl p-2 border-opacity-30">Statut global : <span id="etatchamps" class="font-medium">BON</span></button>
                    </div>
                </div>
            `   
            container_fields.appendChild()             
            });
        }
    } else {
        console.log('Data error : ', data.message)
    }
}