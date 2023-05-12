import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Case Button Clicked"+text);
    let NewText = text.toUpperCase();
    setText(NewText);
  };

  const handleLowClick = () => {
    // console.log("Upper Case Button Clicked"+text);
    let NewText = text.toLowerCase();
    setText(NewText);
  };

  const handleOnChange = (event) => {
    // console.log("Value Changed");
    setText(event.target.value);
  };

  const handleClearClick = (event) => {
    // console.log("Value Changed");
    let NewText = "";
    setText(NewText);
  };

  const handleCopyClick = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
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
            id="exampleFormControlTextarea1"
            rows="7"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button
          type="button"
          onClick={handleUpClick}
          className="btn btn-primary mx-1"
        >
          Upper case
        </button>
        <button
          type="button"
          onClick={handleLowClick}
          className="btn btn-primary mx-1"
        >
          Lower case
        </button>
        <button
          type="button"
          onClick={handleClearClick}
          className="btn btn-primary mx-1"
        >
          Clear Text
        </button>
        <button
          type="button"
          onClick={handleCopyClick}
          className="btn btn-primary mx-1"
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
          type="text"
          value={
            text === ""
              ? "0 Words & 0 Characters"
              : text.split(" ").length +
                " Words & " +
                text.length +
                " Characters"
          }
          disabled
          readOnly
        />
        <input
          className="form-control my-2"
          type="text"
          value={
            text === ""
              ? "0 Minutes to Read"
              : 0.08 * text.split(" ").length + " Minutes to Read"
          }
          disabled
          readOnly
        />
        <h2>
          Preview
          <textarea
            placeholder="Enter Text to Preview"
            className="form-control my-2"
            id="exampleFormControlTextarea1"
            rows="4"
            value={text}
            disabled
            readOnly
          ></textarea>
        </h2>
      </div>
    </>
  );
}
