import { Route, Routes } from "react-router-dom";
import Card from "./Pages/Card";
import Cards from "./Pages/Cards";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cards/:index" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
