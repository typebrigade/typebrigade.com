import React, { Fragment, Component } from "react"
import FitText from "@kennethormandy/react-fittext"
import Carousel from "nuka-carousel"

import Wrapper from "./Wrapper"
// import Image from "./Image"

const CarouselFigure = props => (
  <figure style={{ paddingRight: "3rem" }}>
    <figcaption
      style={{
        display: "block",
        opacity: 0.75,
        transformOrigin: "top left",
        height: 0,
        transform: "translate(calc(100% + 1.5rem), 0) rotate(90deg)",
      }}
    >
      <p>
        {props.description}, by {props.author}
      </p>
    </figcaption>
    <img
      style={{ width: "100%", display: "block", margin: 0, opacity: 0.5 }}
      src={props.src}
      alt=""
    />
  </figure>
)

class Banner extends Component {
  render() {
    const images = [
      "https://commercialclassics.com/uploads/4700047/1561826673112/Pouchee.17.LineNo.2-Cropped-1400-xxx_q87.jpg",
      "https://glasfurdandwalker.com/wp/wp-content/uploads/2018/11/GlasfurdWalker_Coquille_BusinessCard-1800x0-c-default.jpg",
      "https://storage.googleapis.com/static.daltonmaag.com/media/panels/a9e8dbab17.jpg",
      "https://storage.googleapis.com/static.daltonmaag.com/media/panels/8d22f94265.jpg",
    ]
    return (
      <div style={{ minHeight: "50vh", width: "100%" }}>
        <Wrapper wide>
          <div style={{ position: "relative" }}>
            <div style={{ zIndex: 2, position: "relative" }}>
              <div>
                <FitText compressor={2.3}>{this.props.children}</FitText>
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
              <Carousel
                autoplay
                autoplayInterval={5000}
                disableEdgeSwiping
                dragging={false}
                transitionMode="fade"
                withoutControls
                wrapAround
                heightMode="max"
              >
                {images.map((src, index) => {
                  return (
                    <CarouselFigure
                      key={`carousel_img_${index}`}
                      src={src}
                      description={`What image number ${index} is`}
                      author="Speaker"
                    />
                  )
                })}
              </Carousel>
            </div>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default Banner
