import { Link } from "react-router-dom"
import getArticles from "../API/getArticles"

function Articles() {
    const articles = getArticles()

    const articlesList = articles.map((article, index) => {
        return (
        <div key={index}>
            <h2>
                <Link to={`/articles/${index}`}>
                    {article.title}
                </Link>
                </h2>
            <p>{article.description}</p>
            <hr />
        </div>
        )
    
    })

    
    return (
        <div>
            {articlesList}
        </div>
        )

}
export default Articles