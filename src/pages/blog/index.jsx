import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import Wrapper from "./../../components/Wrapper"

const BlogIndex = props => {
  console.log(props)
  return (
    <Wrapper>
      <h1>Blog</h1>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {props.data.allMdx.edges.map(({ node }) => (
          <li key={node.id} style={{ marginBottom: "2rem" }}>
            <Link
              to={`${node.fields.slug}/`}
              style={{ textDecoration: "none" }}
            >
              <h3 style={{ marginBottom: "0.25rem", fontSize: "1.5rem" }}>
                {node.frontmatter.title}
              </h3>
              <p style={{ fontSize: "1.25rem", marginTop: 0 }}>
                {node.frontmatter.description || node.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
          }
        }
      }
      totalCount
    }
  }
`

export default BlogIndex
