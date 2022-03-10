import { useState } from "react";

function Changename() {
    const [text, setText] = useState('Foo')

    const changeText = () => {
        if (text === 'Foo') {
            setText('Baz')
        } else if (text === 'Baz') {
            setText('Bar')
        } else setText('Foo')
    }




    return(
        <div>
            <h1>Task 2</h1>
            <button onClick={changeText}>{text}</button>
        </div>
    )
}

export default Changename;