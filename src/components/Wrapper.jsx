import "./Wrapper.css"
import React from "react"
import PropTypes from "prop-types"

const Wrapper = props => {
  return (
    <div
      className={`Wrapper ${props.wide ? `Wrapper--wide` : ""}`}
      {...props}
    />
  )
}

Wrapper.defaultProps = {
  wide: false,
}

Wrapper.propTypes = {
  wide: PropTypes.bool,
}

export default Wrapper
