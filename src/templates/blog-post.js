import React from "react"
import { graphql } from "gatsby"
import Wrapper from "../components/Wrapper"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Wrapper>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Wrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
