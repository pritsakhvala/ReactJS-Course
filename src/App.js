import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import Classclick from "./Components/Classclick";
import Eventbind from "./Components/Eventbind";
import ParentComponent from "./Components/ParentComponent";
function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Message />
      <Greet name="bruce">
        <p>Hello, Batman</p>
      </Greet>
      <Welcome name="clark" />
      <Hello name="Diana" /> */}
      {/* <FunctionClick />
      <Classclick />
      <Eventbind /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
