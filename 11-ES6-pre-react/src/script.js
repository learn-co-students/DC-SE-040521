const BASE_URL = "http://localhost:3000/pokemon"
const ALL_POKEMON = []


class Pokemon {
    constructor(name, weight, sprite, type, bio, id){
        this.name = name
        this.weight = weight
        this.sprite = sprite
        this.type = type
        this.bio = bio
        this.id = id
        ALL_POKEMON.push(this)
    }

    sayHi(){
        return `Hi it's me ${this.name}`
    }

    pokeURL(){
        return `${BASE_URL}/${this.id}`
    }

    render(){
            // Create an li
        const pokeLi = document.createElement('li')
        pokeLi.innerText = this.name 
        pokeLi.className = "list-group-item"
        document.querySelector(".list-group").appendChild(pokeLi)

        pokeLi.addEventListener('click', () => console.log(this))
    }

}

const loadPokemon = async () => {
    const res = await fetch(BASE_URL)
    const pokeData = await res.json()
    pokeData.forEach(({name, weight, sprite, type, bio, id}) => new Pokemon(name, weight, sprite, type, bio, id))
}

loadPokemon()