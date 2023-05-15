import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Case Button Clicked"+text);
    let NewText = text.toUpperCase();
    setText(NewText);
    props.showAlert("Text Converted to Upper Case", "success");
  };

  const handleLowClick = () => {
    // console.log("Upper Case Button Clicked"+text);
    let NewText = text.toLowerCase();
    setText(NewText);
    props.showAlert("Text Converted to Lower Case", "success");
  };

  const handleOnChange = (event) => {
    // console.log("Value Changed");
    setText(event.target.value);
  };

  const handleClearClick = (event) => {
    // console.log("Value Changed");
    let NewText = "";
    setText(NewText);
    props.showAlert("Text Clear", "success");
  };

  const handleCopyClick = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copy to Clipbord", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            placeholder="Enter Text to Convert"
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#2c3333" : "white",
              color: props.mode === "dark" ? "white" : "black",
              border: "2px solid"
            }}
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          type="button"
          onClick={handleUpClick}
          className="btn btn-primary mx-1 my-1"
        >
          Upper case
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={handleLowClick}
          className="btn btn-primary mx-1 my-1"
        >
          Lower case
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={handleClearClick}
          className="btn btn-primary mx-1 my-1"
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={handleCopyClick}
          className="btn btn-primary mx-1 my-1"
        >
          Copy Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <input
          className="form-control my-2"
          style={{
              backgroundColor: props.mode === "dark" ? "#2c3333" : "white",
              color: props.mode === "dark" ? "white" : "black",
              border: "2px solid"
            }}
          type="text"
          value={
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length +
            " Words & " +
            text.length +
            " Characters"
          }
          disabled
          readOnly
        />
        <input
          className="form-control my-2"
          style={{
              backgroundColor: props.mode === "dark" ? "#2c3333" : "white",
              color: props.mode === "dark" ? "white" : "black",
              border: "2px solid"
            }}
          type="text"
          value={
            0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length +
            " Minutes to Read"
          }
          disabled
          readOnly
        />
        <h2>
          Preview
          <textarea
            placeholder="Nothing to Preview!"
            className="form-control my-2"
            style={{
              backgroundColor: props.mode === "dark" ? "#2c3333" : "white",
              color: props.mode === "dark" ? "white" : "black",
              border: "2px solid"
            }}
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            disabled
            readOnly
          ></textarea>
        </h2>
      </div>
    </>
  );
}
