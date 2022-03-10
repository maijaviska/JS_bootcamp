let colors = []
let numberOfSquares = 6
let pickedColor = null


let squares        = document.querySelectorAll('.square')
let resetButton    = document.getElementById('reset')
let messageDisplay = document.getElementById('message')
let modeButtons    = document.querySelectorAll('.mode')
let colorDisplay   = document.getElementById('color-display')

resetButton.addEventListener('click', () => {
    reset()
})

init()

function init() {
    setupSquares()
    setupMode()
    reset()
    colorDisplay.innerText = pickedColor
}

function setupMode() {
    for (const but of modeButtons) {
        but.addEventListener('click', () => {
            for (const bb of modeButtons) {
                bb.classList.remove('selected')
            }
            but.classList.add('selected')
            if (but.innerText === 'EASY') {
                numberOfSquares = 3
            } else {
                numberOfSquares = 6
            }
            reset()
        })
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].addEventListener('click', () => {
            let clickedColor = squares[i].style.backgroundColor
            if (clickedColor === pickedColor) {
                messageDisplay.innerText = 'Correct'
                resetButton.innerText = 'Play again'
                changeColor(pickedColor)
            } else {
                squares[i].style.backgroundColor = '#232323'
                messageDisplay.innerText = 'Try again'
            }
        })
    }
}

function changeColor(color) {
    for (const sq of squares) {
        sq.style.backgroundColor = color
    }
}

function reset() {
    colors = generateRandomColors(numberOfSquares)
    pickedColor = chooseColor()
    colorDisplay.innerText = pickedColor
    resetButton.innerText = 'New Colors'
    messageDisplay.innerText = ''
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block'
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = 'none'

        }
    
    }
}

function generateRandomColors(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(makeColor())
    }
    return arr
}

function makeColor() {
    let r = Math.floor(Math.random() *256)
    let g = Math.floor(Math.random() *256)
    let b = Math.floor(Math.random() *256)
    return `rgb(${r}, ${g}, ${b})`
}

function chooseColor() {
    let ri = Math.floor(Math.random() * colors.length)
    return colors [ri]
}