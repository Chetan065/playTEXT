import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landing from './components/Landing'
import Usecase from './components/Usecase';

function App() {
  const [mode, setmode] = useState('light')
  const darkmode = () => {
    setmode('dark')
    document.body.style.backgroundColor = "rgb(1,6,23)"
    document.body.style.color = "white"
    showAlert("Enabled Dark Mode", "success")
    document.title = "pT-Home-Dark"
  }
  const lightmode = () => {
    setmode('light')
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    showAlert("Enabled Light Mode", "primary")
    document.title = "pT-Home-Light"
  }
  const greentheme = () => {
    if (mode === "light") {
      setmode('success-subtle')
      document.body.style.backgroundColor = "#bdf0bb"
      document.body.style.color = "green"
      showAlert("Enabled Ligh+Green Theme", "success")
      document.title = "pT-Home-LGreen"
    }
    else if (mode === "dark") {
      setmode('dark')
      document.body.style.backgroundColor = "#043b0c"
      document.body.style.color = "white"
      showAlert("Enabled Dark+Green Theme", "success")
      document.title = "pT-Home-DGreen"
    }
    else {
      setmode('success-subtle')
      document.body.style.backgroundColor = "#bdf0bb"
      document.body.style.color = "green"
      showAlert("Enabled Ligh+Green Theme", "success")
      document.title = "pT-Home-LGreen"
    }
  }
  const redtheme = () => {
    if (mode === "light") {
      setmode('danger-subtle')
      document.body.style.backgroundColor = "#fab1b1"
      document.body.style.color = "black"
      showAlert("Enabled Red Theme", "danger")
      document.title = "pT-Home-LRed"
    }
    else if (mode === "dark") {
      setmode('dark')
      document.body.style.backgroundColor = "#360202"
      document.body.style.color = "white"
      showAlert("Enabled Dark+Red Theme", "danger")
      document.title = "pT-Home-DRed"
    }
    else {
      setmode('danger-subtle')
      document.body.style.backgroundColor = "#fab1b1"
      document.body.style.color = "black"
      showAlert("Enabled Red Theme", "danger")
      document.title = "pT-Home-LRed"
    }
  }
  const yellowtheme = () => {
    if (mode === "light") {
      setmode('warning-subtle')
      document.body.style.backgroundColor = "#f0df73"
      document.body.style.color = "black"
      showAlert("Enabled Yellow Theme", "warning")
      document.title = "pT-Home-LYellow"
    }
    else if (mode === "dark") {
      setmode('dark')
      document.body.style.backgroundColor = "#7a6904"
      document.body.style.color = "white"
      showAlert("Enabled Dark+Yellow Theme", "warning")
      document.title = "pT-Home-DYellow"
    }
    else {
      setmode('warning-subtle')
      document.body.style.backgroundColor = "#f0df73"
      document.body.style.color = "black"
      showAlert("Enabled Yellow Theme", "warning")
      document.title = "pT-Home-LYellow"
    }
  }
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
    document.title = "pT-Home-Alert"
  }
  return (
     <>
    <Router>
    <Navbar mode={mode} usemode1={darkmode} usemode2={lightmode} green={greentheme} redd={redtheme} yell={yellowtheme} />
      <Landing/>
      <Routes>
        <Route path="/home" element={<>
          <Alert alert={alert} />
          <div className="container m-auto my-2 ">
            <Textarea show={showAlert} />
          </div></>} />
        <Route path="/uses" element={<>
          <Alert alert={alert} />
          <Usecase /></>}>
        </Route>
        
      </Routes>

    </Router>
    </>
  );
}

export default App;
