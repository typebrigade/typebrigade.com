import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Logo from "./Logo"
import Wrapper from "./Wrapper"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { to: "/blog", label: "Blog" },
]

const Flexbox = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      {...props}
    />
  )
}

const NavItem = props => {
  return (
    <Link style={{ padding: "0.5rem", display: "inline-block" }} {...props} />
  )
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <Wrapper>
      <Flexbox>
        <div style={{ width: "200px" }}>
          <Logo />
        </div>
        <div>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              margin: "0 -0.5rem",
            }}
          >
            {navItems && navItems.length >= 1
              ? navItems.map(item => {
                  return <NavItem to={item.href}>{item.label}</NavItem>
                })
              : null}
          </nav>
        </div>
      </Flexbox>
    </Wrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
