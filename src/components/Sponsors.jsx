import React from "react"
import Link from "./LinkDuo"

const Sponsors = {
  mitchell: props => (
    <svg
      enableBackground="new 0 0 200 100"
      viewBox="0 0 200 100"
      fill="white"
      {...props}
    >
      <path d="m57.4 47.5v-18.6h-5.5l-4.5 11.6-4.5-11.6h-5.6v18.6h4v-13.4l5.2 13.4h1.7l5.2-13.4v13.4z" />
      <path d="m66.2 28.9h3.9v18.5h-3.9z" />
      <path d="m91.9 28.9h-14.8v3.5h5.4v15.1h4v-15.1h5.4z" />
      <path d="m115.4 43.2-3.4-1.6c-.8 1.5-2.4 2.7-4.5 2.7-3.2 0-5.7-2.6-5.7-6.1s2.4-6.1 5.7-6.1c2.1 0 3.7 1.2 4.5 2.7l3.4-1.7c-1.3-2.3-3.7-4.5-7.9-4.5-5.4 0-9.7 3.9-9.7 9.6s4.3 9.6 9.7 9.6c4.2 0 6.5-2.2 7.9-4.6z" />
      <path d="m135.3 36.2h-8.7v-7.3h-4v18.6h4v-7.8h8.7v7.8h4v-18.6h-4z" />
      <path d="m148 47.5h13.1v-3.4h-9.1v-4.4h9v-3.3h-9v-4.1h9.1v-3.4h-13.1z" />
      <path d="m173.4 28.9h-3.9v18.6h11.7v-3.5h-7.8z" />
      <path d="m192.3 44v-15.1h-3.9v18.6h11.8v-3.5z" />
      <path d="m43.8 55.3h-6.3v15.8h2v-6.3h4.4c3.1 0 5-2.2 5-4.8-.2-2.5-1.9-4.7-5.1-4.7zm-.2 7.8h-4.1v-6h4.1c1.9 0 3.2 1.2 3.2 3-.1 1.7-1.4 3-3.2 3z" />
      <path d="m66.9 60c0-2.9-2.1-4.8-5-4.8h-6.3v15.8h2v-6.3h3.2l4 6.3h2.3l-4.3-6.4c2.2-.1 4.1-1.7 4.1-4.6zm-9.3 3.1v-6h4.1c1.9 0 3.2 1.2 3.2 3s-1.3 3-3.2 3z" />
      <path d="m74.3 71.1h10.3v-1.8h-8.4v-5.4h8.3v-1.8h-8.3v-5.1h8.4v-1.7h-10.3z" />
      <path d="m97.4 61.9c-2-.5-3.8-1-3.8-2.6 0-1.5 1.4-2.5 3.2-2.5 1.7 0 3.4.6 4.6 1.9l1.2-1.4c-1.3-1.4-3.2-2.2-5.6-2.2-3.1 0-5.4 1.8-5.4 4.4 0 3.1 2.8 3.8 5.4 4.5 2.1.6 4 1.1 4 3 0 1.2-.9 2.7-3.7 2.7-2.2 0-3.9-1.1-5-2.3l-1.2 1.5c1.3 1.5 3.3 2.5 6.1 2.5 4.3 0 5.8-2.3 5.8-4.6 0-3.4-3-4.2-5.6-4.9z" />
      <path d="m115.6 61.9c-2-.5-3.8-1-3.8-2.6 0-1.5 1.4-2.5 3.2-2.5 1.7 0 3.4.6 4.6 1.9l1.2-1.4c-1.3-1.4-3.2-2.2-5.6-2.2-3.1 0-5.4 1.8-5.4 4.4 0 3.1 2.8 3.8 5.4 4.5 2.1.6 4 1.1 4 3 0 1.2-.9 2.7-3.7 2.7-2.2 0-3.9-1.1-5-2.3l-1.2 1.5c1.3 1.5 3.3 2.5 6.1 2.5 4.3 0 5.8-2.3 5.8-4.6-.1-3.4-3-4.2-5.6-4.9z" />
      <path d="m21.8 28.9h-19.7l9.8 11.3z" />
      <path d="m-.2 47.2v24.1h24.1v-24.3l-12.1 13.8z" />
    </svg>
  ),
}

const SponsorsLayout = props => {
  return (
    <div>
      <ul>
        {[
          {
            url: "https://patreon.com/typebrigade",
            label: "Our supporters on Patreon",
          },
          { url: "https://commercialtype.com/", label: "Commercial Type" },
          { url: "https://daltonmaag.com/", label: "Dalton Maag" },
          { url: "https://kennethormandy.com", label: "Kenneth Ormandy" },
          { url: "https://alannamunro.com", label: "Alanna Munro" },
          { url: "http://nancywudesign.com/", label: "Nancy Wu Design" },
          { url: "https://joshuamann.ca/", label: "Joshua Mann" },
          { url: "https://mitchellpress.com/", label: "Mitchell Press" },
          // { url: "https://www.spicers.ca/", label: "Spicers" },
          { url: "https://elysiancoffee.com/", label: "Elysian Coffee" },
          { url: "https://www.gatsbyjs.com/", label: "Gatsby" },
          { url: "/sponsors", label: "…and you?" },
        ].map((item, index) => {
          return (
            <li>
              <Link to={item.url}>{item.label}</Link>
            </li>
          )
        })}
      </ul>

      {/*
      <div style={{ display: "flex", margin: "-1rem" }}>
        {[Sponsors.mitchell, Sponsors.mitchell, Sponsors.mitchell].map(
          (Item, index) => {
            return (
              <div
                key={`Sponsor_1_${index}`}
                style={{ padding: "1rem", width: "200px" }}
              >
                <Item fill="white" />
              </div>
            )
          }
        )}
      </div>
      */}
    </div>
  )
}

export default SponsorsLayout
