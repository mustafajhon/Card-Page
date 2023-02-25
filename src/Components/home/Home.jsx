import React, { useState } from "react";

function Home(props) {
  const str = "Home";
  return (
    <>
      <div className="home">
        <h1>Hello this is {str} page</h1>
        <button onClick={() => console.log("You Clicked Button")}>
          {props.button}
        </button>
      </div>
    </>
  );
}

export default Home;
