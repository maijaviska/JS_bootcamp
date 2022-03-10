import { useState } from "react";

function FizzBazzInput(){
    const[iterationNumber, setIterationNumber] = useState(10)
    const items =[]
    
    for(let i = 0; i < iterationNumber; i++) {
        let text = ''
        let color = ''

        if(i % 2 === 0 && i % 3 === 0) {
            text = 'Fizz Bazz';
            color = 'red'
        } else if(i % 2 === 0) {
            text = 'Fizz';
            color = 'orange'
        } else if(i % 3 === 0) {
            text = 'Bazz';
            color = 'purple'
        } else {
            text = i;
            color = 'green'
        }


        items.push(
            <li style={{color: color}} key={i}>
                {text}
            </li>
        )

    }

    const updateIterationNumber = (event) => {
        const newIterationNumber = parseInt(event.target.value)
        setIterationNumber(newIterationNumber)
    }
    
    
    return(
        <div>
            <h1>Task 2</h1>
            <input type = "number" value={iterationNumber} onChange = {updateIterationNumber} />
            <ul>
                {items}
            </ul>

        </div>
    )
}

export default FizzBazzInput;