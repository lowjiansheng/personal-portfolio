import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"

import SEO from "../components/seo"
import ProfileImage from "../components/profileImage"
import SocialMedia from "../components/socialMedia"
import { Link } from "gatsby"

import "./index.css"

const styles = {
  container: {
    height: "100vh",
  },
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Low Jian Sheng" />
      <div className="container d-flex" style={styles.container}>
        <div className="col align-self-center">
          <div className="row justify-content-center">
            <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
              <ProfileImage />
            </div>
          </div>
          <div className="row justify-content-center">
            <h1>Low Jian Sheng</h1>
          </div>
          <div className="row justify-content-center">
            <p>Software Engineer in Singapore</p>
          </div>
          <div className="row justify-content-center">
            <Link to="/blog" style={{ boxShadow: `none`, color: `black` }}>
              <div className="blog-link">Occasionally I write here</div>
            </Link>
          </div>
          <div className="row justify-content-center">
            <SocialMedia />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
