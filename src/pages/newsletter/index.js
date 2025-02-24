import React, { Fragment } from "react"

import Seo from "../../components/Seo"
import Wrapper from "../../components/Wrapper"
import NewsletterForm from "../../components/NewsletterForm"

const EventsPage = props => {
  return (
    <Fragment>
      <Seo title="Newsletter" />
      <Wrapper>
        <h1 style={{ display: 'none'}}>Newsletter</h1>
        <NewsletterForm />
      </Wrapper>
    </Fragment>
  )
}

export default EventsPage
