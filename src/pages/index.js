import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Wrapper from "../components/Wrapper"
import Banner from "../components/Banner"
import Button from "../components/Button.css"

const IndexPage = () => (
  <Layout fullWidth>
    <SEO title="Home">
      <script src="https://js.tito.io/v1" async></script>
    </SEO>
    <div style={{ marginBottom: "200px" }}>
      <Banner>
        <div>
          <h1>
            <span style={{ fontWeight: "normal" }}>Type Brigade №50</span>{" "}
            <br />
            Typography Conference
          </h1>
          <p></p>
          <div>
            <p>
              March 30, 2020
              <br />
              Annex Theatre, Vancouver
            </p>
            <p>
              <tito-button event="typebrigade/50">Get Tickets</tito-button>
            </p>
          </div>
        </div>
      </Banner>
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
