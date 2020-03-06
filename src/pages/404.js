import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => {
  let title = "404 – Page not found"
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
    </Layout>
  )
}

export default NotFoundPage
