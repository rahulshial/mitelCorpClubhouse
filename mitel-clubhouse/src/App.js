import React from "react";
import Debug from "./components/Debug";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Debug />
      <h1>MITEL CORPORATE CLUBHOUSE</h1>
    </div>
  );
}

export default App;
