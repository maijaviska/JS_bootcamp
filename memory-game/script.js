let rows = 3;
let cols = 6;
let colors = []

let hp = null;
const DEFAULT_HP = 3

let mainContainer = document.getElementById('main-container')
let pairs = document.getElementById('pairs')

let wait = false
let gameStarted = false
let chosenCard = null

let gameCards = []

window.onload = function(){
    let healthpoints = parseInt(document.getElementById('hp').innerText)
    if (Number.isInteger(healthpoints) && healthpoints > 0) {
        hp = healthpoints
    } else {
        hp = DEFAULT_HP
    }
}

function init() {
    for (let i = 0; i < rows; i++) {
        let rowDiv = document.createElement('div')
        rowDiv.classList.toggle('gameRow')

        // Creating cards
        for (let j = 0; j < cols; j++) {
            let cardDiv = document.createElement('div')
            cardDiv.classList.toggle('card')
            cardDiv.classList.toggle('not-chosen')
            rowDiv.appendChild(cardDiv)
        }
        mainContainer.appendChild(rowDiv)
    }
}

init()

function generateColors() {
    colors = []
    let colorCount = Math.floor(rows * cols / 2)
    let hex = '0123456789ABCDEF'

    for (let i = 0; i < colorCount; i++) {
        let color = '#'
        for (let j = 0; j < 6; j++) {
            let ri = Math.floor(Math.random()  * hex.length);
            color += hex[ri]
        }
        colors.push(color)
    }
    pairs.innerText = colors.length
}

function assignColorsToCards() {

    let cards = document.querySelectorAll('.card.not-chosen')
    while (cards.length > 0) {
        let rc1 = null
        let rc2 = null
        let ri1 = null
        let ri2 = null
        do{
            ri1 = Math.floor(Math.random() * cards.length)
            rc1 = cards[ri1]
            ri2 = Math.floor(Math.random() * cards.length)
            rc2 = cards[ri2]
        } while (rc1 == rc2)

        let rci = Math.floor(Math.random() * colors.length)
        let rc = colors[rci]
        colors = colors.filter((el) => {return el !== rc})
        rc1.style.backgroundColor = rc
        rc2.style.backgroundColor = rc
        rc1.classList.toggle('not-chosen')
        rc2.classList.toggle('not-chosen')
       

        cards = document.querySelectorAll('.card.not-chosen')
    }
    
}

function resetCards() {
    let cards = document.querySelectorAll('.card')
    for (const card of cards) {
        if (!card.classList.contains('not-chosen')) {
            card.style.backgroundColor = 'transparent'
            card.classList.toggle('not-chosen')
        }
        
    }

}

function createGameCards() {
    const cards = document.querySelectorAll('.card')
    for (const card of cards) {
        gameCards.push({card: card, color: card.style.backgroundColor})
    }
}
function makeCardsClickable() {
    const cards = document.querySelectorAll('.card')
    let clickHandler = (card, i) => {
        if (gameStarted && !wait) {
            if (!chosenCard) {
                card.style.backgroundColor = gameCards[i].color
                chosenCard = {card: card, color: gameCards[i].color}
                if(card.classList.contains('not-chosen')) {
                    card.classList.contains('not-chosen')
                }
            } else {
                let currCard = gameCards[i]
                if (chosenCard.color === currCard.color) {
                    chosenCard.card.style.backgroundColor = currCard.color
                    currCard.card.style.backgroundColor = currCard.color
                    if (chosenCard.card.classList.contains('not-chosen')){
                        chosenCard.classList.toggle('not-chosen')
                    }
                    if (currCard.card.classList.contains('not-chosen')) {
                        currCard.classList.toggle('not-chosen')
                    }
                    chosenCard = null
                    wait = false
                    let newPairsCount = parseInt(pairs.innerText)
                    pairs.innerText = --newPairsCount

                    if(newPairsCount === 0) {
                        gameStarted = false
                        document.body.style.backgroundColor = 'green'
                        let title = document.getElementById('title')
                            title.innerText = 'You have won!'
                    }

                } else {
                    if(!chosenCard.card.classList.contains('not-chosen')){
                        chosenCard.card.classList.toggle('not-chosen')
                    }
                    currCard.card.style.backgroundColor = currCard.color
                    wait = true

                    setTimeout(function() {
                        if (chosenCard){
                            chosenCard.card.style.backgroundColor = ''
                        }
                        chosenCard = null
                        chosenCard.card.classList.toggle('not-chosen')
                        chosenCard.card.style.backgroundColor = ''
                        currCard.card.style.backgroundColor = ''
                        let healthpoints = document.getElementById('hp')
                        healthpoints.innerText = --hp
    
                        if (hp === 0) {
                            let title = document.getElementById('title')
                            title.innerText = 'You have lost!'
                            gameStarted = false
                            document.body.style.backgroundColor = 'tomato'
                        }
                        wait = false
                    }, 1500)


                }

               
            }
        }
    }

    for (const [i, card] of cards.entries()) {
        card.removeEventListener('click', function() {clickHandler(card, i)}, false)
    }

    for (const [i, card]  of cards.entries()) {
        card.addEventListener('click', function() {clickHandler(card, i)}, false)
    }
}

function resetHp() {
    hp = DEFAULT_HP
    document.getElementById('hp').innerText = hp
}

function resetTitle() {
    document.getElementById('title').innerText = 'Memory Game'
}

function play() {
    gameStarted = true
    chosenCard = null
    gameCards = []
    document.body.style.backgroundColor = ''

    mainContainer.innerHTML = ''
    init()

    resetTitle()
    resetHp()
    generateColors()
    resetCards()
    assignColorsToCards()
    createGameCards()
    makeCardsClickable()
    setTimeout(() => {
        resetCards();
        const cards = document.querySelectorAll('.cards')
        for (const card of cards) {
            card.style.backgroundColor = ''
        }

    }  , 3000)
    
}