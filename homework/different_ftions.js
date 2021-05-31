class Animal {
    constructor(age, color, weight) {
        this.age = age
        this.color = color
        this.weight = weight
    }

    talk() {
        return 'The animal makes some sound...'
    }
}

class Hippo extends Animal {

    constructor(age, color, weight, isPeaceful) {
        super(age, color, weight)
        this.isPeaceful = isPeaceful
    }

    talk() {
        return 'GROWOWWLWLL!!!'
    }
}

class Cat extends AnimalWithBreed {

    constructor(age, color, weight, breed, hasClaws) {
        super(age, color, weight, breed)
        this.hasClaws = hasClaws
    }

    talk() {
        return 'Meow'
    }
}


let startCountingFrom = 0

window.onload = function() {
    let number = document.getElementById('number')
    number.innerText = startCountingFrom
}

function operation(isAddition) {

    let numberContainer = document.getElementById('number')
    let n = parseInt(numberContainer.innerText)
    if(isAddition) {
        numberContainer.innerText = ++n
      

    }else {
        numberContainer.innerText = --n

    }
}

function displayHealthPoints() {
    let healthContainer = document.getElementById('healthContainer')

    for (let _ = 0; _ < MAX_HP; _++) {
        let img = document.createElement('img')
        img.className = 'healthPoint'
        img.src = 'heart.png'
        healthContainer.appendChild(img)
    }
}

function generateRandomwordToGuess() {
    let ri = Math.floor(Math.random() * AVAILABLE_wordToGuessS.length)
    return AVAILABLE_wordToGuessS[ri]
}

function getLastWordFromText(text) {
    let split = text.split(',')
    let lastWord = split[split.length - 1].toUpperCase()
    return lastWord
}

function addressFormally(fullName, isMarried, isFemale) {
    let firstPart = ''
    if (isFemale) {
        if (isMarried) {
            firstPart = 'Mrs. '
        } else {
            firstPart = 'Ms. '
        }
    } else {
        firstPart = 'Mr. '
    }
    let name = ''
    let nameSplit = fullName.split(' ') // This is an array [firstName, lastName]
    name = nameSplit[0]

    let lastName = nameSplit[1]
    let firstCharacterOfLastName = lastName[0]

    return firstPart + name + ' ' +  firstCharacterOfLastName + '.'

}

function getOddNumbers(numbers) {
    let oddNumbers = []
    // Modulo operator
    for (nr of numbers) {
        if (nr % 2 !== 0) { // The number is odd
            oddNumbers.push(nr)
        } 
    }
    return oddNumbers
}

let orchestras = new Map()
orchestras.set(orchestra.name, orchestra)
let musicalEnterprise = new MusicalEnterprise(orchestras)
musicalEnterprise.makePerform('White Eagle Sounds')

// let myMap = new Map()

// let musicalEnterprise.makePerform()


// let newap = new Map()
// newMap.set(123, new Person('Geralt', 'Rivyan', 40))

// let person = newMap.get(123)

while (i < 10) {
    text += "The number is " + i;
    i++;
  }

  do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);


  class Person {
      constructor(firstName, lastName){
          this.
      }
  }