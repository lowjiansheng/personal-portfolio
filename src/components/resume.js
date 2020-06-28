import React from "react"
import "./resume.css"

import resumeSvg from "./../images/resume.svg"

const Resume = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1MXMvTbMt9iZFpVQXPZsPtENw9Ax9L3Nj/view?usp=sharing"
      className="resume-text"
    >
      <img src={resumeSvg} className="resume" /> Resume
    </a>
  )
}

export default Resume
