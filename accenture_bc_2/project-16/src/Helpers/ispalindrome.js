function isPalindrome(word) {
    let len = word.length;
    let mid = Math.floor(len/2);

    for ( let i = 0; i < mid; i++ ) {
        if (word[i] === word[len - 1 - i]) {
            return true;
        }
    }

}

export default isPalindrome;