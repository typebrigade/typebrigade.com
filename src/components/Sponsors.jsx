import React from "react"
import Link from "./LinkDuo"

const textSponsors = [
  // {
  //   url: "https://patreon.com/typebrigade",
  //   label: "Our supporters on Patreon",
  // },
  // { url: "https://commercialtype.com/", label: "Commercial Type" },
  // { url: "https://daltonmaag.com/", label: "Dalton Maag" },
  { url: "https://kennethormandy.com", label: "Kenneth Ormandy" },
  { url: "https://alannamunro.com", label: "Alanna Munro" },
  { url: "http://nancywudesign.com/", label: "Nancy Wu Design" },
  // { url: "https://joshuamann.ca/", label: "Joshua Mann" },
  // { url: "https://mitchellpress.com/", label: "Mitchell Press" },
  // { url: "https://www.spicers.ca/", label: "Spicers" },
  // { url: "https://elysiancoffee.com/", label: "Elysian Coffee" },
  // { url: "https://www.gatsbyjs.com/", label: "Gatsby" },
  { url: "/sponsors", label: "…and you?" },
]

const sponsors = [
  {
    url: "https://www.bcit.ca/",
    svg: props => (
      <svg viewBox="0 0 95 85" xmlns="http://www.w3.org/2000/svg">
        <path fill="white" d="M0 0h84.8v84.8H0z"></path>
        <path d="M8.6 56.4V27.2h7.2c6.7 0 9.7 2.2 9.7 7.6 0 3-1.3 5.1-3.8 6.2v.1c3.3 1.2 4.5 3.7 4.5 7 0 6.7-4.3 8.4-10 8.4H8.6v-.1zm7.4-17c2.5 0 4.7-.9 4.7-4.1 0-3.1-2.3-3.7-4.7-3.7h-2.7v7.8H16zm.5 12.7c3.4 0 4.8-1.2 4.8-4.3 0-3.2-1.6-4.5-4.8-4.5h-3.2v8.8h3.2zm30.9-5.2c-.9 6.5-3.6 9.9-8.9 9.9-7 0-9.3-5.7-9.3-15.1 0-8.4 2.4-14.8 9.3-14.8 5.6 0 7.8 3.5 8.6 9.4l-4.5.4c-.6-3.7-1.9-5.5-4-5.5-3 0-4.5 3.1-4.5 10.5 0 8.1 1.3 10.8 4.5 10.8 2.3 0 3.7-2.1 4.3-6.1l4.5.5zm4.1 9.5V27.2h4.8v29.2h-4.8zm14.8 0V31.6h-6v-4.4h16.8v4.4h-6v24.8h-4.8z"></path>
        <path
          fill="white"
          d="M89.426 3.253c.462 0 .84-.13.84-.625 0-.478-.408-.566-.826-.566h-.64v1.19h.626zm.885 2.15l-.77-1.554H88.8v1.554h-.71V1.454h1.304c.973 0 1.572.333 1.572 1.16 0 .48-.248.858-.742 1.046l.899 1.743h-.812zM92.126 3.5c0-1.584-.99-2.86-2.716-2.86-1.743 0-2.744 1.276-2.744 2.86 0 1.627 1 2.862 2.744 2.862 1.727 0 2.716-1.235 2.716-2.862zM86 3.5C86 1.54 87.288 0 89.41 0c2.12 0 3.398 1.54 3.398 3.5 0 1.916-1.278 3.5-3.398 3.5C87.288 7 86 5.416 86 3.5z"
        ></path>
      </svg>
    ),
  },
  {
    url: "https://mitchellpress.com/",
    svg: props => (
      <svg
        enableBackground="new 0 0 484.4 71.2"
        viewBox="0 0 484.4 71.2"
        fill="white"
        {...props}
      >
        <g>
          <g>
            <rect x="84.7" y="0.6" width="11.8" height="70.6" />
            <polygon points="114.1,11 133.5,11 133.5,71.2 145.2,71.2 145.2,11 164.6,11 164.6,0.6 114.1,0.6   " />
            <path d="M215.6,50.9c-2.9,6.1-7.3,9.2-13,9.2s-9-3.1-10.5-4.9c-2.6-3.4-3.4-5-3.4-19.3s0.8-16.1,3.4-19.3    c1.5-1.8,4.8-4.9,10.5-4.9c6.8,0,11.4,4.9,12.9,9.7l0.1,0.4h12.3l-0.1-0.6C225.4,8.5,215.2,0,202.6,0c-11.4,0-19.2,6.5-22.6,12.8    c-2.4,4.3-3.1,6.4-3.1,23.1s0.8,18.8,3.1,23.1c3.4,6.1,11.2,12.8,22.6,12.8c12.9,0,22.6-7.8,25.2-20.4l0.1-0.6h-12.3L215.6,50.9    L215.6,50.9z" />
          </g>
          <polygon points="55.8,0.6 66.9,0.6 66.9,71.2 54.9,71.2 54.9,29.5 42.3,47.9 42.3,20.9  " />
          <polygon points="11,0.6 0,0.6 0,71.2 11.9,71.2 11.9,29.5 24.6,47.9 24.6,20.9  " />
          <polygon points="283.2,30.4 256.5,30.4 256.5,0.6 244.6,0.6 244.6,71.2 256.5,71.2 256.5,40.8 283.2,40.8 283.2,71.2    295,71.2 295,0.6 283.2,0.6  " />
          <polygon points="312.1,71.2 358.1,71.2 358.1,60.1 323.9,60.1 323.9,40.8 353.1,40.8 353.1,30.4 323.9,30.4    323.9,11.7 358.1,11.7 358.1,0.6 312.1,0.6  " />
          <polygon points="386.9,0.6 375.2,0.6 375.2,71.2 421.3,71.2 421.3,60.1 386.9,60.1  " />
          <polygon points="450,60.1 450,0.6 438.2,0.6 438.2,71.2 484.4,71.2 484.4,60.1  " />
        </g>
      </svg>
    ),
  },
]

const SponsorsLayout = props => {
  return (
    <div>
      <div
        style={{ display: "flex", marginLeft: "-2rem", marginRight: "-2rem" }}
      >
        {sponsors.map((obj, index) => {
          const Logo = obj.svg

          return (
            <Link
              to={`${obj.url}?utm_source=Type+Brigade&utm_medium=affiliate&utm_campaign=Type+Brigade`}
              key={`Sponsor_${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                width: "200px",
                minHeight: "200px",
                padding: "2rem",
              }}
            >
              <div style={{ width: "100%" }}>
                <Logo fill="white" />
              </div>
            </Link>
          )
        })}
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {textSponsors.map((item, index) => {
          return (
            <li>
              <Link to={item.url}>{item.label}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SponsorsLayout
