import isAnagram from "../Helpers/isAnagram";

function Anagram(props){
    const word1 = props.word1;
    const word2 = props.word2;

    let wordAnagram = null;
    if (isAnagram(word1, word2)) {
        wordAnagram = <span>are anagrams</span>
    } else {
        wordAnagram = <span>are not anagrams</span>
    }

    return (
        <div>
            <span>"{word1}"</span> and <span>"{word2}" </span> {wordAnagram}
        </div>
    )


}

export default Anagram;