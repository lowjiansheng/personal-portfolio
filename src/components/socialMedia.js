import React from "react"
import "./socialMedia.css"

import githubSvg from "./../images/github.svg"
import mailSvg from "./../images/mail.svg"
import mediumSvg from "./../images/medium.svg"
import twitterSvg from "./../images/twitter.svg"
import linkedInSvg from "./../images/linked-in.svg"
import Resume from "./../components/resume"

import { OutboundLink } from "gatsby-plugin-google-analytics"

const SocialMedia = () => {
  return (
    <div>
      <Resume />
      <OutboundLink
        href="https://github.com/lowjiansheng"
        style={{ boxShadow: `none` }}
      >
        <img src={githubSvg} className="social-media" title="Github" />
      </OutboundLink>
      <OutboundLink
        href="mailto:lowjiansheng94@gmail.com"
        style={{ boxShadow: `none` }}
      >
        <img src={mailSvg} className="social-media" title="Email" />
      </OutboundLink>
      <OutboundLink
        href="https://medium.com/@lowjiansheng"
        style={{ boxShadow: `none` }}
      >
        <img src={mediumSvg} className="social-media" title="Medium" />
      </OutboundLink>
      <OutboundLink
        href="https://twitter.com/lowjiansheng"
        style={{ boxShadow: `none` }}
      >
        <img src={twitterSvg} className="social-media" title="Twitter" />
      </OutboundLink>
      <OutboundLink
        href="https://www.linkedin.com/in/jian-sheng-low-310b04131/"
        style={{ boxShadow: `none` }}
      >
        <img src={linkedInSvg} className="social-media" title="LinkedIn" />
      </OutboundLink>
    </div>
  )
}

export default SocialMedia
