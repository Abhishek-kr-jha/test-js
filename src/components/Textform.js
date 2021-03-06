import React, {useState, newText} from 'react'

export default function TextForm(props) {
    const handleUpClick =() =>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =() =>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(newText)
    }
    const handleClearClick = (event)=>{
        let newText = '';
        setText(newText)
    }
    const [text, setText] = useState('Enter text here');

    return (
        <>
    <div className = "Conatiner">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="8  "></textarea>
        </div>
        <button className="btn primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my -3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} charecters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

