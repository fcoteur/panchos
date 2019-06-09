/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            lang
          }
        }
      }
    `}
    render={data => (
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header
            siteTitle={data.site.siteMetadata.title}
            lang={data.site.siteMetadata.lang}
          />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
