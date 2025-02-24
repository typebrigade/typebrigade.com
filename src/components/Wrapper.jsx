import "./Wrapper.css"
import React from "react"
import PropTypes from "prop-types"

const Wrapper = props => {
  const widthMap = {
    article: '',
    regular: 'Wrapper--regular',
    wide: 'Wrapper--wide',
  }

  return (
    <div
      className={`Wrapper ${widthMap[props.width] || ''}`}
      {...props}
    />
  )
}

Wrapper.defaultProps = {
  width: 'article',
}

Wrapper.propTypes = {
  width: PropTypes.oneOf(['article', 'regular', 'wide']),
}

export default Wrapper
