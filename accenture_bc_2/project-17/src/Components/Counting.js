import { useState } from "react";

function Counting(){
    const [number, setNumber] = useState(10)

    const updateNumber = (amount) => {
        setNumber(number + amount)
    }

    // const countMinusFive = () => {
    //     let newValue = number - 5
    //     setNumber(newValue)
    // }
    // const countMinusOne = () => {
    //     let newValue = number - 1
    //     setNumber(newValue)
    // }
    // const countPlusOne = () => {
    //     let newValue = number + 1
    //     setNumber(newValue)
    // }
    // const countPlusFive = () => {
    //     let newValue = number + 5
    //     setNumber(newValue)
    // }
   
    const updateInputValue = (event) => {
        const newValue = event.target.value
        setNumber(parseInt(newValue))
    }

    return(  
        <div>
            <h1>Task 3</h1>
            <button onClick={() => updateNumber(-5)}>-5</button>
            <button onClick={() => updateNumber(-1)}>-1</button>
            <input type="number" value={number} onChange={updateInputValue}/>
            <button onClick={() => updateNumber(1)}>+1</button>
            <button onClick={() => updateNumber(5)}>+5</button>
        </div>
        )
}

export default Counting;