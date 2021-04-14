let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const BASE_URL = "http://localhost:3000/toys/"

getToys()
addNewToy()


function getToys() {
  fetch(BASE_URL)
    .then(r => r.json())
    .then(toysArray => toysArray.forEach(renderToy))
}

function renderToy(toyObj){
  const toyCard = document.createElement("div")
  toyCard.className = "card"

  const name = document.createElement("h2")
  name.innerText = toyObj.name
  

  const toyImg = document.createElement("img")
  toyImg.src = toyObj.image
  toyImg.classList.add("toy-avatar")

  const likes = document.createElement("p")
  likes.innerText = `Likes: ${toyObj.likes}`
  likes.className = toyObj.id
  console.log(likes)

  const button = document.createElement("button") 
  button.innerText = "<3 like meee"
  button.id = toyObj.id


  button.addEventListener('click', (e) => {
    // The id of the thing we need to update
    console.log(e.target.id)
    // We have to derrive a new value to send the server 
    toyObj.likes += 1

    const newLikes = { likes: toyObj.likes + 1 }

    const reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "PATCH",
      body: JSON.stringify(newLikes)
    }

    fetch(BASE_URL+e.target.id, reqObj)
      .then(r => r.json())
      .then((updatedToy) => 
        document.getElementsByClassName(updatedToy.id)[0].innerText = `Likes: ${updatedToy.likes}`)

    
  })

  toyCard.append(name, toyImg, likes, button)

  document.querySelector("#toy-collection").appendChild(toyCard)

}

function addNewToy(){
  document.querySelector(".add-toy-form").addEventListener("submit", function(event){
    event.preventDefault()

    //Grab toy and name values from the input
    //Make a newToy object to send to the server

    const newToy = {
      name: event.target[0].value,
      image: event.target[1].value,
      likes: 0
    }

  

    const reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(newToy)
    }
    //Make our fetch "POST"

    fetch(BASE_URL, reqObj)
      .then(r => r.json())
      .then(renderToy)
    // Render the new toy
  })
}


