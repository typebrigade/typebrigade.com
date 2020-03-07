import React from "react"
import { graphql } from "gatsby"
import Wrapper from "../components/Wrapper"
import SEO from "../components/SEO"

const Template = ({ pageContext, children }) => {
  const { frontmatter } = pageContext

  return (
    <Wrapper>
      <SEO title={frontmatter ? frontmatter.title : null} />
      <article>
        <h1>{frontmatter ? frontmatter.title : ""}</h1>
        <div>{children ? children : null}</div>
      </article>
    </Wrapper>
  )
}

export default Template
