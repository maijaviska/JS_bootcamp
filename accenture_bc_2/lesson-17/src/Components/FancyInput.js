import { useState } from "react"

function FancyInput() {
    const [name, setName] = useState('John')

    const updateName = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <h2>Hello, your name is: {name}</h2>
            <input value={name} onChange={updateName}/>
        </div>
    )

}

export default FancyInput;