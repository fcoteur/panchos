import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"
import chef from "../images/chef.png"

const Header = ({ siteTitle, lang, location }) => (
  <header className={headerStyles.header}>
    <h1>
      <Link to="/">
        <img
          className={headerStyles.image}
          src={chef}
          alt="chef icon"
          height="60"
        />
      </Link>
      <Link className={headerStyles.title} to="/">
        {siteTitle}
      </Link>
    </h1>

    <nav>
      <ul className={headerStyles.navList}>
        <div className={headerStyles.floatleft}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to={`/${lang}/`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to={`/${lang}/events`}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to={`/${lang}/tapas`}
            >
              Tapas
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to={`/${lang}/contact`}
            >
              Contact
            </Link>
          </li>
        </div>
        <div className={headerStyles.floatright}>
          <li>
            <Link
              className={headerStyles.navItem}
              to={
                location.pathname !== "/"
                  ? location.pathname.replace("fr", "nl")
                  : "/nl/"
              }
              activeStyle={{ color: "red" }}
              partiallyActive={true}
            >
              NL{JSON.stringify()}
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to={
                location.pathname !== "/"
                  ? location.pathname.replace("nl", "fr")
                  : "/fr/"
              }
              activeStyle={{ color: "red" }}
              partiallyActive={true}
            >
              FR
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  lang: PropTypes.string,
  location: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  lang: `nl`,
}

export default Header
