function isAnagram(word1, word2) {
    return word1.toLowerCase().replace(/\s/g, "").split('').sort().join('') === word2.toLowerCase().replace(/\s/g, "").split('').sort().join('');
}

export default isAnagram;