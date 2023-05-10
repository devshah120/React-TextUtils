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

  const [text, setText] = useState("Enter Text Here For Conversion");
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
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
          className="btn btn-primary"
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          onClick={handleLowClick}
          className="btn btn-primary mx-1"
        >
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <input
          className="form-control my-2"
          type="text"
          value={text.split(" ").length+" Words & "+text.length+" Characters"}
          disabled
          readOnly
        />
        <input
          className="form-control my-2"
          type="text"
          value={0.08*text.split(" ").length+" Minutes to Read"}
          disabled
          readOnly
        />
        <h2>
          Preview
          <textarea
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
