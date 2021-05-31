function findSum(arr){
    // for (let i = 0; i < arr.length; i++) { // for loop
    //     sum += arr[i]
    // }
    for (let nr of arr) { //for of loop
        sum += nr
    }
    return sum
}
// console.log(findSum([1,2,3]))

function reverseText(text) {
    let reversedText = ''
    for (let i = text.length -1; i >= 0; i--){
        reversedText += text[i] //gives us text at index i
    }
    return reversedText

}
// console.log(reverseText('ABC'))

function sumOfPowers(arr, power) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], power)
    }
    return sum

}

// console.log(sumOfPowers([1,2,3], 2))

// let numbers = [5, 3, 2, 4, 1]

// numbers.sort(function(a, b))

let nrs = [1, 4, 7, 8, 9, 12, 13, 15, 16]

// for (let i = 0; i < nrs.length; i++) {
//     nrs[i] = nrs[i] * 2
// }

// nrs = nrs.map(function(nr) { //the same as |^
//     return nr * 2
// })

// nrs = nrs.filter(function(){
//     return nr % 2 === 0
// })

// console.log(nrs)

function fibonacci(n) {
    let firstNumer = 0
    let secondNumber = 1
    let currentNumber = null

    for(let i = 2; i < n; i++) {
        currentNumber = firstNumer + secondNumber
        firstNumer = secondNumber
        secondNumber = currentNumber
    }
    return currentNumber
}
// console.log(fibonacci(9))

function fibonacciRecursive(n) {
    if (n <= 1) {
        return n
    }

    return fibonacciRecursive(n-2) + fibonacciRecursive (n-1)
}

fibonacciRecursive(10)

let hundredNumbers = ''
for (let i = 0; i <= 100; i++) {
    hundredNumbers += i + ','
}

// console.log(hundredNumbers)

//bit shifting << shift to the left, >> shift to the right
let nr = 8
let shifted = nr >> 1
// console.log(shifted)

let arr = [1, 9, 5]
arr.sort(function(a,b) { // sort automatic ascending
    return b - a // descending
})
// console.log(arr)

function greetEveryone(names) {
    // for (let i = 0; i < names.length; i++) {
    //     console.log('Hello' + names[i])
    // }
    for (let name of names) {
        console.log('Hello' + name)
    }
}

// greetEveryone(['Indra', 'Elina', 'Anna'])

let arr = [1, 2, 3]

class Array {
    constructor() {
        this.collection = []
    }
    at(index) {
        return this.collection[index]
    }
    push(el) {
        this.collection.push(el)
    }

    selectionSort() {
        // Selection sort
        for(let i = 0; i < this.collection.length; i++){
            let min = this.collection[i]
            let ri = -1
            for (let j = i + 1; j < this.collection.length; j++) {
                if(this.collection[j] < min) {
                    min = this.collection[j]
                    ri = j
                }
            }

            if (ri !== -1) {
                let replaceble = this.collection[i]
                this.collection[i] = min
                this.collection[ri] = replaceble
            }
            
        }
    }
    // bubbleSort() {
    //     let sorted = true
    //     for(){
    //         for (let i = 0; i < this.collection.length - 1; i++) {
    //             if (this.collection[i] > this.collection[i + 1]) {
    //                 let original = this.collection[i]
    //                 this.collection[i] = this.collection[i + 1]
    //                 this.collection[i + 1] = original
    //                 sorted = false
    //             }
    //         }
    //     }
    // }
}

let myArray = new Array()
myArray.push(9)
myArray.push(4)

// let firstArray = new Array()
// let secondArray = new Array()

// firstArray.at(2)
// firstArray.push(2)

// firstArray.collection.push(1)
// secondNumber.collection.push(5)

function printArguments(...args) { // ... there will be an argument list, or no, or one
    for (let arg of args) {
        console.log(arg)
    }
}

// function findMin(numbers) {
//     let min = null
//     for (let nr of numbers) {
//         if(!min) {
//             min = nr
//             continue
//         }
//         of (nr < min) {
//             min = nr
//         }
//     }
//     return min
// }


// class Dog {
//     eat() {
//         console.log('nom nom nom')
//     }

//     static talk() {
//         console.log('Woof')
//     }
// }

// Dog.talk()


