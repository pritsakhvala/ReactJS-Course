import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero";
import ErrorBoundary from "./Components/ErrorBoundary";
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
