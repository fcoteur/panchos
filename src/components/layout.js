/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"

import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children, lang, props }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Location>
            {locationProps => (
              <Header
                siteTitle={data.site.siteMetadata.title}
                lang={lang}
                {...locationProps}
                {...props}
              />
            )}
          </Location>

          <main>{children}</main>
        </div>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
}

export default Layout
