import React, { Fragment } from "react"

class TitoButton extends React.Component {
  constructor() {
    super()

    this.el = null
  }

  render() {
    const props = this.props

    return (
      <tito-button
        ref={el => (this.el = el)}
        data-size={props.buttonSize}
        data-style={props.buttonStyle}
        event="typebrigade/50"
      >
        {props.children}
      </tito-button>
    )
  }
}

TitoButton.defaultProps = {
  children: <Fragment>Get&nbsp;Tickets</Fragment>,
}

export default TitoButton
