import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Link from "./LinkDuo"

const SpeakerItem = props => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Link to={props.url} style={{ display: "block" }}>
          <img
            src={props.photos[0]}
            alt={props.name}
            style={{ width: "50%" }}
          />
          <img
            src={
              props.photos && props.photos.length > 1
                ? props.photos[1]
                : undefined
            }
            alt=""
            style={{ width: "50%" }}
          />
        </Link>
      </div>
      <h3>{props.name}</h3>
      <p>{props.subtitle}</p>
      <p>{props.location}</p>
      <p>{props.bio}</p>
    </div>
  )
}

SpeakerItem.defaultProps = {}
SpeakerItem.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  url: PropTypes.string,
  bio: PropTypes.string,
}

const data = [
  {
    photos: [require("../images/speakers/paul-barnes/photo.jpg")],
    images: [
      require("../images/type-brigade-50-CommercialClassics28.jpg"),
      require("../images/type-brigade-50-CommercialClassics16.jpg"),
      require("../images/type-brigade-50-paul-commercial-classics-3.png"),
    ],
    name: "Paul Barnes",
    subtitle: (
      <Fragment>
        Co-founder and type designer,{" "}
        <Link to="https://commercialtype.com/">Commercial Type</Link> and{" "}
        <Link to="https://commercialclassics.com/">
          Commercia&nbsp;Classics
        </Link>
      </Fragment>
    ),
    location: "London, UK",
    url: "https://commercialclassics.com",
    bio:
      "Paul Barnes is a British graphic designer, type designer, and founding partner with Christian Schwartz in the London and New York based foundry Commercial Type. Over the last ten years with Schwartz and individually he has designed a number of acclaimed custom and retail faces, from the enormous editorial Guardian family through to the more experimental such as Dala Floda and Marian. He has a particular interest in the history of letterforms, which has led to Commercial Type’s new venture Commercial Classics an exploration of reviving long forgotten and extinct typefaces.",
  },
  {
    photos: [require("../images/speakers/kisyuu/photo.jpg")],
    images: [require("../images/speakers/kisyuu/work-1.png")],
    name: "Kisyuu 姫洲",
    subtitle: (
      <Fragment>
        Japanese calligraphy instructory and performer,{" "}
        <Link to="https://kisyuu-calligraphy.com/">Kisyuu Calligraphy</Link>
      </Fragment>
    ),
    url: "https://kisyuu-calligraphy.com/",
    bio: "",
  },
  {
    photos: [require("../images/speakers/phoebe-glasfurd/photo.jpg")],
    images: [
      require("../images/speakers/phoebe-glasfurd/work-1.png"),
      require("../images/speakers/phoebe-glasfurd/work-2.png"),
      require("../images/speakers/phoebe-glasfurd/work-3.png"),
    ],
    name: "Phoebe Glasfurd",
    subtitle: (
      <Fragment>
        Creative Director and co-founder,{" "}
        <Link to="https://glasfurdandwalker.com/">Glasfurd & Walker</Link>
      </Fragment>
    ),
    url: "https://glasfurdandwalker.com",
    bio: "",
  },
  {
    photos: [
      require("../images/speakers/angela-bains-and-chas-bains/angela-bains.jpg"),
      require("../images/speakers/angela-bains-and-chas-bains/chas-bains.jpg"),
    ],
    images: [],
    name: "Angela Bains & Chas Bains",
    subtitle: (
      <Fragment>
        Founders, <Link to="https://transformexp.com/">TransformExp</Link>
      </Fragment>
    ),
    url: "https://transformexp.com/",
    bio: "",
  },
  {
    photos: [require("../images/speakers/bianca-berning/photo.jpg")],
    images: [],
    name: "Bianca Berning",
    subtitle: (
      <Fragment>
        Creative Director, <Link to="https://daltonmaag.com">Dalton Maag</Link>
      </Fragment>
    ),
    url: "https://daltonmaag.com",
    bio: "",
  },
  {
    photos: [require("../images/speakers/alvin-kwan-and-vince-lo/photo.jpg")],
    images: [
      require("../images/speakers/alvin-kwan-and-vince-lo/work-1.jpg"),
      require("../images/speakers/alvin-kwan-and-vince-lo/work-2.jpg"),
      require("../images/speakers/alvin-kwan-and-vince-lo/work-3.png"),
    ],
    name: "Vince Lo & Alvin Kwan",
    subtitle: (
      <Fragment>
        Founders and designers,{" "}
        <Link to="https://studiofaculty.com/">Faculty</Link> and{" "}
        <Link to="https://sortdays.com">SORT Store</Link>
      </Fragment>
    ),
    url: "https://studiofaculty.com/",
    bio: "",
  },
]

const Speakers = props => {
  return (
    <ul
      style={{
        listStyle: "none",
        margin: "-1rem",
        padding: 0,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {data.map((speakerProps, index) => {
        return (
          <li style={{ width: "50%", padding: "1rem" }}>
            <SpeakerItem {...speakerProps} key={`Speaker_${index}`} />
          </li>
        )
      })}
    </ul>
  )
}

export default Speakers
