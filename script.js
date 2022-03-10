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

function plusTwo(numbersOne, numbersTwo) {
    return [numbersOne[0],numbersOne[1],numbersTwo[0], numbersTwo[1]]
}
// plusTwo
function startWithOne(arrOne, arrTwo) {
    let count = 0
    if (arrOne[0] === 1) count++
    if (arrTwo[0] === 1) count++
    return count
}

function sum2(arr) {
    return arr[1] +[2]
}

// countEvens([2, 1, 2, 3, 4]) → 3
// countEvens([2, 2, 0]) → 3
// countEvens([1, 3, 5]) → 0
function countEvens(arr) {
    let even = 0
    for (let nr of arr){
        if (nr % 2 === 0) {
            even++
        }
    }
    return even
}

// let result = countEvens([1, 4, 6, 9])
// console.log(result)

// modThree([2, 1, 3, 5]) → true
// modThree([2, 1, 2, 5]) → false
// modThree([2, 4, 2, 5]) → true
// function modThree(arr) {
//     if (arr.length < 3) {return false}

//     let count = 0
//     let previousEven = arr[0] % 2 === 0
//     for (let i = 1; i < arr.length; i++){
//         if ((arr[i] % 2 === 0 && previousEven) || (arr[i] % 2 === 1 && !previousEven)) {
//             count++
//             if (count === 3) {return true}
//         }else {
//             count = 1
//             previousEven = arr[i] % 2 === 0
//         }
//     }



//     return count === 3
// }


// function repeatFront(text, n) {
//     let transformText = ''
//     for (let i = n; i > 0; i--) {
//         transformText += text.slice(0, i)

//     }
//     return transformText
// }

// console.log(repeatFront("Chocolate", 4))
// console.log(repeatFront("Chocolate", 3))
// console.log(repeatFront("Chocolate", 2))

function tripleUp(numbers) {
    if (numbers.length < 3) {
        return false
    }

    let previous = numbers[0]
    let count = 1
    for (let i = 1; i < numbers.length; i++) {
        let current = numbers[i]
        if (Math.abs(previous - current) === 1) {
            count++
            if(count === 3) {
                return true
            }
        }else {
            count = 1
        }
        previous = current
    }
    return false
}
// console.log(tripleUp)

// function canBalance(numbers) {
//     if (numbers.length < 2) {
//         return false
//     }
//     for (let i = 1; i < numbers.length -1; i++) {
//         let leftPartSum = findSum(numbers.slice(0, i))
//         let rightPartSum = findSum(numbers.slice(i))
//         if(leftPartSum === rightPartSum) {
//             return true
//         }
//     }
//     return false
// }

// function findSum(numbers) {
//  let sum = 
// }

function seeColor(text) {
    if (text.indexOf('red') === 0) {
        return 'red'
    } else if (text.indexOf('blue') === 0) {
        return 'blue'
    } else {
        return ''
    }
}

// fizzString("fig") > "Fizz"
// fizzString("dib") > "Buzz"
// fizzString("fib") > "FizzBuzz"


// function fizzString(text) {
//     if (text.indexOf('f') === 0 && text.indexOf('b') === text.length - 1) {
//         return 'FizzBuzz' 
//     }else if (text.indexOf('f') === 0) {
//         return 'Fizz'
//     } else if (text.indexOf('b') === text.length - 1) {
//         return 'Buzz'
//     }
// }

function fizzArray(n) {
    let numbers = []
    for (let i = 0; i < n; i++) {
        numbers.push(i)
    }
    return numbers
}

function double23(numbers) {
    return (numbers[0] === numbers[1] && numbers[0] === 2)
}

function loneSum(a, b, c) {
    let sum = 0
    if (a !== b && a !==c) {
        sum +=a
    }
    if (b !== a && b !== c) {
        sum +=b
    }
    if (c !== a && c !== a) {
        sum +=c
    }
    return sum
}

// makeChocolate(4, 1, 9) => 4

function makeChocolate(small, big, goal) {
    let bigChocolateFits = big === 0 ? 0 : Math.floor(goal/ 5)
    if (big >= bigChocolateFits) {
        goal -= bigChocolateFits * 5
    }
    if (goal === 0) {
        return 0
    } else {
        if (goal == small) {
            return small 
        } else if (goal< small){
            return goal
        }else {
            return -1
        }

    }

}

// function blackjack(a, b) {
//     let diffA = 21 -a
//     let diffB = 21 - b
//     if (diffA < 0 && diffB < 0) {
//         return 0
//     }

//     return diffA > diffB ? B : A
// }

// console.log(blackjack(19, 21))

// bobThere("abcbob") -> true
function bobThere(text) {
    for(let i = 0; i < text.length; i++) {
        if (text[i] === 'b' && text[i+2] === 'b') {
            return true
        }
    }
    return false
}
//linearIn([1,2,3,6], [2,4]) true
function linearIn(outer, inner) {
    for (const nr of inner) {
        let exist = false //flag variable to notify that smth had happened
        for(const otherNr of outer) {
            if (nr === otherNr) {
                exist = true
                break

            }
        }
        if (!exist) {
            return false
        }
    }
    return true
}

//endOther("Hiabc", "abc") -> true

function endOther(first, second) {
    first = first.toLowerCase()
    second = second.toLowerCase()
    let firstLength = fist.length
    let secondLength = second.length

    let firstLastChar = first.slice(-secondLength)
    let secondLastChar = second.slice(-firstLength)
    if (firstLastChar === second || secondLastChar === first) {
        return true
    } else {
        return false
    }
}

//copyEndy([9, 11, 90, 22, 6] 2) -> [9, 90]



//bigHeight([5, 3, 6, 7, 2] 2, 4) -> 1

function bigHeight(height, start, end) {
    let bigSteps = 0
    for (let i = start; i < end; i++) {
        let currentHeight = height[i]
        let nextHeight    = height[i+1]
        let diff = Math.abs(currentHeight - nextHeight)
        if (diff >= 5) {
            bigSteps += 1

        }
    }
    return bigSteps
}

function repeatSeparator(word, seperator, count) {
    let result = ''
    for (let i = 0; i < count; i++) {
        result += word
        if (i < count - 1) {
            result += seperator
        }
    }
    return result

}

// console.log(repeatSeparator('Word', 'X', 3))

//recursion
function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n -1) 
}
// console.log(factorial(1))

function copyEvens(nums, count) {
    let arr = []
    for (const nr of nums) {
        if (nr % 2 === 0) {
            arr.push(nr)
            count --
        }
        if (count === 0) {
            break
        }
    }
    return arr
}

function scoreUp(key, answers) {
    let sum = 0
    for (let i = 0; i < key.length; i++) {
        let kv = key[i]
        let av = answers[i]
        if (kv === av) {
            sum += 4
        } else if (kv !== av && av !== '?') {
            sum --;
        }
    }
    return sum
}



function find2020(nums) {
    for (let i = 0; i< nums.length; i++) {
        let el = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            let otherEl = nums[j]
            if (el + otherEl === 2020) {
                console.log(`FirstEl: ${el}, Second: ${otherEl}`)
            }
        }
    }
}

let passwords = [
    '1-3 a: abcde',
    '1-3 b: cdefg',
    '2-9 c: ccccccccc'
]

function passwordPhilosophy(passwords) {
    for (const pass of passwords) {
        let passSplit = pass.split(' ')
        const min = parseInt(passSplit[0][0])
        const max = parseInt(passSplit[0][2])
        const ch  = passSplit[1][0]
        const ps  = passSplit [2]

        let count = 0
        for (const char of ps) {
            if (char === ch) {
                count++
            }
        }
        if (count >= min && count <= max) {
            console.log(`Password ${pass} correct`)
        }
    }

}

let slope = "..##.........##.........##.........##.........##.........##.......\n\
             #...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..\n\
             .#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.\n\
             ..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#\n\
             .#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.\n\
             ..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....\n\
             .#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#\n\
             .#........#.#........#.#........#.#........#.#........#.#........#\n\
             #.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...\n\
             #...##....##...##....##...##....##...##....##...##....##...##....#\n\
             .#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#"

function tobogganTrajectory(slope) {
    let map = slope.split('\n')
    for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
        map[rowIndex] = map[rowIndex].trim()
    }
    let currentRow = 0
    let currentCol = 0
    let numberOfTrees = 0
    while(currentRow < map.length - 1) {
        

        for(let i = 0; i < 3; i++) {
            currentCol++
            let el = map[currentRow][currentCol]
            if (el == '#') {
                numberOfTrees += 1
            }

            if (i === 2) {
                currentRow++
                el = map[currentRow][currentCol]
                if (el == '#') {
                    numberOfTrees++
                }
            }
        }
    }
    console.log(numberOfTrees)
}

// maxBlock('hoopla') -> 2

function maxBlock(text) {
    let maxLetters = 1
    let maxBlock = 1
    for (let i = 0; i < text.length; i++) {
        if (text[i] == text[i+1]) {
            maxLetters++
        }else {
            if (maxLetters > maxBlock) {
                maxBlock = maxLetters
            }
            maxLetters = 1
        }


    }
}


let passports = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n\
                    byr:1937 iyr:2017 cid:147 hgt:183cm\n\
                    \n\
                    iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\n\
                    hcl:#cfa07d byr:1929\n\
                    \n\
                    hcl:#ae17e1 iyr:2013\n\
                    eyr:2024\n\
                    ecl:brn pid:760753108 byr:1931\n\
                    hgt:179cm\n\
                    \n\
                    hcl:#cfa07d eyr:2025 pid:166559648\n\
                    iyr:2011 ecl:brn hgt:59in\n"


function passportProcessing(passportsString) {
    let passports = passportsString.split('\n')
                                    .map((pass) => {return pass.trim()})
    let propertyMap = new Map()
    for (const pass of passports) {
        let passportProperties = pass.split(' ')
        for (const prop of passportProperties) {
            const propKeyValue = prop.split(':')

            if (propKeyValue.length < 2) {

            }
        }
    }


}

passportProcessing()


