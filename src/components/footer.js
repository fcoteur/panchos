import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <a
        className={footerStyles.a}
        href="https://www.coteur.eu"
        target="_blank"
        rel="noopener noreferrer"
      >
        © 2019 {data.site.siteMetadata.author}
      </a>
    </footer>
  )
}

export default Footer
