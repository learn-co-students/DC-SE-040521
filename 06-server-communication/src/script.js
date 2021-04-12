const BASE_URL = "http://localhost:3000/pokemon/"

// INITIALIZE 
handleFetch()
submitHandler()
feedPokemonHandler()
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
            .then( (pokeArray) => pokeArray.forEach(renderListItem) )
    })
}

function renderListItem(pokemon){
    // Create an li
    const pokeLi = document.createElement('li')

    // Update the li's innerText with the pokemons name
    pokeLi.innerText = pokemon.name 
    pokeLi.className = "list-group-item"
    
    // When I click a pokemons name, 
        // I should see it's information rendered in the details section
    pokeLi.addEventListener('click', () => {
        updateDetails(pokemon)
    })

    // Tell the li to live inside the ul
    document.querySelector(".list-group").appendChild(pokeLi)
  
}

function updateDetails(pokemon){
    //Grab the image, and then update that img's src with the pokemons
        //sprite value
        document.querySelector("#poke-img").src = pokemon.sprite

        //Grab and update h5 with the pokemons name
        document.querySelector(".card-title").innerText = pokemon.name

        //Grab and update p with pokemons bio
        document.querySelector('p').innerText = pokemon.bio 

        //Grab and update second h5 with the pokemons weight: " pokemonsWeight lbs "
        document.querySelector('#poke-weight').innerText = pokemon.weight + " lbs"
        
        document.querySelector("#feed-btn").dataset.id = pokemon.id 

}

// When I submit a new pokemons info using the form
    // I should see a new list item for that pokemon
    // That list item should behave like the original ones
    // That pokemon should be persisted in the database 
function submitHandler(){
    // Very first thing, attach a "submit" eventListener to the FORM 
    // DO NOT attach the "submit" listener to anything else
    document.querySelector("#poke-form").addEventListener("submit", (e) => {

        e.preventDefault()

        // Make an object {key: value} that looks
        const newPokemon = {
            name: e.target[0].value,
            weight: e.target[2].value,
            type: e.target[1].value,
            sprite: e.target[3].value,
            bio: "????"
        }

        // Make a request obj
        const reqObj = {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(newPokemon)
        }

     
        fetch(BASE_URL, reqObj)
            .then(r => r.json())
            .then((pokeData) => renderListItem(pokeData))


        e.target.reset()
        
    })
}

// When I click a pokemons "feed me" button
    // I should see the pokemons weight incrimented by 10
    // That information should persist in the database 

function feedPokemonHandler(){

    // grabs the feed-bttn and adds an event listener to it
    const button = document.querySelector("#feed-btn")
    button.addEventListener("click", (event) => {
        //Earlier we stored the pokemons id in the buttons dataset
        const pokeId = event.target.dataset.id 


        //take the number from the "{pokeWeight} lbs"
        // display and add 10 to it. 
        const weight = +document.querySelector("#poke-weight").innerText.split(" ")[0]

        // Create a new object with the updated value to send to the server
        const newWeight = {
            weight: weight + 10
        }

        // Create a request object of method PATCH, because we are trying to update the specific
        // resource 
        const reqObj = {
            headers: {"Content-Type": "application/json"},
            method: "PATCH",
            body: JSON.stringify(newWeight)
        }
        
        // PATCH Fetch request to /pokemon/:id 
        fetch(BASE_URL+pokeId, reqObj)
            .then(r => r.json())
            .then(updatedPokemon => {
                document.querySelector('#poke-weight').innerText = `${updatedPokemon.weight} lbs`
            })
 
    })
}