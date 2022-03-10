import { Link } from "react-router-dom"
import getCards from "../API/getCards"

function Cards() {
    const cards = getCards()

    const cardsList = cards.map((card, index) => {
        return (
            <div key={index} className="col">
                <div className="card">
                    <img src={card.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link to={`/cards/${index}`}>
                                {card.title}
                            </Link>
                        </h5>
                        <p className="card-text">{card.describtione}</p>

                    </div>

                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                {cardsList}

            </div>
        </div>
    )
}

export default Cards