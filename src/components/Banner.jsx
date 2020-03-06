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
        opacity: 0.5,
        fontWeight: 400,
        transformOrigin: "top left",
        height: 0,
        transform: "translate(calc(100% + 1.5rem), 0) rotate(90deg)",
      }}
    >
      <p>
        {props.description
          ? `${props.description}, from ${props.author}`
          : props.author}
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
      {
        author: "Commercial Classcis",
        description: "",
        alt: "",
        src: require("../images/type-brigade-50-paul-commercial-classics-3.png"),
      },
      {
        author: "Glasfurd & Walker",
        description: "",
        alt: "",
        src: require("../images/type-brigade-50-glasfurdandwalker-1.jpg"),
      },
      {
        author: "Type Brigade",
        description: "Type Brigade №20",
        alt: "",
        src: require("../images/event-20.jpg"),
      },
      {
        author: "Kisyuu",
        description: "Kisyuu Japanese Calligrpahy",
        alt: "",
        src: require("../images/type-brigade-50-kisyuu-1.jpg"),
      },
      {
        author: "Type Brigade",
        description: "Type Brigade №22",
        alt: "",
        src: require("../images/event-22.jpg"),
      },
      {
        author: "Type Brigade",
        description: "Type Brigade №41",
        alt: "",
        src: require("../images/event-41.jpg"),
      },
    ]
    return (
      <div style={{ minHeight: "50vh", width: "100%" }}>
        <Wrapper wide>
          <div style={{ position: "relative" }}>
            <div
              style={{
                zIndex: 2,
                position: "relative",
                transform: `translateY(-5%)`,
              }}
            >
              <div>
                <FitText compressor={2.4}>{this.props.children}</FitText>
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
                {images.map((image, index) => {
                  return (
                    <CarouselFigure
                      key={`carousel_img_${index}`}
                      src={image.src}
                      alt={image.alt || ""}
                      description={image.description}
                      author={image.author}
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
