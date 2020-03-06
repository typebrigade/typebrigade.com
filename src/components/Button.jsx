import "./Button.css"
import React from "react"
import PropTypes from "prop-types"

const Button = props => {
  return (
    <div className={`Button ${props.large ? "Button--large" : ""}`}>
      {props.children}
    </div>
  )
}

Button.defaultProps = {
  large: false,
}

export default Button
