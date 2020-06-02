import React from 'react'
import "../css/index.css"
import Surfing from "../components/Surfing"
import Outdoor from '../components/Outdoor';
import Delivery from '../components/Delivery';

function RootIndex({ data }) {
  let travelData = data.allContentfulTravel.nodes[1];
  let secondTravelData = data.allContentfulTravel.nodes[0];
  let firstLittleBox = data.allContentfulFourLittleBoxes.nodes[0];
  let secondLLittleBox = data.allContentfulFourLittleBoxes.nodes[1];
  let thirdLittleBox = data.allContentfulFourLittleBoxes.nodes[2];
  let fourthLittleBox = data.allContentfulFourLittleBoxes.nodes[3];
  console.log(firstLittleBox)

  return (
    <div id="wrapper">
      <Surfing { ...travelData } />
      <Outdoor { ...secondTravelData }/>
      <div id="four-little-boxes">
        <Delivery {...firstLittleBox}/>
        <Delivery {...secondLLittleBox}/>
        <Delivery {...thirdLittleBox}/>
        <Delivery {...fourthLittleBox}/>
      </div>
        {/* <OffTheGrid/>
        <Shapes/>
        <InDepth/>
        <MustSee/>
        <Latest/>
        <FoodLifestyleFashion/>
        <Arcitecture/>
        <Travel/>
        <Greenery/>
        <NewsDigest/>
        <Beaches/>
        <TheNewYorkTimes/>
        <SecondNewYorkTimes/>
        <Virtual/>
        <div id="design-education">
            <Design/>
            <Education/>
        </div> */}
    </div>
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

    allContentfulFourLittleBoxes {
      nodes {
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        content {
          content
        }
        title
      }
    }
  }
`