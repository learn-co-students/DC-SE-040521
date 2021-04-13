console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

getDogImages()
getDogBreeds()
filterHandler()

let allBreeds = []

function getDogImages() {
    fetch(imgUrl)
        .then(r => r.json())
        .then(data => {
            data.message.forEach(renderImage)
        })
}

function renderImage(dogUrl){
    //define any logic here will run on each individual image URL

    //Create a new img element
    const newImg = document.createElement("img")

    //Update the newImg src attribute with with the imgUrl
    newImg.src = dogUrl

    //Tell the image to live on the DOM
    document.getElementById("dog-image-container").append(newImg)
}

function getDogBreeds() {
    fetch(breedUrl)
        .then(r => r.json())
        .then(data => {
            const newArray = []

            for (const key in data.message){
                if(data.message[key].length === 0){
                    newArray.push(key)
                } else {
                    for(const el of data.message[key]){
                        newArray.push(`${el} ${key}`)
                    }
                }
                // console.log(key, data.message[key])
            }

            newArray.forEach((breedName) => {
                let newLi = document.createElement("li")
                newLi.innerText = breedName
                document.querySelector("#dog-breeds").appendChild(newLi)
            })
            
        })
}

function filterHandler(){
    document.querySelector("#breed-dropdown").addEventListener("change", (e) => {
     
        document.querySelector("#dog-breeds").innerHTML = ""
        allBreeds.filter(breed => breed[0] === e.target.value).forEach(breedName => {
            const newLi = document.createElement("li")
            newLi.innerText = breedName 
            document.querySelector("#dog-breeds").appendChild(newLi)
        })
    })
}

