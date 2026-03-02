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
          <p>
            We currently run our events through{" "}
            <a href="https://meetup.com/typebrigade" target="_blank">
              Meetup.com
            </a>
            , but announce them first to our own email list:
          </p>
          <NewsletterForm />
          <p>
            When we announce a new event, you’ll need to register for a free
            Meetup.com account, or use your existing account.
          </p>
          <p>
            Join our group there to register for events, or see our archive of
            50+ events over the last decade and counting:{" "}
            <a href="https://meetup.com/typebrigade" target="_blank">
              Type Brigade on Meetup.com
            </a>
          </p>
        </article>
      </Wrapper>
    </Fragment>
  )
}

export default EventsPage
