import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Wrapper from "../components/Wrapper"
import Banner from "../components/Banner"

const IndexPage = () => (
  <Layout fullWidth>
    <SEO title="Home" />
    <div style={{ marginBottom: "200px" }}>
      <Banner />
    </div>
    <Wrapper>
      <h2>Speakers</h2>
      <h2>Sponsors</h2>
      <p>
        I find, if you speak about anything for long enough,{" "}
        <strong>it always comes</strong> back to type.
      </p>
    </Wrapper>
  </Layout>
)

export default IndexPage
