import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const [Text,setText]= useState("");
    const [email,setEmail]= useState("");

    const emailExtracter = ()=>{
        let arr = Text.split(" ");
        let newa = arr.filter((value,i)=>{
            if(value.includes("@")){
                return " "+value+" ";
            }
            return " ";
        });
        setEmail(newa);
    }







    const handleUpClick = ()=>{
        let newText = Text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = Text.toLocaleLowerCase();
        setText(newText);
    }
    const handleClear = ()=>{
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick} >convert to lowercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClear} >clear</button>
        <button className="btn btn-primary my-2 mx-2" onClick={emailExtracter} >find emails</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{Text.split(" ").length} words, {Text.length} characters</p>
        <p>{0.008*Text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{Text}</p>
        <h3>Email present</h3>
        <p>{email}</p>
    </div>
    </>
  )
}
