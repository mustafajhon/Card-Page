import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  function Clicker() {
    setNum((Prenum) => Prenum + 1);
  }

  function IncreaseHandler() {
    setCount((befor) => befor + 1);
  }

  function DecreaseHandler() {
    setCount((befor) => befor - 1);
  }
  return (
    <>
      <header>
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Helpe</a>
          </li>
        </ul>
      </header>
      <div className="container">
        <h2>JavaScript</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        </p>
      </div>
    </>
  );
}

export default App;
