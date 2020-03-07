import React, { Fragment } from "react"
import "./Button.css"

class TitoButton extends React.Component {
  render() {
    const props = this.props

    return (
      <Fragment>
        <tito-button
          data-size={props.buttonSize}
          data-style={props.buttonStyle}
          event={props.event}
        >
          <a
            className="tito-tickets-button-inner"
            href={`https://ti.to/${props.event}`}
          >
            {props.children}
          </a>
        </tito-button>
      </Fragment>
    )
  }
}

TitoButton.defaultProps = {
  event: "typebrigade/50",
  children: <Fragment>Get&nbsp;Tickets</Fragment>,
}

export default TitoButton
