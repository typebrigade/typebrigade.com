import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"
import Wrapper from "../components/Wrapper"

const IndexPage = () => (
  <Layout fullWidth>
    <SEO title="Home" />
    <div style={{ background: "#C43E80", minHeight: "50vh", width: "100%" }}>
      <Wrapper>
        <h1>Hi people</h1>
      </Wrapper>
      <Image />
    </div>
    <Wrapper>
      <p>
        I find, if you speak about anything for long enough,{" "}
        <strong>it always comes</strong> back to type.
      </p>
    </Wrapper>
  </Layout>
)

export default IndexPage
