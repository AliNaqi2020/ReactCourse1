import React, { useState } from "react";

export default function TextForm(Props) {
  const handleUpEvent = () => {
    // console.log("Clicked" + text);
    let newText =text.toUpperCase();
    setText(newText);
  };

  const handleLoEvent = () => {
    // console.log("Clicked" + text);
    let newText =text.toLowerCase();
    setText(newText);
  };
  const handleClearEvent = () => {
    // console.log("Clicked" + text);
    let newText ='';
    setText(newText);
  };
  const  handleCopy = () => {
var text = document.getElementById('myBox');
text.select();
text.setSelectionRange(0,99999);
navigator.clipboard.writeText(text.value);
  
    let newText ='';
    setText(newText);
  };
 
  const handleOnChange = () => {
    // console.log("On Change");
    // eslint-disable-next-line no-restricted-globals
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  // text = "Changinig text with Wrong Way"  //This is not Valid In react to Change The text or any Thing We Want to update
  //setText = "Changinig text with right Way"

  return (
    <>
    <div className="container" style={{color:Props.mode === 'light'? 'black' : 'white'}} >
      <div className="mb-3">
        <label for="myBox" class="form-label">
          <h1>{Props.heading} </h1>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:Props.mode === 'light'? 'light':'#4f5495',color:Props.mode === 'light'? 'black' : 'white'} }
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mb-3" onClick={handleUpEvent}>
        Convert To upperCase
      </button>
      <button className="btn btn-primary mb-3 mx-1" onClick={handleLoEvent}>
        Convert To LowerCase
      </button>
      <button className="btn btn-secondary mb-3 mx-1" onClick={handleClearEvent}>
        Clear Text
      </button>
      <button className="btn btn-secondary mb-3 mx-1" onClick={handleCopy}>
        Copy Text
      </button>
    </div>
    <div className="container my-3" style={{color:Props.mode === 'dark'? 'white' : 'black'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length}word and {text.length}char</p>
      <p>{0.08 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
