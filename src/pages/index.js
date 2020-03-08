import React, { Fragment } from "react"
// import { Link } from "gatsby"

import SEO from "../components/SEO"
import Wrapper from "../components/Wrapper"
import Banner from "../components/Banner"
import TitoButton from "../components/TitoButton"
import Schedule from "../components/Schedule"
import Speakers from "../components/Speakers"
import Sponsors from "../components/Sponsors"
import "../components/Button.css"

const IndexPage = () => (
  <Fragment>
    <div>
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
      <h2>Schedule</h2>
      <Schedule />
      <h2>Speakers</h2>
    </Wrapper>
    <Wrapper wide>
      <Speakers />
    </Wrapper>
    <Wrapper>
      <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <h2>Sponsors & Partners</h2>
        <Sponsors />
      </div>
      {/*
      <p>
        I find, if you speak about anything for long enough,{" "}
        <strong>it always comes</strong> back to type.
      </p>
      */}
    </Wrapper>
  </Fragment>
)

export default IndexPage
