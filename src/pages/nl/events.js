import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Events = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContent {
        edges {
          node {
            eventsFr {
              json
            }
            eventsNl {
              json
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="events" />
      <>
        {documentToReactComponents(
          data.allContentfulContent.edges[0].node.eventsNl.json
        )}
      </>
    </Layout>
  )
}

export default Events
