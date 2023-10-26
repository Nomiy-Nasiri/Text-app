import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About"; // Import the About component
import Navbar from "./components/Navbar";
import Texty from "./components/texty";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#070721";
      showAlert("Dark mode has been Enabled", "warning");
      document.title = "texty - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "texty - Light Mode";
    }
  }

  return (
    <div className="main">
      <Router>
        <Navbar name="texty" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Texty showAlert={showAlert} heading="Insert your Text below to Analyze" mode={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
