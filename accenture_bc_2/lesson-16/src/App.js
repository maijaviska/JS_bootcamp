import Greeting from "./Components/Greetings";
import Number from "./Components/Number";

function App() {

  const meaningOfLife = 42;

  return (
    <div >
      <h2>Component 1</h2>
      <Greeting name="Johnny" />
      <Greeting name="Jane" />
      <Greeting name="Billy" />

      <h2>Component 2</h2>
      <Number number={4}/>
      <Number number={5}/>
      <Number number={49}/>
      <Number number={meaningOfLife}/>
    </div>
  );
}

export default App;
