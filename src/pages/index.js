import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Wrapper from "../components/Wrapper"
import Banner from "../components/Banner"

const IndexPage = () => (
  <Layout fullWidth>
    <SEO title="Home" />
    <Banner />
    <Wrapper>
      <p>
        I find, if you speak about anything for long enough,{" "}
        <strong>it always comes</strong> back to type.
      </p>
    </Wrapper>
  </Layout>
)

export default IndexPage
