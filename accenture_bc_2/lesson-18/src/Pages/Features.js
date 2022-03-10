import Product from "../Components/Product";

function Features() {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1>This is Features page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Product title="Product 1" description="Foo 111" />
                </div>
                <div className="col">
                    <Product title="Product 2" description="Foo 222" />
                </div>
                <div className="col">
                    <Product title="Product 3" description="Foo 333" />
                </div>
            </div>
        </div>

    )
}

export default Features;