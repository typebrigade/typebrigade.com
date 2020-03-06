import React from "react"
import PropTypes from "prop-types"

import Logo from "./Logo"
import Wrapper from "./Wrapper"
import Link from "./LinkDuo"
import TitoButton from "./TitoButton"

const navItems = [
  // { href: "/", label: "Home" },
  // { href: "/about", label: "About" },
  // { to: "/blog", label: "Blog" },
  { href: "https://meetup.com/typebrigade", label: "Meetup" },
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
    <Link
      style={{
        padding: "0.5rem",
        display: "inline-block",
        textDecoration: "none",
      }}
      {...props}
    />
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
        <div style={{ width: "180px" }}>
          <Link
            to="/"
            style={{
              padding: "1rem",
              marginLeft: "-1rem",
              display: "block",
            }}
          >
            <Logo />
          </Link>
        </div>
        <div>
          <nav
            style={{
              transform: "translateY(3px)",
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
            <TitoButton buttonSize="small" buttonStyle="outline" />
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
