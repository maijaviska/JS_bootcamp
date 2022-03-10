import isPalindrome from "../Helpers/ispalindrome";


function Palindrome(props) {
    const word = props.word;

    let wordType = null;
    if (isPalindrome(word)) {
        wordType = <span>is a palindrome</span>
    } else {
        wordType = <span>is not a palindrome</span>
    }

    return (
        <div>
            "{word}" {wordType}
        </div>
    )
}

export default Palindrome;