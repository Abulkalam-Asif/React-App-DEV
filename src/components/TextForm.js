import React, {useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    const upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Converted to Uppercase.", "success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const emailPara = document.getElementById("emailPara");
  const emailExtractor = () => {
    let words = text.split(' ');
    words.forEach(word => {
      let format = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
      if(word.match(format))
      emailPara.innerText += word + "\n"
    });
    props.showAlert("Email Extracted.", "success");
  }
  const copyText = ()=> {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard.", "success");
  }
  
  const [text, setText] = useState('');
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="4" value={text} onChange={handleOnChange} style={{backgroundColor: (props.mode === "light"? "#fff" : "#333")}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Covert to Uppercase</button>
        <button className="btn btn-primary" onClick={emailExtractor}>Extract Email</button>
        <button className="btn btn-primary" onClick={copyText}><i className="bi bi-clipboard"></i></button>
      </div>
      <div className="container mt-4">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} letters in your text.</p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>
        <h1>Preview Email</h1>
        <p id="emailPara"></p>
      </div>
    </>
  )
}