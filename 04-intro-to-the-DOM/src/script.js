

function getAllRows(){
    const rows = document.querySelectorAll('tr')
    rows.forEach(changeRow)
}

// function changeRow(row){
//     row.innerText = "HEY THIS WAS CHANGED"
//     row.className = "this is a new classname"
// }

// getAllRows()



function createNewRow(name, type, weight, pokemon){
    const newRow = document.createElement("tr")

    const tHead = document.createElement("th")
          tHead.innerText = name

    const pokeType = document.createElement('td')
          pokeType.innerText = type

    const pokeWeight = document.createElement('td')
          pokeWeight.innerText = weight

    //create new td element
    const imageTd = document.createElement('td')
    //create new image element
    const pokeImg = document.createElement('img')
    //update the image element with the link from the args
    pokeImg.src = pokemon
    //put the image element inside the td element
    imageTd.appendChild(pokeImg)
    //take the td element and put that inside the tr
    

    newRow.append(tHead, pokeType, pokeWeight, imageTd)
    

  document.querySelector("#table").appendChild(newRow)
}

createNewRow("newPoke", "fire", "100lbs", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png")
createNewRow("newPoke", "fire", "100lbs", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png")
createNewRow("newPoke", "fire", "100lbs", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png")
createNewRow("newPoke", "fire", "100lbs", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png")
createNewRow("newPoke", "fire", "100lbs", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png")
createNewRow("newPoke", "fire", "100lbs", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png")

