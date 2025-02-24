import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = () => {
  let title = "404 – Page not found"
  return (
    <Layout>
      <Seo title={title} />
      <h1>{title}</h1>
    </Layout>
  )
}

export default NotFoundPage
