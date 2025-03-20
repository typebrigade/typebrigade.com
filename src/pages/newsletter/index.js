import React, { Fragment } from "react"

import Seo from "../../components/Seo"
import Wrapper from "../../components/Wrapper"
import NewsletterForm from "../../components/NewsletterForm"

const EventsPage = props => {
  return (
    <Fragment>
      <Seo title="Newsletter" />
      <Wrapper>
        <article>
          <h1 style={{ display: "none" }}>Newsletter</h1>
          <h2>Meetup.com</h2>
          <p>
            We currently run our events through Meetup.com. Join our group there
            to register for events, or see our archive of 50+ events over the
            last decade and counting:
          </p>
          <p>
            <a href="https://meetup.com/typebrigade" target="_blank">
              Type Brigade on Meetup.com
            </a>
          </p>
          <h2>Newsletter</h2>
          <p>
            We’ll still announce events through Meetup.com, but starting in June, 2025, we’re excited to
            share that our newsletter will be the new way we announce events
            first:
          </p>
        </article>
        <NewsletterForm />
      </Wrapper>
    </Fragment>
  )
}

export default EventsPage
