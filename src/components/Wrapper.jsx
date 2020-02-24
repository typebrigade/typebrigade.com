import React from "react"

const Wrapper = props => {
  return (
    <div
      style={{
        maxWidth: "960px",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      {...props}
    />
  )
}

export default Wrapper
