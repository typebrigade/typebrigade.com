import React, { Component } from "react"
// import div from "@kennethormandy/react-fittext"
import Carousel from "nuka-carousel"
// import shuffle from "lodash.shuffle"

import image1 from '../images/banner-1.jpg'
import image2 from '../images/banner-2.jpg'
import image3 from '../images/banner-3.jpg'
import image4 from '../images/banner-4.jpg'

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
      <p>{props.description}</p>
    </figcaption>
    {props.src ? (
      <img
        style={{ width: "100%", display: "block", margin: 0, opacity: 0.5 }}
        src={props.src}
        alt=""
      />
    ) : null}
  </figure>
)

class Banner extends Component {
  render() {
    let images = [
      // {
      //   description: "Commercial Classcis",
      //   alt: "",
      //   src: require("../images/type-brigade-50-paul-commercial-classics-3.png"),
      // },
      // {
      //   description: "Glasfurd & Walker",
      //   alt: "",
      //   src: require("../images/type-brigade-50-glasfurdandwalker-1.jpg"),
      // },
      // {
      //   description: "Commercial Classcis",
      //   alt: "",
      //   src: require("../images/type-brigade-50-CommercialClassics13.jpg"),
      // },
      // {
      //   description: "Type Brigade",
      //   description: "Type Brigade №20",
      //   alt: "",
      //   src: require("../images/event-20.jpg"),
      // },
      // {
      //   description: "Commercial Classcis",
      //   alt: "",
      //   src: require("../images/type-brigade-50-CommercialClassics16.jpg"),
      // },
      // {
      //   description: "Kisyuu Japanese Calligrpahy",
      //   alt: "",
      //   src: require("../images/type-brigade-50-kisyuu-1.jpg"),
      // },
      // {
      //   description: "Commercial Classcis",
      //   alt: "",
      //   src: require("../images/type-brigade-50-CommercialClassics28.jpg"),
      // },
      {
        // description: "Type Brigade №22",
        alt: "A speaker at the podium at Type Brigade",
        src: image1,
      },
      {
        // description: "Type Brigade №22",
        alt: "A speaker and the audience at Type Brigade",
        src: image2,
      },
      {
        // description: "Type Brigade №22",
        alt: "A speaker and a wider view of the audience at Type Brigade",
        src: image3,
      },
      {
        // description: "Type Brigade №22",
        alt: "The audience at Type Brigade seeing a slide of previous events",
        src: image4,
      },
    ]

    return (
      <div style={{ marginBottom: "10vh", width: "100%" }}>
        <Wrapper width="wide">
          <div style={{ position: "relative" }}>
            <div
              style={{
                zIndex: 2,
                position: "relative",
                transform: `translateY(-5%)`,
              }}
            >
              <div>
                <div style={{
                  fontSize: `clamp(18px, 7.7vw, 101.75px)`,
                  lineHeight: '1.1',
                }}>{this.props.children}</div>
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
