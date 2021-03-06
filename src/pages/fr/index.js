import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContent {
        edges {
          node {
            homeFr {
              json
            }
            homeNl {
              json
            }
          }
        }
      }
    }
  `)
  return (
    <Layout lang="fr">
      <SEO title="Home" />
      <>
        {documentToReactComponents(
          data.allContentfulContent.edges[0].node.homeFr.json
        )}
      </>
    </Layout>
  )
}

export default IndexPage
