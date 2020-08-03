import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const BlogLayout = ({ location, title, children }) => {
  const rootPath = `/blog`
  let header
  let linkMain
  console.log(location.pathname)
  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.0),
          marginBottom: rhythm(1.0),
          marginTop: 0,
          textAlign: `center`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/blog`}
        >
          {title}
        </Link>
      </h1>
    )
    linkMain = (
      <Link to="/" style={{ color: `black` }}>
        ← Back to main
      </Link>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/blog`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {linkMain}
      <header>{header}</header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default BlogLayout
