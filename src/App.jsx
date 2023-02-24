import "./App.css";
import { useState } from "react";
import Img from "./Img.png";
function App() {
  const [num, setNum] = useState(0);

  function ResetHandler() {
    setNum((Prenum) => (Prenum = 0));
  }

  function IncreaseHandler() {
    setNum((befor) => befor + 1);
  }

  function DecreaseHandler() {
    setNum((befor) => befor - 1);
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
        <hr />
        <div className="Img">
          <img id="Img" src={Img} alt="Image" />
        </div>
        <div className="btn">
          <h1>{num}</h1>
          <button onClick={IncreaseHandler}>Increase</button>
          <button onClick={ResetHandler}>Reset</button>
          <button onClick={DecreaseHandler}>Deacrease</button>
        </div>
        <div className="row">
          <div className="col-md-5">
            <h1>Mustafa John</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae animi inventore suscipit adipisci. Dolor ducimus
              facilis, quod dolorum natus porro vel repellat eaque? Eum voluptas
              fugit, aliquid unde blanditiis saepe!
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
