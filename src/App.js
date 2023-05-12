import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2C3333";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="WriteHelper"
          mode={mode}
          toogleMode={toogleMode}
        ></Navbar>
        <Routes>
          <Route path="/" element={<TextForm heading="Enter your text here to analyze"
                mode={mode} />} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
