import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>
      Hi I'm Corey - A backend software engineer who likes to travel and
      learn/experience new things
    </p>
  </Layout>
)

export default IndexPage
