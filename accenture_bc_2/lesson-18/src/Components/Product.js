function Product(props) {
    const title = props.title;
    const description = props.description;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )

}

export default Product;