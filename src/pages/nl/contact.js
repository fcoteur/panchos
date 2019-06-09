import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContent {
        edges {
          node {
            contactFr {
              json
            }
            contactNl {
              json
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="contact" />
      <>
        {documentToReactComponents(
          data.allContentfulContent.edges[0].node.contactNl.json
        )}
      </>
    </Layout>
  )
}

export default Contact
