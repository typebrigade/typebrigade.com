import "./Button.css"
import React from "react"
import PropTypes from "prop-types"

const Button = props => {
  return <div className="Button">{props.children}</div>
}

export default Button
