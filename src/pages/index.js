import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>
      I find, if you speak about anything for long enough,{" "}
      <strong>it always comes</strong> back to type.
    </p>
    <div style={{ marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
