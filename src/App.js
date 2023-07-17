import logo from "./logo.svg";
import "./App.css";
import Heading from "./Heading";

function Header() {
  return <h1>Hello World</h1>;
}
function App() {
  return (
    <div>
      <Heading />
      <Header />
    </div>
  );
}

export default App;
