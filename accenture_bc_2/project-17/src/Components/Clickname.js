import { useState } from "react";

function Clickname() {
    const [word, setWord] = useState('Foo')

    const newWord = word === 'Foo' ? 'Bar' : 'Foo';

    const changeWord = () => {
        setWord(newWord)
      
        //should change word to Bar, if Bar to Foo
    }

    // it can also be written straigt to the setWord 
    // const changeWord = () => {
    //   setWord(word === 'Foo' ? 'Bar' : 'Foo')
    // }
    // let color = 'red';
    // if (word === 'Foo') {
    //     color = 'blue'
    // }

    let color = word === 'Foo' ? 'blue' : 'red';
   

    return (
        <div>
            <h1>Task 1</h1>
            <h2 style={{color: color}}>{word}</h2>
            <button onClick={changeWord}>Click me</button>
        </div>
    )
}

export default Clickname;