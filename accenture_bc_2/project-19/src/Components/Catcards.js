import getCats from "../Api/getCats";

function Catcards() {
    const cats = getCats()
    const list =[];

    for(const i in cats) {
        const cat = cats[i]
        list.push(
            <div key={i}>
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={cat.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{cat.title}</h5>
                            <p className="card-text">{cat.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Task 1</h1>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {list}
            </div>
        </div>
    )
}

export default Catcards;