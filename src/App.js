import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import UserGreeting from "./components/UserGreeting";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";

function App() {
  return (
    <div className="App">
      <FocusInput />
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Greet name="Thabo" heroName="Sebenzian" /> */}
      {/* <Welcome name="Thabo" heroName="Sebenzian" /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
