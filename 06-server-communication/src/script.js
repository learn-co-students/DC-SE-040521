const BASE_URL = "http://localhost:3000/pokemon/"

// INITIALIZE 
handleFetch()

///// USER STORIES /////



// When I click the "Get Mah Monsters" button 
// I should make a server call to get all my monsters
// I should see a list item for each pokemon in the dataset
function handleFetch(){
    // Grab the getmonsters button bind it to a variable 
    const fetchButton = document.querySelector("#pokeBtn")
    // attach a "click" event listener to that variable 
    fetchButton.addEventListener('click', () => {
        // as a callback to that eventlistener I want to run my 
        // GET request to http://localhost:3000/pokemon
        fetch(BASE_URL)
            // This returns a promise, when fufilled/rejected what is inside the .then()
            // will run
            .then( (res) => res.json() )
            // The above JSON parsing ALSO returns a promise. We handle that with a .then() as well
            .then( (data) => data.forEach(renderListItem))
    })
}

function renderListItem(pokemon){
    // Create an li
    const pokeLi = document.createElement('li')

    // Update the li's innerText with the pokemons name
    pokeLi.innerText = pokemon.name 
    pokeLi.className = "list-group-item"

    pokeLi.addEventListener('click', () => {
        console.log(pokemon)
    })

    // Tell the li to live inside the ul
    document.querySelector(".list-group").appendChild(pokeLi)
  
}



// When I click a pokemons name, 
    // I should see it's information rendered in the details section

// When I submit a new pokemons info using the form
    // I should see a new list item for that pokemon
    // That list item should behave like the original ones
    // That pokemon should be persisted in the database 

// When I click a pokemons "feed me" button
    // I should see the pokemons weight incrimented by 10
    // That information should persist in the database 