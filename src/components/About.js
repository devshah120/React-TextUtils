import React from "react";

export default function About(props) {
  return (
    <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h1>Frequently Asked Questions (FAQ)</h1>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is WriteHelper?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              WriteHelper is a versatile text utility application designed to
              assist you in various aspects of writing and text management.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Can I use WriteHelper across different devices?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Yes,</strong>
              WriteHelper supports cross-platform usage, allowing you to
              seamlessly access your documents and settings on multiple devices,
              such as computers, smartphones, and tablets.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Does WriteHelper have a distraction-free writing mode?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Yes,</strong> WriteHelper includes a distraction-free
              writing mode that minimizes distractions by providing a clean,
              minimalist interface, allowing you to focus solely on your
              writing.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Does Halper support bulk conversion of multiple lines or
              paragraphs?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Certainly! Halper is equipped to handle bulk conversion,
              </strong>{" "}
              allowing you to convert multiple lines or paragraphs to uppercase
              or lowercase simultaneously, saving you time and effort.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              How do I copy the converted text in Halper?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Halper simplifies the process of copying text.</strong>{" "}
              Once you have converted your desired text to uppercase or
              lowercase, a single click of the "Copy" button automatically
              copies the converted text to your clipboard for easy pasting
              elsewhere.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Does Halper store or save my converted or copied text?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>No, </strong> Halper does not store or save any of your
              converted or copied text. Your privacy and data security are of
              utmost importance to us, and we prioritize protecting your
              information.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
