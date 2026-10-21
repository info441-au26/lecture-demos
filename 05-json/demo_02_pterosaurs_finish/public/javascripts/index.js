




async function getPterosaurs(){
    // TODO: Don't take user input verbatim.
    let status = document.getElementById('status').value;
    let response = await fetch("api/getPterosaurs/" + status)
    try{
        let PterosaurJson = await response.json()

        let PterosaurHtml = PterosaurJson.map(onePterosaur => {
            return `
            <div>
            <p>${onePterosaur.Genus}</p>
            <img src="${onePterosaur.img}" />
            </div>
            `
        }).join("")
        document.getElementById('results').innerHTML = PterosaurHtml

    } catch(err){
    document.getElementById('results').innerHTML = `
        Status: ${response.status}: ${response.statusText} <br>
        Error: ${err}`
    }

}
