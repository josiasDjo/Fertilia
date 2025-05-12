async function getFields(sort = "all") {
    alert("function getFields")
    const response = await fetch("/api/champs/terrain/getAll", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    const data = await response.json()
    // console.log('Data : ', data.message)

    if(data.success) {
        // console.log('Data : ', data.message)
        console.log('Data : ')
    } else {
        console.log('Data error : ', data.message)

        // console.log('Erreur : ',data.message)
    }
}