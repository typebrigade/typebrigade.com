/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const handleResetTito = function() {
  if (
    window &&
    window.TitoWidget &&
    typeof window.TitoWidget.buildWidgets !== "undefined"
  ) {
    // Get all Tito Web Components
    let els = document.querySelectorAll("tito-button")

    for (let i = 0; els.length > i; i++) {
      let el = els[i]
      // Reset all of them
      el.innerHTML = `<span class="tito-tickets-button-inner">${el.innerText ||
        el.textContent}</span>`
    }

    window.TitoWidget.buildWidgets()
  }
}

window.titoWidgetCallback = function() {
  window.TitoWidget.build_widgets = false
  handleResetTito()
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
  handleResetTito()
}

exports.onClientEntry = () => {
  handleResetTito()
}
