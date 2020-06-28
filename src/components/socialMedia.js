import React from "react"
import "./socialMedia.css"

import githubSvg from "./../images/github.svg"
import mailSvg from "./../images/mail.svg"
import mediumSvg from "./../images/medium.svg"
import twitterSvg from "./../images/twitter.svg"
import linkedInSvg from "./../images/linked-in.svg"

const SocialMedia = () => {
  return (
    <div>
      <a href="https://github.com/lowjiansheng">
        <img src={githubSvg} className="social-media" />
      </a>
      <a href="mailto:lowjiansheng@hotmail.sg">
        <img src={mailSvg} className="social-media" />
      </a>
      <a href="https://medium.com/@lowjiansheng">
        <img src={mediumSvg} className="social-media" />
      </a>
      <a href="https://twitter.com/lowjiansheng">
        <img src={twitterSvg} className="social-media" />
      </a>
      <a href="https://www.linkedin.com/in/jian-sheng-low-310b04131/">
        <img src={linkedInSvg} className="social-media" />
      </a>
    </div>
  )
}

export default SocialMedia
