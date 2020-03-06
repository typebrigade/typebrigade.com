import React from "react"
import { graphql } from "gatsby"
import Wrapper from "../components/Wrapper"

const Template = ({ pageContext, children }) => {
  const { frontmatter } = pageContext

  return (
    <Wrapper>
      <article>
        <h1>{frontmatter ? frontmatter.title : ""}</h1>
        <div>{children ? children : null}</div>
      </article>
    </Wrapper>
  )
}

export default Template
