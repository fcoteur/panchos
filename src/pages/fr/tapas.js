import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Products from "../../components/products"

const Tapas = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContent {
        edges {
          node {
            tapasFr {
              json
            }
            tapasNl {
              json
            }
          }
        }
      }
    }
  `)
  return (
    <Layout lang="fr">
      <SEO title="tapas" />
      <>
        {documentToReactComponents(
          data.allContentfulContent.edges[0].node.tapasFr.json
        )}
      </>
      <Products lang="fr" />
    </Layout>
  )
}

export default Tapas
