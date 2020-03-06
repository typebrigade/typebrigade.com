import React from "react"
import SEO from "./SEO"

class TitoButton extends React.Component {
  constructor() {
    super()

    this.el = null
  }

  componentDidMount() {
    // Get all Tito Web Components
    let els = document.querySelectorAll("tito-button")

    for (let i = 0; els.length > i; i++) {
      let el = els[i]
      // Reset all of them
      el.innerHTML = el.innerText || el.textContent
    }

    if (window.TitoWidget) {
      // Reinit all of them
      window.TitoWidget.buildWidgets()
    }
  }

  render() {
    const props = this.props

    return (
      <React.Fragment>
        <SEO>
          <script src="https://js.tito.io/v1" async></script>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://css.tito.io/v1.1"
          />
        </SEO>
        <tito-button
          ref={el => (this.el = el)}
          data-size={props.buttonSize}
          data-style={props.buttonStyle}
          event="typebrigade/50"
        >
          {props.children}
        </tito-button>
      </React.Fragment>
    )
  }
}

TitoButton.defaultProps = {
  children: "Get Tickets",
}

export default TitoButton
