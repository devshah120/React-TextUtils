import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#2C3333';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <>
      <Navbar title="WriteHelper" mode={mode} toogleMode={toogleMode}></Navbar>
      <div className="container">
        <TextForm heading="Enter your text here to analyze" mode={mode}></TextForm>
      </div>
    </>
  );
}

export default App;
