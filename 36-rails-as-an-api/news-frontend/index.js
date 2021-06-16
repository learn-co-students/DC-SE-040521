/****** GLOBAL VARIABLES ******/
const companyName = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')
const form = document.querySelector('form#article-form')
const darkModeToggle = document.querySelector('input#toggle-dark-mode')
const collectionUl = document.querySelector('div#collection')


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
    const outerDiv = document.createElement('div')
    outerDiv.classList.add('card')
    outerDiv.dataset.id = articleObj.id

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

    const collectionDiv = document.querySelector('div#collection')
    collectionDiv.append(outerDiv)
}


function renderAllCards() {
    fetch('http://localhost:3000/articles')
        .then(response => response.json())
        .then(articlesArr => {
            articlesArr.forEach(articleObject => {
                renderOneCard(articleObject)
            })
        })
}


/****** EVENT LISTENERS ******/
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})


form.addEventListener('submit', (event) => {
    event.preventDefault()

    const newArticleObj = {
        title: event.target.title.value,
        author: event.target.author.value,
        description: event.target.description.value,
        image: event.target.url.value,
        likes: 0,
    }


    fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newArticleObj)
    })
        .then(response => response.json())
        .then(newArticleObject => {
            renderOneCard(newArticleObject)
        })

    form.reset()
})


collectionUl.addEventListener('click', event => {

    if (event.target.className === 'delete-button') {
        const cardDiv = event.target.closest('div.card')
        cardDiv.remove()


        fetch(`http://localhost:3000/articles/${cardDiv.dataset.id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(console.log)
    }
    else if (event.target.matches('.like-button')) {
        const cardDiv = event.target.closest('div.card')
        const likesPTag = cardDiv.querySelector('p.react-count')
        const currLikes = parseInt(likesPTag.textContent)
        likesPTag.textContent = `${currLikes + 1} Likes`

        fetch(`http://localhost:3000/articles/${cardDiv.dataset.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likes: currLikes + 1 })
        })
            .then(response => response.json())
            .then(console.log)
    }
})


/****** APP INIT ******/
renderAllCards()
deleteAdvertisment()
