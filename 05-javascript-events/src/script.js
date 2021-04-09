

document.addEventListener("DOMContentLoaded", init)


function init() {
      // clickHandler()  
      deleteRow()

      // Grab the FORM add a "SUBMIT" eventListener
      document.querySelector("#poke-form").addEventListener('submit', submitHandler)

}

// DELETE
function deleteRow() {
      //Get all of the rows
      const allRows = document.querySelectorAll(".poke-row")
      // Loop off the set (should be an [nodeList]) and "FOR EACH" item in the set, lets 
      allRows.forEach(function(row){
            // Here row is an argument, that stands for an individual item in the array
            // add a click EVENTlistener
            row.addEventListener("click", (event) => {
                  // event.currentTarget is WHERE THE EVENTLISTENER WAS PLACED
                  event.currentTarget.remove()
            })
      })

}


// CREATE 
function submitHandler(event) {
      // Every submit event needs to run event.preventDefault() so the page
      // does not refresh 
      event.preventDefault()

      let name = event.target.pokeName.value
      let type = event.target.pokeType.value
      let weight = event.target.pokeWeight.value
      let img = event.target.pokeImg.value

      createNewRow(name, type, weight, img)


      event.target.reset()

      window.scrollTo(500, 0);
}

// function clickHandler() {
//       //Grab the Table and add an "click" eventlistener 
//       document.querySelector("#table").addEventListener('click', (event) => {
//             //event.target
//             // console.log(event.target.innerHTML)

//             //event.currentTarget
//             console.log(event.currentTarget)
//       })
      
// }




function createNewRow(name, type, weight, imageURL) {
    const newRow = document.createElement("tr")
          //added a new "poke-row" class name so we can select all of them
          newRow.className = "poke-row"

          newRow.addEventListener("click", (event) => {
                  // event.currentTarget is WHERE THE EVENTLISTENER WAS PLACED
                  event.currentTarget.remove()
            })

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