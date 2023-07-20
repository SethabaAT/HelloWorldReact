import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Greet name="Thabo" heroName="Sebenzian" /> */}
      {/* <Welcome name="Thabo" heroName="Sebenzian" /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
