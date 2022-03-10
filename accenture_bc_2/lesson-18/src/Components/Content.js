import { Route, Routes } from "react-router-dom";
import Features from "../Pages/Features";
import Home from "../Pages/Home";

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/features" element={<Features />}/>
            </Routes>
        </div>
    )
}

export default Content;