import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Fruit</Link>
        <Form />
      </header>
    </div>
  );
}

export default App;
