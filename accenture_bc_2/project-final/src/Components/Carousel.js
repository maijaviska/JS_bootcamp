function Carousel() {
    return (
        <div className="container-fluid">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" className="d-block w-100 c-image" alt="..." />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>The Purrfect Coffee</h1>
                                <p>Our coffee is fresh, local, and absolutely delicious.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 c-image" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 c-image" alt="..."/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>The Purrfect Beans</h1>
                                <p>Raw coffee beans are shipped from all over the world and into the roasters - meticulously monitored, roasted, packaged, and delivered directly to our barista's to give the freshest tasting coffee possible.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 c-image" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/7974756/pexels-photo-7974756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 c-image" alt="..."/>
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>The Purrfect Idea</h1>
                                <p>It's simple. We love coffee and kitties.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;