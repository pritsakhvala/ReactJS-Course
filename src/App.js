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
import ConditionalRender from "./Components/ConditionalRender";
import NameList from "./Components/NameList";
import StyleSheets from "./Components/StyleSheets";
import InlineCss from "./Components/InlineCss";
import "./AppStyles.css";
import styles from "./AppStyles.module.css";
function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Counter />
      <Message />
      <Greet name="bruce">
        <p>Hello, Batman</p>
      </Greet>
      <Welcome name="clark" />
      <Hello name="Diana" /> 
      <FunctionClick />
      <Classclick />
      <Eventbind />
      <ParentComponent />
      <ConditionalRender /> */}
      {/* <NameList /> */}
      <StyleSheets primary={true} />
      <InlineCss />
    </div>
  );
}

export default App;
