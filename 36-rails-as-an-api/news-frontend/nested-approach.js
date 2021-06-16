/****** GLOBAL VARIABLES ******/
const companyName = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')
const form = document.querySelector('form#article-form')
const darkModeToggle = document.querySelector('input#toggle-dark-mode')



/****** HELPER FUNCTIONS ******/
function updateFirstCard() {
    const firstCardImg = document.querySelector('div.img-container img')
    firstCardImg.src = '/Users/michelle/Desktop/my-cohorts/nyc-web-022221/24-dom-manipulation/newsApp/images/raffy.jpg'
}


function updateSchoolColor() {
    const schoolName = document.querySelector('p.flatiron')
    schoolName.style.color = 'red'
}


function deleteAdvertisment() {
    const adDiv = document.querySelector('.card.ad')
    adDiv.remove()
}


function renderOneCard(articleObj) {
    // 1. CREATE THE OUTER MOST DIV OF THE HTML YOU'RE CREATING
    const outerDiv = document.createElement('div')
    outerDiv.classList.add('card')
    outerDiv.dataset.id = articleObj.id

    // ADD THE INNER CONTENTS
    outerDiv.innerHTML = `<div class="img-container">
        <img src="${articleObj.image}"
            alt="${articleObj.title}" />
        <div class="article-title-container">
            <h4>${articleObj.title}</h4>
        </div>
    </div>
    <div class="content">
        <p class='author'>Author: ${articleObj.author}</p>
        <div class="scroll">
            <p class='description'>${articleObj.description}</p>
        </div>
        <p class="react-count">${articleObj.likes} likes</p>
        <button class="like-button">♥️ Like</button>
        <button class='delete-button'>X</button>
    </div>`

    // FIND WHERE YOU WANT TO ADD THIS ON THE PAGE & SLAP IT ON THE DOM
    const collectionDiv = document.querySelector('div#collection')
    collectionDiv.append(outerDiv)

    // NESTED/CLOSURE APPROACH
    const delBtn = outerDiv.querySelector('.delete-button')
    delBtn.addEventListener('click', () => {
        outerDiv.remove()
    })

    const likeBtn = outerDiv.querySelector('.like-button')
    likeBtn.addEventListener('click', () => {
        const likesPTag = outerDiv.querySelector('p.react-count')
        // articleObj.likes = articleObj.likes + 1
        // articleObj.likes += 1
        // ++x -> prefix incrementation
        // x++ -> postfix incrementation
        likesPTag.textContent = `${++articleObj.likes} Likes`
    })
}


function renderAllCards() {
    articlesArray.forEach(function (articleObject) {
        renderOneCard(articleObject)
    })
}



/****** EVENT LISTENERS ******/
darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
})


form.addEventListener('submit', function (event) {
    event.preventDefault() // ALWAYS INCLUDE

    const lastIndex = articlesArray.length - 1
    const lastId = articlesArray[lastIndex].id

    const newArticleObj = {
        title: event.target.title.value,
        author: event.target.author.value,
        description: event.target.description.value,
        image: event.target.url.value,
        likes: 0,
        id: lastId + 1
    }

    articlesArray.push(newArticleObj)
    renderOneCard(newArticleObj) // DOM Manipulation
    form.reset()
})



/****** APP INIT ******/
renderAllCards()
deleteAdvertisment()



// Flawed Approach

// const allDelBtns = document.querySelectorAll('.delete-button')
// allDelBtns.forEach(btn => {
//     btn.addEventListener('click', event => {
//         console.log('Delete clicked! ', event.target)
//     })
// })