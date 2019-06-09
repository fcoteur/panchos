import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"

const Header = ({ siteTitle, lang }) => (
  <header className={headerStyles.header}>
    <h1>
      <Link className={headerStyles.title} to="/">
        {siteTitle}
      </Link>
    </h1>
    <nav>
      <ul className={headerStyles.navList}>
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
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  lang: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  lang: `nl`,
}

export default Header
