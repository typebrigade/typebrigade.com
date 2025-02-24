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
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Wrapper from "./Wrapper"
import Seo from "./Seo"
import Link from "./LinkDuo"

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
      <Seo title="Type Brigade">
      </Seo>
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
          <p>
            <Link to="/">Type Brigade</Link>
            <br />
            <Link to="/newsletter">Newsletter</Link>
            <br />
            <Link to="https://meetup.com/typebrigade">Meetup</Link>
            <br />
            <Link to="/code-of-conduct">Code of Conduct</Link>
            <br />
            <Link to="https://instagram.com/typebrigade">
              @typebrigade on Instagram
            </Link>
            <br />
            <Link to="https://youtube.com/@typebrigade">
              @typebrigade on YouTube
            </Link>
            <br />
          </p>
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
