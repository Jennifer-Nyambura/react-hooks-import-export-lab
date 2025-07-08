import React from "react";
import { image } from "../data/user"; // 👈 import image

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is the about section.</p>
      <img src={image} alt="Profile" /> {/* 👈 display image */}
    </div>
  );
}

export default About; // 👈 default export
