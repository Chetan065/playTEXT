import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React,{ useState } from 'react';

function App() {
  const[mode , setmode] = useState('dark')
  const darkmode = ()=>{
    setmode('dark')
    document.body.style.backgroundColor = "rgb(1,6,23)"
    document.body.style.color = "white"
  }
  const lightmode = ()=>{
    setmode('light')
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
  }
  return (
    <>
    <Navbar mode={mode} usemode1={darkmode} usemode2={lightmode}/>
    <div className="container m-auto my-2 ">
    <Textarea/>
    </div>
    </>
  );
}

export default App;
