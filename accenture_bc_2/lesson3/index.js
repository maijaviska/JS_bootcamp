import isOdd from './src/isOdd.js';


const superSpecialNumber = 42;

for(let i = 0; i < 10; i++) {
    console.log (`The number ${i} is odd: ${isOdd(i)}`);
}