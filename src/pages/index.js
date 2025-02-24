import React, { Fragment } from "react"

import Wrapper from "../components/Wrapper"
import Banner from "../components/Banner"
import LinkDuo from "../components/LinkDuo"
// import Schedule from "../components/Schedule"
// import Speakers from "../components/Speakers"
import Sponsors from "../components/Sponsors"
import "../components/Button.css"
import NewsletterForm from "../components/NewsletterForm"

const IndexPage = () => (
  <Fragment>
    <div>
      <Banner>
        <div>
          <h1 style={{ fontSize: '1em', lineHeight: 'inherit' }}>
            Type Brigade,<br/>
            <span style={{ fontWeight: "normal" }}>
              Vancouver’s typography <br />
              speaker series, returns
            </span><br/>
            <span className="onum">April, 2025</span>
          </h1>
          <p></p>
          <div>
            {/*
            <p>
              March 30, 2020
              <br />
              Annex Theatre, Vancouver
            </p>
            */}
            <p style={{ fontSize: '1em', lineHeight: 'inherit' }}>
              <LinkDuo className="Button" to="/newsletter">
                Join Type Brigade
              </LinkDuo>
            </p>
          </div>
        </div>
      </Banner>
      <div style={{ margin: '3rem 0' }}>
        <NewsletterForm />
      </div>
    </div>
    {/*
    <Wrapper width="regular">
      <h2>Schedule</h2>
      <Schedule />
    </Wrapper>
    <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <Wrapper width="regular">
        <h2>Speakers</h2>
      </Wrapper>
      <Wrapper width="regular">
        <Speakers />
      </Wrapper>
    </div>
    */}
    <div style={{ zIndex: 2, position: "relative" }}>
      <Wrapper width="regular">
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
    </div>
  </Fragment>
)

export default IndexPage
