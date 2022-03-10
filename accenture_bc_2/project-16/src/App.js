import Anagram from "./Components/Anagram";
import Palindrome from "./Components/Palindrome";
import Wordcount from "./Components/Wordcount";



function App() {
  return (
    <div >
      <h2>Task 1</h2>
     <Palindrome word="Foo"/>
     <Palindrome word="Alus ari ira sula"/>
     <Palindrome word="Anna"/>
      <h2>Task 2</h2>
     <Anagram word1="Elvis" word2="Lives"/>
     <Anagram word1="Foo" word2="Bar"/>
     <Anagram word1="Anagram" word2="Nag a Ram"/>
     <h2>Task 3</h2>
     <Wordcount wordX="Foo"/>
     <Wordcount wordX="bar"/>
     <Wordcount wordX="Lalala"/>
    </div>
  );
}

export default App;
