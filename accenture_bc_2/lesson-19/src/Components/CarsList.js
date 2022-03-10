import getCars from "../Api/getCars";

function CarsList() {
    const cars = getCars()
    const list = [];
    for (const i in cars) {
        const car = cars[i]
        list.push(<li key={i}>
            {car}
            </li>)
    }
    

    return (
        <div>
            <h1>Simple cars</h1>
            <ul>
                {list}
            </ul>

        </div>
    )
}

export default CarsList;