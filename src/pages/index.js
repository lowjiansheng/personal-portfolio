import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"

import SEO from "../components/seo"
import ProfileImage from "../components/profileImage"
import SocialMedia from "../components/socialMedia"
import Resume from "./../components/resume"
import About from "../components/about"

const styles = {
  container: {
    height: "100vh",
  },
}

const IndexPage = () => (
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
          <Resume />
        </div>
        <div className="row justify-content-center">
          <SocialMedia />
        </div>
        <div className="row justify-content-center">
          <About />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
