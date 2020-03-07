/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const handleTitoWidgetReset = function() {
  // Get all Tito Web Components
  let els = document.querySelectorAll("tito-button")

  for (let i = 0; els.length > i; i++) {
    let el = els[i]
    // Reset all of them
    el.innerHTML = el.innerText || el.textContent
  }

  window.titoWidgetCallback = function() {
    window.TitoWidget.build_widgets = false
  }

  if (window.TitoWidget) {
    // Reinit all of them
    window.TitoWidget.buildWidgets()
  }
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
  handleTitoWidgetReset()
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}
