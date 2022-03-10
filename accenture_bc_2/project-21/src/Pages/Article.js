import getCatImg from "../Api/getCatImg";
import catText from "../Api/catText";
import { useState } from "react";

function Article() {
    const [image, setImage] = useState('https://images.pexels.com/photos/7403298/pexels-photo-7403298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    const images = getCatImg();

    const imageElements = images.map((image, index) => {
        return (<div className="col-4" key={index} onMouseOver={() => setImage(image)}>
            <img src={image.image} className="w-100 mt-3"/>
        </div>)
    })
    
    

    return(
        <div className="container">
            <h1>Super amazing page</h1>
            <div className="row">
                <div className="col-md mt-3">
                    <div className="row">
                        <img src={image.image} className="w-100" alt="..." />
                    </div>
                    <div className="row d-flex p-2">
                       {imageElements}
                    </div>

                </div>
                <div className="col-md p-2">{catText.description}</div>
            </div>
            

        </div>
    )
}

export default Article;