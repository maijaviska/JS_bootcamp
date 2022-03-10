import { Route, Routes } from "react-router-dom";
import Article from "../Pages/Article";
import Home from "../Pages/Home";
import Tags from "../Pages/Tags";

function Content(){
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/article" element={<Article/>}/>
                <Route path="/tags" element={<Tags/>}/>
            </Routes>
        </div>
    )
}

export default Content;