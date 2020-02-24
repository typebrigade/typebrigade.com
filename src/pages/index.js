import React from "react"
import FitText from "@kennethormandy/react-fittext"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"
import Wrapper from "../components/Wrapper"

const IndexPage = () => (
  <Layout fullWidth>
    <SEO title="Home" />
    <div style={{ minHeight: "50vh", width: "100%" }}>
      <Wrapper>
        <div style={{ position: "relative" }}>
          <div style={{ zIndex: 2, position: "relative" }}>
            <div>
              <FitText compressor={2.3}>
                <div>
                  <h1>
                    <span style={{ fontWeight: "normal" }}>
                      Type Brigade №50
                    </span>{" "}
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
                      <a href="#">Get Tickets</a>
                    </p>
                  </div>
                </div>
              </FitText>
            </div>
          </div>
          <div
            style={{
              width: "66%",
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 1,
            }}
          >
            <figure>
              <img
                style={{ width: "100%", display: "block", margin: 0 }}
                src="https://placehold.it/1920x1080/C43E80/FFFFFF"
                alt=""
              />
              <figcaption>
                <p>
                  What image is, by{" "}
                  <a href="#" target="_blank">
                    what speaker
                  </a>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Wrapper>
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
