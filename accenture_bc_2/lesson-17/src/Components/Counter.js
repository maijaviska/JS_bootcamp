import { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(10)
 
    const count = () => {
        let newValue = number + 1
        if (newValue > 20) {
            newValue = 0;
        }
        setNumber(newValue)
    }

    const color = number % 2 === 0 ? 'red' : 'green';

    return (
        <div>
            <h1>Counter</h1>
            <h2 style={{color: color}}>{number}</h2>
            <button onClick={count}>+1</button>
        </div>
    )
}

export default Counter;