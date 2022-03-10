import { useState } from "react"
import getCars from "../Api/getCars"

function CarListMany(){
    const[carname, setCarname] = useState()

    const updateCarname = (event) => {
        setCarname(event.target.value)
    }
    
    const cars = getCars()
    const list = []

    const splitCarname = carname.split(' ')


    for (const i in cars) {
        const car = cars[i]
        let color = ''

        if(splitCarname.includes(car)) {
            color = 'red'
        } else color = 'black'


        list.push(<li style={{color: color}} key={i}>
            {car}
        </li>)


    }

    return (
        <div className="container">
            <div>
                <h1>Task 5</h1>
                <ul>
                    {list}
                </ul>
                <input value={carname} onChange={updateCarname}/>
            </div>
        </div>
    )
}

export default CarListMany;