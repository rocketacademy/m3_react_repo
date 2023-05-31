import logo from "./logo.svg";
import "./App.css";
import Fruit from "./Fruit";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/form">Form</Link>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        <Fruit />
      </header>
    </div>
  );
}

export default App;
