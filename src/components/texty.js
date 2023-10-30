import { useState } from "react";
import React from "react";
export default function Texty(props) {
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (text !== newText) {
      props.showAlert("converted to upper case", "success");
    }else{
      props.showAlert("your text is up to Date", "warning")
    }
  };
  const handleLowerCase = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    if (text !== newText) {
      props.showAlert("converted to lower case", "success");
    }else{
      props.showAlert("Please enter your text!", "primary")
    }
    // props.showAlert( {message: "text has been convert to lowercase",type:"primary" })
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
    if (text) {
      props.showAlert("text has been Cleared", "success");
    }else{
      props.showAlert("no text was inserted!", "success")

    }
  };
  // const handleExtraSpaces = () => {
  //   let newtext = text.split(/[ ]+/);
  //   setText(newtext.join(" "));
  //   if(text){
  //   props.showAlert("Removed extra spaces" , "success")
  //   }
  // };
  const handleExtraSpaces = () => {
    // Split the text by one or more spaces and then join it with a single space
    let newtext = text.split(/\s+/).join(" ");

    // Check if extra spaces were removed
    if (newtext !== text) {
      setText(newtext);
      props.showAlert("Removed extra spaces", "success");
    }else{
      props.showAlert("your text is upto date", "success");

    }
  };

  const [text, setText] = useState("");
  return (
    <div
      className="main"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "transparent" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <button
          className="btn btn-outline-primary mx-2 my-1"
          onClick={handleLowerCase}
        >
          convert text to Lowercase
        </button>
        <button
          className="btn btn-outline-primary my-1 my-1"
          onClick={handleUpperCase}
        >
          convert text to Upercase
        </button>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleClear}
        >
          clear text
        </button>
        <button
          className="btn btn-outline-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          remove extra space
        </button>
        {/* <button
          className="btn btn-outline-primary mt-2 mx-2"
          onClick={handleCapitalize}
        >
          Captilize the text
        </button> */}
      </div>
      <div className="container my-3">
        <h4>Your text is about</h4>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}{" "}
        </p>

        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "your text will be shown here"}</p>
      </div>
    </div>
  );
}
