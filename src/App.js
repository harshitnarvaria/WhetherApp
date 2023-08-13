import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          Uploaded at GitHub
        </a>{" "}
        | Developed by{" "}
        <a target="blank" href="https://www.gauravghai.dev/">
            Harshit Narvaria
        </a>{" "}
        | Department-{" "}
        <a target="blank" href="https://abes.ac.in/">
          CSE(ABESEC)
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
