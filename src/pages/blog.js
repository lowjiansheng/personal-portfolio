import React from "react"
import { graphql, Link } from "gatsby"
import BlogLayout from "../components/blogLayout"
import { rhythm } from "../utils/typography"
import { Card } from "react-bootstrap"

import "./blog.css"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  const blogTitle = data.site.siteMetadata.blogtitle
  const children = <Link to="/">Back to main</Link>

  return (
    <BlogLayout location={location} title={blogTitle}>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Card className="blog-card">
            <Card.Body>
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            </Card.Body>
          </Card>
        )
      })}
    </BlogLayout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        blogtitle
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
