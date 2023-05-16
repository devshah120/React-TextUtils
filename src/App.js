import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  // const [alert, setAlert] = useState(null);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2C3333";
      // showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Dark mode has been enabled", "success");
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
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm heading="Enter your text here to analyze" mode={mode}  showAlert={showAlert}/>
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
        <Footer mode={mode} name="Dev Shah"/>
      </BrowserRouter>
    </>
  );
}

export default App;
