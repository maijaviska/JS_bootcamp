import { Link } from "react-router-dom"
import getTopics from "../API/getTopics"

function Topics() {
    const topics = getTopics()

    const topicsList = topics.map((topic, index) => {
        return (
            <div key={index} className="col-4">
                <div className="card">
                    <img src={topic.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link to={`/articles`}>
                                {topic.title}
                            </Link>
                        </h5>
                        <p className="card-text">{topic.describtione}</p>

                    </div>

                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row mb-3 mt-3">
                {topicsList}

            </div>
        </div>
    )
}

export default Topics