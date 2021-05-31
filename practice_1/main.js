// // let a = 123
// // let sometext = "dasda"
// // let some_number = 333333.6554

// // let pi = 3.14
// // // 2 * Pi * radius

// // let radius = 7
// // let circle = 2 * pi * radius
// // console.log(circle)




// // let i_am_teaching = true
// // let you_are_listening = true
// //  //OR is ||

// // let i_am_teaching_or_you_are_listening = i_am_teaching || you_are_listening

// // console.log(i_am_teaching_or_you_are_listening)

// // let a = false
// // let b = true
// // let f = a||b

// // console.log(f)

// // let well_fed = true
// // let inspired = true

// // let happy = well_fed && inspired
// // console.log(happy)

// // let angry = !happy
// // console.log(angry)

// // const pi = 3.14
// // // 2 * Pi * radius


// // let radius = 7
// // let circle = 2 * pi * radius
// // console.log(circle)

// function greetWorld() {
//     console.log ('Hello World!')
// }

// let name = 'Maija'
// function greet (name){
//     console.log('Hello, ' + name + '!')
// }

// greetWorld()
// greet(123)

// function boilEggs() {
//     putWaterBoiling()
//     putEggsIntoTheWater()
// }

// function putWaterBoiling() {
//     console.log("Water is boiling!")
// }

// function putWaterBoiling() {
//     console.log ("Putting Eggs!")
// }

// // let someNumber = 123
// // let someFloatingPointNumber = 123.321
// // "some text"
// // true
// // false

// // let number = 5

// // {
// //     let number = 11
// //     console.log(number)
// // }

// // function multiply(a,b) {
// //     let result = a * b
// //     return result
// // }

// // let res = multiply(100, 3)

// // console.log(res)

// // function add (c, d) {
// //     let res = c - d
// //     return res
// // }
// // let resultAdd = add (5,10)

// let u = 10
// u += 2

// let r = 100
// r = r - 2
// r -= 2

// let p = 5
// p = p + 1
// p += 1
// p++
// ++p


// let animal = {
//     name: "Good doggo",
//     color: 'White and black',
//     height: 100,
//     pet: function() {
//         console.log('The dog feels good when you pet it.')
//     },
// }

// animal.pet()
// let boolOne = false
// let boolTwo = true
// let boolThree = false

// if (boolOne && boolTwo) {
//     console.log('IF')
// } else if ((boolOne || boolTwo) && boolThree) {
//     console.log("ELSE IF!")
// } else if (10 == 10) {
//     console.log("ELSE IF TWO")
// }
// else {
//     console.log('OOOO!')
// }

// if (true) {
//     console.log("FIRST BLOCK")
// }
// if (false) {
//     console.log
// }

// console.log("Hello world!")

// let animal = "cat"

// let firstLetter = animal[0]
// console.log(firstLetter)

// let planet = "Neptune"

// console.log(planet[0])
// console.log(planet[5])

// console.log(planet.lastIndexOf('n'))

// let magicWord = "abrakadabra"

// let newWord = magicWord.slice(4)
// console.log(newWord)

// let otherWord = magicWord.slice(4, 7)
// console.log(otherWord)

// console.log(otherWord[0])

// let combine = otherWord[0] + magicWord[0] + otherWord[2]
// console.log(combine)
// console.log(otherWord == combine)

// let ww = "ABC"
// console.log(ww.slice(-1))

// let greeting = "Hello, World!"
// console.log(greeting)
// greeting = greeting.replace ("World", "Javascript")
// console.group(greeting)

// let a ="hello\n\n\nworld"
// console.log(a)
// let someObj = {
//     someProperty: 'someValue'
// }

// let a = 'abc'
// let b = 5
// let arr = [a,b, 'QQ', true, false, someObj]
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[4])

// arr.push('LATEST VALUE')
// console.log(arr[6])

// arr.pop()

// console.log(arr[6])

// for (let i = 0; i < 10; i+=2) {
//     console.log(i)
// }

// let names = ['Ance', 'Anna', 'Lina', '']

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// for(element of names) {
//     console.log(element)
// }

// let numbers = [100, 500, 1000, 500]

// let sum = 0
// for (nr of numbers) {
//     sum += nr
// }

// let i = 0
// while (i < 10){
//     console.log(i)
//     i++
// }

let isSunny = true
let isSpring = true
let isRaining = false
let isHumid = true
let isSummerSoon = isSunny && isSpring
let itsGoingToBeThunder = isRaining || isHumid

if (!isSummerSoon) {
    console.log ('Lets get the beach body ready!')
}else if (!itsGoingToBeThunder) {
    console.log ('Im going to need my umbrella')
} else {
    console.log ('What is the weather then?')
}



// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

for (let i = 0; i < 10; i+= 5) {
    console.log(i)
}

let seasons = ['Winter', 'Spring', 'Summer', 'Autumn']
console.log(seasons.length)
console.log(seasons[1])
console.log(seasons[3])

seasons[1] = 'The seasons of the flowers'
console.log(seasons)

// for (let i = 0; i < seasons.length; i++) {
//     console.log(seasons[i])
// }

// for-of loop
// for (el of seasons) {
//     console.log(el)
// }

let numbers = [1, 2, 3, 4, 5]
let sum = 0
for (nr of numbers) {
    sum +=nr
}
console.log(sum)