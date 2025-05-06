async function getFields(sort = "all") {
    const response = await fetch("/api/champs/terrain/getAll", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    const data = await response.json()

    for(let i = 0; i < data.length; i++) {
        console.log(data[i])
    }
}