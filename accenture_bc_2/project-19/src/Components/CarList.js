import { useState } from "react"
import getCars from "../Api/getCars"

function CarList(){
    const[carname, setCarname] = useState('')

    const updateCarname = (event) => {
        setCarname(event.target.value)
    }
    
    const cars = getCars()
    const list = []

    for (const i in cars) {
        const car = cars[i]
        let color = 'black'
        if(car === carname) {
            color = 'red'
        }


        list.push(<li style={{color: color}} key={i}>
            {car}
        </li>)


    }

    return (
        <div className="container">
            <div>
                <h1>Task 4</h1>
                <ul>
                    {list}
                </ul>
                <input value={carname} onChange={updateCarname}/>
            </div>
        </div>
    )
}

export default CarList;