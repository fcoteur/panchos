import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import productStyles from "./products.module.scss"

export default function Products(props) {
  const [coldSelect, setColdSelect] = useState(true)
  const [warmSelect, setWarmSelect] = useState(true)
  const { lang } = props

  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        edges {
          node {
            cold
            descriptionFr {
              json
            }
            descriptionNl {
              json
            }
            nameFr
            nameNl
            picture {
              file {
                url
              }
            }
            warm
          }
        }
      }
    }
  `)

  return (
    <>
      {" "}
      <div className={productStyles.filters}>
        <button
          id="cold"
          onClick={() => {
            setColdSelect(!coldSelect)
            if (!coldSelect) {
              document.getElementById("cold").style.borderColor = "green"
            } else {
              document.getElementById("cold").style.borderColor = "white"
            }
          }}
        >
          {String.fromCharCode("0x2744")}
        </button>
        <button
          id="warm"
          onClick={() => {
            setWarmSelect(!warmSelect)
            if (!warmSelect) {
              document.getElementById("warm").style.borderColor = "green"
            } else {
              document.getElementById("warm").style.borderColor = "white"
            }
          }}
        >
          {String.fromCharCode("0x2668")}
        </button>
      </div>
      <div className={productStyles.products}>
        {data.allContentfulProduct.edges.map(edge => {
          if (edge.node.cold === coldSelect || edge.node.warm === warmSelect) {
            if (lang === "fr") {
              return (
                <div className={productStyles.product}>
                  <img
                    alt={edge.node.nameFr}
                    src={edge.node.picture.file.url}
                  />
                  <div>
                    <h5>{edge.node.nameFr}</h5>
                    {documentToReactComponents(edge.node.descriptionFr.json)}
                  </div>
                </div>
              )
            } else {
              return (
                <div className={productStyles.product}>
                  <img
                    alt={edge.node.nameNl}
                    src={edge.node.picture.file.url}
                  />
                  <div>
                    <h5>{edge.node.nameNl}</h5>
                    {documentToReactComponents(edge.node.descriptionNl.json)}
                  </div>
                </div>
              )
            }
          } else {
            return null
          }
        })}
      </div>
    </>
  )
}

Products.propTypes = {
  lang: PropTypes.string,
}
