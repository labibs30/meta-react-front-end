import logo from "./logo.svg";
import "./App.css";
import Heading from "./components2/Heading";
import Main from "./components2/Main";
import Sidebar from "./components2/Sidebar";
function App(props) {
  return (
    <div className="flex flex-row">
      <Heading title="Hello from Heading" />
      <Main title="Hello from Main" />
      <Sidebar makhluk="Hello from Sidebar" />
    </div>
  );
}

export default App;
