import React, { useState } from 'react'


export default function TextForm(props) {
 
  const [text, setText] = useState(" ");

  //on click the text present in text area box will be converted to uppercase and sets text
  const handleUpClick = () =>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase !","success");
  }

  //on click the text present in text area box will be converted to lowercase and sets text
  const handleLoClick = () =>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase !","success");
  }

  //on click the text present in text area box will be disappeared and sets text
  const handleClearClick = () =>{
    let newText=' ';
    setText(newText)
    props.showAlert("Text Cleared !","success");
  }

  //on change in text area the text present in text area box will be stored in setText(event target value)
  const handleOnChange = (event) =>{
    setText(event.target.value)
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard !","success");

  }

  const handleExtraSpaces = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces !","success");
  }


  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Remove Extra spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p> {text.split(" ").length}words and {text.length}characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
