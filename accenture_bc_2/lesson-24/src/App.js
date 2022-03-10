import { Route, Routes } from "react-router-dom";
import Article from "./Pages/Article";
import Articles from "./Pages/Articles";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Articles />}/>
        <Route path="/articles/:index" element={<Article />}/>
      </Routes>
    </div>
  );
}

export default App;
