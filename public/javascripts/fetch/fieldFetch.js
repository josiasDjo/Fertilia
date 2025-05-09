async function getFields(sort = "all") {
    alert("function getFields")
    const response = await fetch("/api/champs/terrain/getAll", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    const data = await response.json()

    if(data.success) {
        for(let i = 0; i < data.length; i++) {
            console.log(data[i])
        }
    }
}