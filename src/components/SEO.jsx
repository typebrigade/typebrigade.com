/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import defaultImage from "../images/og-image.png"

function SEO({ description, lang, meta, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  let baseMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  if (defaultImage) {
    baseMeta = baseMeta.concat([
      {
        name: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        name: `twitter:image`,
        content: `${site.siteMetadata.url}${defaultImage}`,
      },
      {
        name: `og:image`,
        content: `${site.siteMetadata.url}${defaultImage}`,
      },
    ])
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        site.siteMetadata.title !== title
          ? `%s | ${site.siteMetadata.title}`
          : null
      }
      meta={baseMeta.concat(meta)}
    >
      {children}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default SEO
