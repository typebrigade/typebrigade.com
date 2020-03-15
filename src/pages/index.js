import React, { Fragment } from "react"

import SEO from "../components/SEO"
import Wrapper from "../components/Wrapper"
import Banner from "../components/Banner"
import LinkDuo from "../components/LinkDuo"
import Schedule from "../components/Schedule"
import Speakers from "../components/Speakers"
import Sponsors from "../components/Sponsors"
import "../components/Button.css"

const IndexPage = () => (
  <Fragment>
    <div>
      <Wrapper>
        <div
          style={{
            margin: "5rem 0 8rem 0",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Type Brigade №50 cancelled</h2>
          <p>
            Type Brigade №50 on March 30 has been cancelled. Refunds were
            initiated one March 12, 2020. For all the details, please read the
            following post:
          </p>
          <LinkDuo
            to="/blog/type-brigade-50-cancelled"
            className="Button Button--small Button--outline"
          >
            Read the full post…
          </LinkDuo>
        </div>
      </Wrapper>
      <Banner>
        <div>
          <h1>
            Type Brigade
            <br />
            <span style={{ fontWeight: "normal" }}>
              Vancouver’s typography <br />
              speaker series
            </span>
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
            <p>
              <LinkDuo className="Button" to="https://meetup.com/typebrigade">
                Join Type Brigade
              </LinkDuo>
            </p>
          </div>
        </div>
      </Banner>
    </div>
    {/*
    <Wrapper>
      <h2>Schedule</h2>
      <Schedule />
    </Wrapper>
    <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <Wrapper>
        <h2>Speakers</h2>
      </Wrapper>
      <Wrapper wide>
        <Speakers />
      </Wrapper>
    </div>
    */}
    <div style={{ zIndex: 2, position: "relative" }}>
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
    </div>
  </Fragment>
)

export default IndexPage
