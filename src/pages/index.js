import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Intro = () => {
  const language = (
    window.navigator.userLanguage || window.navigator.language
  ).slice(0, 2)
  switch (language) {
    case "nl":
      window.location = "/nl/"
      break
    case "fr":
      window.location = "/fr/"
      break
    default:
      return (
        <Layout>
          <SEO title="Home" />
          <Link to="/nl/">Site in het Nederlands</Link> <br />
          <Link to="/fr/">Site en Francais</Link>
        </Layout>
      )
  }
}

export default Intro
