import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React,{ useState } from 'react';

function App() {
  const[mode , setmode] = useState('light')
  const darkmode = ()=>{
    setmode('dark')
    document.body.style.backgroundColor = "rgb(1,6,23)"
    document.body.style.color = "white"
    showAlert("Enabled Dark Mode","success")
  }
  const lightmode = ()=>{
    setmode('light')
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    showAlert("Enabled Light Mode","primary")
  }
  const greentheme = ()=>{
    if(mode === "light"){
      setmode('success-subtle')
    document.body.style.backgroundColor = "#bdf0bb"
    document.body.style.color = "green"
    showAlert("Enabled Ligh+Green Theme","success")
    } 
    else if(mode === "dark"){
      setmode('dark')
      document.body.style.backgroundColor = "#043b0c"
      document.body.style.color = "white"
      showAlert("Enabled Dark+Green Theme","success")
    }
    else{
      setmode('success-subtle')
    document.body.style.backgroundColor = "#bdf0bb"
    document.body.style.color = "green"
    showAlert("Enabled Ligh+Green Theme","success")
    }
  }
  const redtheme = ()=>{
    if(mode === "light"){
      setmode('danger-subtle')
    document.body.style.backgroundColor = "#fab1b1"
    document.body.style.color = "black"
    showAlert("Enabled Red Theme","danger")
    }
    else if(mode === "dark"){
      setmode('dark')
      document.body.style.backgroundColor = "#360202"
      document.body.style.color = "white"
      showAlert("Enabled Dark+Red Theme","danger")
    }
    else{
      setmode('danger-subtle')
      document.body.style.backgroundColor = "#fab1b1"
      document.body.style.color = "black"
      showAlert("Enabled Red Theme","danger")
    }
  }
  const yellowtheme = ()=>{
    if(mode === "light"){
      setmode('warning-subtle')
    document.body.style.backgroundColor = "#f0df73"
    document.body.style.color = "black"
    showAlert("Enabled Yellow Theme","warning")
    }
    else if(mode === "dark"){
      setmode('dark')
      document.body.style.backgroundColor = "#7a6904"
      document.body.style.color = "white"
      showAlert("Enabled Dark+Yellow Theme","warning")
    }
    else{
      setmode('warning-subtle')
    document.body.style.backgroundColor = "#f0df73"
    document.body.style.color = "black"
    showAlert("Enabled Yellow Theme","warning")
    }
  }
  const[alert,setAlert] = useState(null)
    const showAlert = (message , type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
  return (
    <>
    <Navbar mode={mode} usemode1={darkmode} usemode2={lightmode} green={greentheme} redd={redtheme} yell={yellowtheme}/>
    <Alert alert={alert}/>
    <div className="container m-auto my-2 ">
    <Textarea show = {showAlert}/>
    </div>
    </>
  );
}

export default App;
