import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = Text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = Text.toLocaleLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [Text,setText]= useState("");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >convert to lowercase</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{Text.split(" ").length} words, {Text.length} characters</p>
        <p>{0.008*Text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{Text}</p>
    </div>
    </>
  )
}
