async function getFields(sort = "all") {
    alert("function getFields")
    const token = localStorage.getItem('token')
    console.log(`Le token = ${token}`)
    const response = await fetch("/api/champs/terrain/getAll", {
        method: "GET",
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' 
        },
    })
    const data = await response.json()
    // console.log('Data : ', data.message)

    if(data.success) {
        // console.log('Data : ', data.message)
        console.log('Data : ', data.message)
    } else {
        console.log('Data error : ', data.message)

        // console.log('Erreur : ',data.message)
    }
}