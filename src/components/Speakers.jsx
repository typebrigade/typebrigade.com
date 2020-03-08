import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Link from "./LinkDuo"

const SpeakerItem = props => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          src={props.photo}
          alt={`Photo of ${props.name}`}
          style={{ width: "50%" }}
        />
        <img src={props.images[0]} alt="" style={{ width: "50%" }} />
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
  photo: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  url: PropTypes.string,
  bio: PropTypes.string,
}

const data = [
  {
    photo: "https://placehold.it/1000?text=photo",
    images: [
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
    url: "https://example.com",
    bio:
      "Paul Barnes is a British graphic designer, type designer, and founding partner with Christian Schwartz in the London and New York based foundry Commercial Type. Over the last ten years with Schwartz and individually he has designed a number of acclaimed custom and retail faces, from the enormous editorial Guardian family through to the more experimental such as Dala Floda and Marian. He has a particular interest in the history of letterforms, which has led to Commercial Type’s new venture Commercial Classics an exploration of reviving long forgotten and extinct typefaces.",
  },
  {
    photo: "https://placehold.it/1000?text=photo",
    images: ["https://placehold.it/1000?text=work"],
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
    photo: "https://placehold.it/1000?text=photo",
    images: ["https://placehold.it/1000?text=work"],
    name: "Phoebe Glasfurd",
    subtitle: (
      <Fragment>
        Creative Director and co-founder,{" "}
        <Link to="https://glasfurdandwalker.com/">Glasfurd & Walker</Link>
      </Fragment>
    ),
    url: "https://example.com",
    bio: "",
  },
  {
    photo: "https://placehold.it/1000?text=photo",
    images: ["https://placehold.it/1000?text=work"],
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
    photo: "https://placehold.it/1000?text=photo",
    images: ["https://placehold.it/1000?text=work"],
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
    photo: "https://placehold.it/1000?text=photo",
    images: ["https://placehold.it/1000?text=work"],
    name: "Alvin Kwan & Vince Lo",
    subtitle: (
      <Fragment>
        Founders and designers, <Link to="">Faculty</Link> and{" "}
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
