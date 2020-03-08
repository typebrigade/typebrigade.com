/**
 * Link that also works for external URLs
 * https://github.com/ReactTraining/react-router/issues/1147#issuecomment-283684226
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

class LinkDuo extends React.Component {
  isExternal(url) {
    if (typeof window !== "undefined") {
      var host = window.location.hostname

      var linkHost = (function(url) {
        if (/^(http|https):\/\//.test(url)) {
          // Absolute URL.
          // The easy way to parse an URL, is to create <a> element.
          // @see: https://gist.github.com/jlong/2428561
          var parser = document.createElement("a")
          parser.href = url

          return parser.hostname
        } else {
          // Relative URL
          return window.location.hostname
        }
      })(url)

      return host !== linkHost
    } else if (/^(http|https):\/\//.test(url)) {
      return true
    }

    return false
  }

  render() {
    if (!this.props.to) {
      return <span {...this.props} />
    }

    let external = this.isExternal(this.props.to)
    const fallback = (
      <a
        href={this.props.to}
        {...this.props}
        target={this.props.target || external ? "_blank" : undefined}
        rel={
          external || this.props.target === "_blank"
            ? "noopener noreferrer"
            : undefined
        }
      >
        {this.props.children}
      </a>
    )

    if (typeof window !== "undefined") {
      if (external) {
        return fallback
      } else {
        return <Link {...this.props} />
      }
    } else {
      return fallback
    }
  }
}

LinkDuo.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
}

export default LinkDuo
