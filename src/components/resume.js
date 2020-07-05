import React from "react"
import "./resume.css"

import resumeSvg from "./../images/resume.svg"

const Resume = () => {
  return (
    <a
      href="https://drive.google.com/file/d/13vh4VPMfp5ASGZI4Y--lvgcQ9KwlB0go/view?usp=sharing"
      className="resume-text"
    >
      <img src={resumeSvg} className="resume" /> Resume
    </a>
  )
}

export default Resume
