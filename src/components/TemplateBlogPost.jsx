import React from "react"
import Wrapper from "../components/Wrapper"
import Seo from "../components/Seo"

const Template = ({ pageContext, children }) => {
  const { frontmatter } = pageContext

  return (
    <Wrapper>
      <Seo title={frontmatter ? frontmatter.title : null} />
      <article>
        <h1>{frontmatter ? frontmatter.title : ""}</h1>
        <div>{children ? children : null}</div>
      </article>
    </Wrapper>
  )
}

export default Template
