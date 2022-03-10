import { Link, useParams } from "react-router-dom"
import getCardByIndex from "../API/getCardByIndex"

function Card() {
    const {index} = useParams()
    const card = getCardByIndex(index)


    return (
        <div className="container">
            <div className="row">
                <h5>
                    <Link to="/">Back</Link>
                </h5>
                <div className="card">
                    <img src={card.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.describtione}</p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Card