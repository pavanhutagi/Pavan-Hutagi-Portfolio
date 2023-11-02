"use client";

import "./style.css";
import Typewriter from "react-ts-typewriter";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="text-container">
          <div className="text">
            <Typewriter
              text="I'm a Web Developer at IBM, specializing in UI/UX design and
            Frontend Development using Angular, React, NextJS, and more.
            I've led successful projects and have database skills in
            MongoDB and IBM DB2. I'm passionate about using my full-stack
            expertise for environmentally sustainable solutions, and my graphic
            design skills enhance visual appeal. My versatile skills and
            commitment to learning are assets in the dynamic web development
            sector."
              speed={5}
            />
          </div>
        </div>
        <div className="picture-container">
          <div className="picture">
            <img src="/images/me.jpeg" alt="Instagram" />
          </div>
        </div>
      </div>
    </>
  );
}
