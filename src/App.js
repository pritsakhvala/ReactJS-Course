import logo from "./logo.svg";
import "./App.css";
import ClickCount from "./Components/ClickCount";
import HoverCount from "./Components/HoverCount";
function App() {
  return (
    <div className="App">
      <ClickCount />
      <HoverCount />
    </div>
  );
}

export default App;
