import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/SEO"
import Wrapper from "../components/Wrapper"
import Banner from "../components/Banner"
import TitoButton from "../components/TitoButton"
import "../components/Button.css"

const IndexPage = () => (
  <Wrapper wide>
    <SEO title="Home" />
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
              <TitoButton />
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
  </Wrapper>
)

export default IndexPage
