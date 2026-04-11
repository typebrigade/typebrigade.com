import React from "react"
import Link from "./LinkDuo"
import "./Sponsors.css"
import bcitDamdLogo from "../images/sponsor-bcit-damd.png"

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
  { url: "https://www.jordytbd.com/", label: "Jordan Beaumont" },
  // { url: "https://joshuamann.ca/", label: "Joshua Mann" },
  // { url: "https://mitchellpress.com/", label: "Mitchell Press" },
  // { url: "https://www.spicers.ca/", label: "Spicers" },
  // { url: "https://elysiancoffee.com/", label: "Elysian Coffee" },
  // { url: "https://www.gatsbyjs.com/", label: "Gatsby" },
  { url: "/sponsors", label: "…and you?" },
]

const sponsors = [
  {
    url: "https://www.bcit.ca/business-media/study/digital-arts/",
    children: props => (<img src={bcitDamdLogo} alt="Digital Arts, Media and Design at BCIT" style={{ width: '100%' }} />),
  },
  {
    url: "https://mitchellpress.com/",
    children: props => (
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
      <div className="Sponsors-container">
        {sponsors.map((obj, index) => {
          const Logo = obj.children
          
          return (
            <Link
              to={`${obj.url}?utm_source=Type+Brigade&utm_medium=affiliate&utm_campaign=Type+Brigade`}
              key={`Sponsor_${index}`}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                width: "200px",
                minHeight: "200px",
                padding: "2rem",
              }}
            >
              <div style={{ width: "100%" }}>
                <Logo />
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
