import React, { Fragment } from "react"
import data from "./_data.json"
import { format } from "fecha"

import Seo from "../../components/Seo"
import LinkDuo from "../../components/LinkDuo"
import Wrapper from "../../components/Wrapper"

const EventsPage = props => {
  return (
    <Fragment>
      <Seo title="Events" />
      <Wrapper>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {data.map((event, index) => {
            let date = ""
            let location = ""
            if (event.date && event.date !== "") {
              date = new Date(event.date)
              date = format(date, "DD MMMM, YYYY")
            }

            if (typeof event.location !== "undefined" && event.location) {
              location = event.location
            }

            let label = (
              <Fragment>
                {event.number ? `Type Brigade №${event.number} ` : ""}
                <span>{event.title}</span>
                <div style={{ opacity: 0.5 }}>
                  <time style={{ display: "block" }}>{date}</time>
                  <div>{location}</div>
                </div>
              </Fragment>
            )

            if (event.url) {
              label = (
                <LinkDuo
                  style={{ textDecoration: "none" }}
                  to={event.url || undefined}
                >
                  {label}
                </LinkDuo>
              )
            }

            return (
              <li style={{ display: "block", marginBottom: "1rem" }}>
                {label}
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </Fragment>
  )
}

export default EventsPage
