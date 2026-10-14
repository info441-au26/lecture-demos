async function getPterosaurs(){
    try{
        let data = `${data}`;
        
        let response = await fetch(`api/pterosaurs?animal=cat&data=${data}`);
        let PterosaurJson = await response.json()

        let PterosaurHtml = PterosaurJson.map(onePterosaur => {
            if (onePterosaur.img === "") {
              // ...
            } 
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
