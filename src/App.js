import logo from "./logo.svg";
import "./App.css";

function Heading() {
  let title = "This is some heading text";
  return <h1>{title}</h1>;
}
function Header() {
  return <h1>Hello World</h1>;
}
function App() {
  return <Header />;
}

export default App;
