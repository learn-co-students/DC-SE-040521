const BASE_URL = "http://localhost:3000/pups/"

let allData

getPups()

function getPups(){
    fetch(BASE_URL)
        .then(res => res.json())
        .then((pupData) => pupData.forEach(makeSpan)) 
}

// async function getPups(){
//     const response = await fetch(BASE_URL)
//     const pupData = await response.json()

//     pupData.forEach(makeSpan)
// }



function makeSpan(pup){
    const span = document.createElement("span")

    span.innerText = pup.name

    document.getElementById("dog-bar").appendChild(span)

    span.addEventListener('click', (e) => {
        const pupImg = document.createElement("img")
        pupImg.src = pup.image

        const pupName = document.createElement("h2")
        pupName.innerText = pup.name

        const pupBtn = document.createElement("button")
        pupBtn.id = pup.id
        pupBtn.addEventListener("click", toggleDog)

        if(pup.isGoodDog){
            pupBtn.innerText = "Good Dog"
        } else {
            pupBtn.innerText = "Bad Dog"
        }

        pup.isGoodDog ? pupBtn.innerText = "Good Dog" :  pupBtn.innerText = "Bad Dog"

        document.getElementById("dog-info").innerText = ""
        document.getElementById("dog-info").append(pupImg, pupName, pupBtn)
    }) 
}


function toggleDog(e){
    const pupId = e.target.id

    const newVal = e.target.innerText === "Good Dog" ? false : true

    const dogObj = {
        isGoodDog: newVal 
    }

    const reqObj = {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify(dogObj)
    }

    

    fetch(BASE_URL+pupId, reqObj)
        .then(r => r.json())
        .then(updatedDog => document.getElementById(updatedDog.id).innerText = updatedDog.isGoodDog ? "Good Dog" : "Bad Dog" )

}


//   <img src=dog_image_url>
//   <h2>Mr. Bonkers</h2>
//   <button>Good Dog!</button>