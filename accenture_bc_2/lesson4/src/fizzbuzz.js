const fizzbuzz = (num) => {

     if (num % 2 === 0 && num % 3 == 0) {
         return "fizzbuzz";
     } else if (num % 2 === 0) {
         return "fizz";
    } else if (num % 3 == 0) {
         return "buzz";
    } else {
         return num
    }
    
}

export default fizzbuzz;
