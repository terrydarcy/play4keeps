import React from "react";
import "./Matches.css";

function Matches() {
  return (
    <div>
      <div id="main__matches">
        <div id="main__match" onClick={click}>
          <p id="center">1v1 quickscopes</p>
        </div>
        <div id="main__match" onClick={click}>
          <p id="center">1v1 shotguns</p>
        </div>
      </div>
    </div>
  );
}

function click() {
  console.log("test");
}

export default Matches;
