import React from "react";
import "./Footer.css";
// import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <p className="footer-text" >
          Made With <span role="img">❤️</span> By {props.name}
        </p>
    </div>
  );
}