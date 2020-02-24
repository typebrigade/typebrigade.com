/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "normalize.css"
import "./layout.css"

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Wrapper from "../components/Wrapper"

const Layout = ({ children, fullWidth }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let content = <main>{children}</main>
  if (!fullWidth) {
    content = <Wrapper>{content}</Wrapper>
  }

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      {content}
      <footer style={{ marginTop: "3rem", marginBottom: "4rem" }}>
        <Wrapper>
          <a href="https://typebrigade.com">Type Brigade</a>
        </Wrapper>
      </footer>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool.isRequired,
}

Layout.defaultProps = {
  fullWidth: false,
}

export default Layout
