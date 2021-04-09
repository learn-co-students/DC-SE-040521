

function createNewRow(name, type, weight, imageURL) {
    const newRow = document.createElement("tr")
          //added a new "poke-row" class name so we can select all of them
          newRow.className = "poke-row"
          newRow.addEventListener('click', function(event){event.currentTarget.remove()})

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
    pokeImg.src = imageURL
    //put the image element inside the td element
    imageTd.appendChild(pokeImg)
    //take the td element and put that inside the tr
    

    newRow.append(tHead, pokeType, pokeWeight, imageTd)
    

  document.querySelector("#table").appendChild(newRow)
}