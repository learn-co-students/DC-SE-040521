// const BASE_URL = "http://localhost:3000/pokemon"
// const ALL_POKEMON = []


// class Pokemon {
//     constructor(name, weight, sprite, type, bio, id){
//         this.name = name
//         this.weight = weight
//         this.sprite = sprite
//         this.type = type
//         this.bio = bio
//         this.id = id
//         ALL_POKEMON.push(this)
//     }

//     sayHi(){
//         return `Hi it's me ${this.name}`
//     }

//     pokeURL(){
//         return `${BASE_URL}/${this.id}`
//     }

//     deletePokemon(){
//         fetch(this.pokeURL(), {method: "DELETE"})
//             .then(() => {
//                 document.getElementById(this.id).remove()
//             })
//     }

//     render(){
//             // Create an li
//         const pokeLi = document.createElement('li')
//         pokeLi.innerText = this.name 
//         pokeLi.className = "list-group-item"
//         pokeLi.id = this.id
//         document.querySelector(".list-group").appendChild(pokeLi)

//         pokeLi.addEventListener('click', () => this.deletePokemon())
//     }

// }


// const loadPokemon = async () => {
//     const res = await fetch(BASE_URL)
//     const pokeData = await res.json()
    // pokeData.forEach(({name, weight, sprite, type, bio, id}) => new Pokemon(name, weight, sprite, type, bio, id))
// }

// loadPokemon()




//Object destructuring  *********************************
// let personObject = {
//     firstName: "Adam",
//     lastName: "Wayne",
//     email: 'mail@mail.com',
//     userName: 'adamwjo',
//     phoneNum: '555-555-5555',
//     address: `123 B Bakers St.`,
//     favorite_actors: ['Alicia Vikander', 'Michael Fassbender', 'Jude Law']
// }

// const { firstName, lastName } = personObject

// // const firstName = personObject.firstName
// // const lastName = personObject.firstName

// console.log(firstName, lastName);


// //Key-Value Syntax **************************************

// function pizzaMaker(cheese, sauce){
//     // const newPizza = {
//     //     cheese: cheese,
//     //     sauce: sauce
//     // }

//     const newPizza = { cheese, sauce } 


//     console.log(newPizza)
// }

// pizzaMaker("fromage", "tomattoooooo")


// // Spread Operator ****************************************
// let array = [1, 2, 3]
// let array2 = [4, 5, 6]
// let array3 = [...array2, ...array]

// function updateName(object, firstName, lastName){
//     const newObj = {...object, firstName, lastName}

//     console.log(newObj)
// }

// updateName(personObject, "Marry", "Poppins")


//Implicit vs Explicit return ************************************
const addTwo = (num1, num2) => {
    return num1+num2
}


// function normalAddTwo(num1, num2){
//     return num1+num2
// }

console.log(addTwo(4, 12))