import React, { Fragment, Component } from "react"
import FitText from "@kennethormandy/react-fittext"
import Carousel from "nuka-carousel"

import Wrapper from "./Wrapper"
import Image from "./Image"

class Banner extends Component {
  render() {
    const images = [
      "https://placehold.it/1920x1080/C43E80/FFFFFF?text=Image 1",
      "https://placehold.it/1920x1080/C43E80/FFFFFF?text=Image 2",
      "https://placehold.it/1920x1080/C43E80/FFFFFF?text=Image 3",
    ]
    return (
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
                <Carousel
                  autoplay
                  autoplayInterval={3000}
                  disableEdgeSwiping
                  dragging={false}
                  transitionMode="fade"
                  withoutControls
                  wrapAround
                  heightMode="max"
                >
                  {images.map((src, index) => {
                    return (
                      <div>
                        <img
                          key={`carousel_img_${index}`}
                          style={{ width: "100%", display: "block", margin: 0 }}
                          src={src}
                          alt=""
                        />
                        <figcaption>
                          <p>
                            What image number {index} is, by{" "}
                            <a href="#" target="_blank">
                              what speaker
                            </a>
                          </p>
                        </figcaption>
                      </div>
                    )
                  })}
                </Carousel>
              </figure>
            </div>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default Banner
