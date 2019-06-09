import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Intro = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/nl/">Site in het Nederlands</Link> <br />
    <Link to="/fr/">Site en Francais</Link>
  </Layout>
)

export default Intro
