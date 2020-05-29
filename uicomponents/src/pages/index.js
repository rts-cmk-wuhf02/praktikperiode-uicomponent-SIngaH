import React from 'react'
import Surfing from "../components/Surfing"

function RootIndex({ data }) {
  let travelData = data.allContentfulTravel.nodes[0];
  console.log(travelData)
  return (
    <Surfing { ...travelData } />
  )
}

export default RootIndex

export const query = graphql`
query travelQuery {
  allContentfulTravel {
    nodes {
      title
      label
      content {
        content
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
}
  `