import React from "react"
import PropTypes from "prop-types"

import Logo from "./Logo"
import Wrapper from "./Wrapper"
import LinkDuo from "./LinkDuo"
// import TitoButton from "./TitoButton"

const navItems = [
  // { to: "/", label: "Home" },
  // { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  // { to: "https://meetup.com/typebrigade", label: "Meetup" },
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
    <LinkDuo
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
          <LinkDuo
            to="/"
            style={{
              padding: "1rem",
              marginLeft: "-1rem",
              display: "block",
            }}
          >
            <Logo />
          </LinkDuo>
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
                  return <NavItem to={item.to}>{item.label}</NavItem>
                })
              : null}
            <LinkDuo
              className="Button Button--small Button--outline"
              to="https://meetup.com/typebrigade"
            >
              Join Type Brigade
            </LinkDuo>
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
