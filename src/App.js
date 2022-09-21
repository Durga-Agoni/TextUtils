
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React , { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);


  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);

  }

  const toggleMode = ()=>{
    if(mode==="light")
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'

      // setInterval(()=>{
      //   document.title = 'TextUtils is an amazing Mode'
      // },2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils now'
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
   <>
  {/* <Router> */}
<Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode} /> 
<Alert alert={alert}/>
<div className="container my-3">

<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
<About/>
        {/* <Routes> */}

        {/* /users ---> component 1
        /users/home --->? component 2
        if you're trying to render 2nd component it will retrieve 1st component so it is a  best practice to use exact for an exact match */}

          {/* <Route exact path="/about" element={<About/>}/>
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
          
          
         
        </Routes>
   */}
  
  
  </div>
  {/* </Router> */}
  

</>
  );
}

export default App;
