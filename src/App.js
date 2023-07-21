import logo from "./logo.svg";
// import "./App.css";
import Heading from "./components2/Heading";
import Main from "./components2/Main";
import Sidebar from "./components2/Sidebar";
import Bag from "./components2/Bag";
import Apple from "./components2/Apples";
import Pearl from "./components2/Pearl";
function App(props) {
  return (
    <div className="flex flex-row">
      <Heading title="Hello from Heading" />
      <Main title="Hello from Main" />
      <Sidebar makhluk="Hello from Sidebar" />
      <Main title="Hello from Main" />
      <Bag children={<Apple color="yellow" number="5" />} />
      <Bag className="promo-section">
        <Apple color="red" number="10" />
        <Pearl color="green" number="15" />
      </Bag>
      <p className="promo-section">halo</p>
    </div>
  );
}

export default App;
