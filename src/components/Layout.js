/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "normalize.css"
import "./Layout.css"

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

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

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      {content}
      <Wrapper>
        <footer
          style={{
            marginTop: "3rem",
            marginBottom: "4rem",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <Link to="/">Type Brigade</Link>
          <br />
          <Link to="/code-of-conduct">Code of Conduct</Link>
          <br />
          <Link to="/blog">Blog</Link>
          <br />
          <a href="https://instagram.com/typebrigade">
            @typebrigade on Instagram
          </a>
          <br />
          <a href="https://twitter.com/typebrigade">@typebrigade on Twitter</a>
          <br />
        </footer>
      </Wrapper>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  fullWidth: false,
}

export default Layout
