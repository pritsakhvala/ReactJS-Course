import logo from "./logo.svg";
import "./App.css";
import Count from "./Components/Count";
import ClickCounterTwo from "./Components/ClickCounterTwo";
import HoverCounterTwo from "./Components/HoverCounterTwo";
function App() {
  return (
    <div className="App">
      <Count>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Count>
      <Count>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Count>
    </div>
  );
}

export default App;
