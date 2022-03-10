import getFancyCars from "../Api/getFancyCars";

function FancyCars() {
    const cars = getFancyCars()
    const list = [];

    for (const i in cars) {
        const car = cars[i]
        list.push(
            <div key={i}>
                <div>
                    <em>{car.make}</em> - <strong>{car.model}</strong>
                </div>
                <div>
                    Color: <span style={{color:car.color}}>{car.color}</span>
                </div>
            </div>
        )
    }

    
    return (
        <div>
            <h1>Fancy cars</h1>
            <div>
                {list}
            </div>
           
        </div>
    )
}

export default FancyCars;