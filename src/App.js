import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#444";
      document.body.style.color = "#fff";
      showAlert("Dark mode has been enabled.", "success");
      document.title = "TextUtlis - Dark Mode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      showAlert("Light mode has been enabled.", "success");
      document.title = "TextUtlis - HOME"
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter text to change to Uppercase" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;