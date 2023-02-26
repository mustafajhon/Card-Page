import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("Home Page");

  function Console() {
    let name = document.getElementById("name").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;

    console.log("Hello", name, lname, "your email Adress is: ", email);
  }

  return (
    <>
      <div className="home">
        <h1 className="head">Hello this is {name} </h1>
        <div className="form">
          <label htmlFor="text">What is you Name</label>
          <input id="name" type="text" placeholder="Type Your Name" />
          <br /> <br />
          <label htmlFor="text">What is your LastName</label>
          <input id="lname" type="text" placeholder="Type Your Name" />
          <br />
          <br />
          <label htmlFor="text">What is your Email Adress</label>
          <input id="email" type="text" placeholder="Type Your Name" />
          <br />
          <button onClick={Console}>Submit</button>
        </div>
        <h1 className="mew">Mew Mew</h1>
      </div>
    </>
  );
}

export default Home;
