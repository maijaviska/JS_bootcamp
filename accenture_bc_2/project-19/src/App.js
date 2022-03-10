import Buttons from "./Components/Buttons";
import CarList from "./Components/CarList";
// import CarListMany from "./Components/CarListMany";
import Catcards from "./Components/Catcards";
import FizzBazz from "./Components/FizzBazz";
import FizzBazzInput from "./Components/FizzBazzInput";

function App() {
  return (
    <div>
      <Catcards />
      <FizzBazz />
      <FizzBazzInput />
      <CarList />
      {/* <CarListMany /> */}
      <Buttons />
    </div>
  );
}

export default App;
