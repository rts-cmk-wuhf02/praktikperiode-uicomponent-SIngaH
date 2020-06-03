import React from 'react'
import Surfing from "../components/Surfing"
import Outdoor from '../components/Outdoor';
import Delivery from '../components/Delivery';
import OffTheGrid from '../components/Off-the-grid';
import MustSee from "../components/MustSee"
import Latest from "../components/Latest"
import Arcitecture from "../components/Arcitecture"
import NewsDigest from "../components/NewsDigest"
import Virtual from "../components/Virtual"
import Design from "../components/Design"
import NewYorkTimes from "../components/TheNewYorkTimes"
import SecondNewYorkTimes from "../components/SecondNewYorkTimes"
import "../css/index.css"

function RootIndex({ data }) {
  let surfingData = data.allContentfulTravel.nodes[0];
  let outdoorData = data.allContentfulTravel.nodes[1];
  
  let firstLittleBox = data.allContentfulFourLittleBoxes.nodes[0];
  let secondLLittleBox = data.allContentfulFourLittleBoxes.nodes[1];
  let thirdLittleBox = data.allContentfulFourLittleBoxes.nodes[2];
  let fourthLittleBox = data.allContentfulFourLittleBoxes.nodes[3];
  
  let collection123 = data.allContentfulCollection.nodes[0];
  let collection1 = data.allContentfulCollection.nodes[1];
  let collection10 = data.allContentfulCollection.nodes[2];
  
  let MustSeeData = data.allContentfulMustSee.nodes[0];
  
  let latestNews = data.allContentfulLatestNews.nodes[0];
  let latestNews2 = data.allContentfulLatestNews.nodes[1];
  let latestNews3 = data.allContentfulLatestNews.nodes[2];
  let latestNews4 = data.allContentfulLatestNews.nodes[3];
  let latestNews5 = data.allContentfulLatestNews.nodes[4];
  
  let Lifestyle = data.allContentfulLatestNews.nodes[5];
  let Fashion = data.allContentfulLatestNews.nodes[6];
  
  let arcitecture = data.allContentfulArcitecture.nodes[3];
  let travelAndLeasure = data.allContentfulArcitecture.nodes[2];
  let greenery = data.allContentfulArcitecture.nodes[1];
  let beaches = data.allContentfulArcitecture.nodes[0];
  
  let Technology = data.allContentfulNewsDigest.nodes[2];
  let Nature = data.allContentfulNewsDigest.nodes[1];
  let designData = data.allContentfulNewsDigest.nodes[0];
  let Development = data.allContentfulNewsDigest.nodes[3];
  
  let virtualReality = data.allContentfulVirtualReality.nodes[0];

  let design = data.allContentfulDesign.nodes[0];
  let education = data.allContentfulDesign.nodes[1];

  let TNYT = data.allContentfulTnyt.nodes[1];
  let TSTNYT = data.allContentfulTnyt.nodes[0];

  return (
    <div id="wrapper">
      <Surfing { ...surfingData } />
      <Outdoor { ...outdoorData }/>
      <div id="four-little-boxes">
        <Delivery {...firstLittleBox}/>
        <Delivery {...secondLLittleBox}/>
        <Delivery {...thirdLittleBox}/>
        <Delivery {...fourthLittleBox}/>
      </div>
      <OffTheGrid { ...collection10}/>
      <OffTheGrid { ...collection1}/>
      <OffTheGrid { ...collection123}/>
      <MustSee { ...MustSeeData}/>
      <div id="Latest">
        <h2 className="latest-news">LATEST NEWS</h2>
        <Latest { ...latestNews}/>
        <Latest { ...latestNews2}/>
        <Latest { ...latestNews3}/>
        <Latest { ...latestNews4}/>
        <Latest { ...latestNews5}/>
        <h2 className="more-news">MORE NEWS</h2>
      </div> 
      <div id="FoodLifestyleFashion">
        <Latest { ...Lifestyle}/>
        <Latest { ...Fashion}/>
      </div>
      <Arcitecture { ...arcitecture}/>
      <Arcitecture { ...travelAndLeasure}/>
      <Arcitecture { ...greenery}/>
      <Arcitecture { ...beaches}/>
      <div id="NewsDigest">
        <h2 className="news-headline">NEWS DIGEST</h2>
        <NewsDigest { ...Technology}/>
        <NewsDigest { ...Nature}/>
        <NewsDigest { ...designData}/>
        <NewsDigest { ...Development}/>
      </div>    
      <Virtual { ...virtualReality}/>
      <div id="design-education">
        <Design { ...design }/>
        <Design { ...education }/>
      </div>
      <NewYorkTimes { ...TNYT}/>
      <SecondNewYorkTimes { ...TSTNYT}/>
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
        color
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
  
  allContentfulCollection {
    nodes {
      title
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      author
      label
    }
  }

  allContentfulMustSee {
    nodes {
      content {
        content
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      label
    }
  }

  allContentfulLatestNews {
    nodes {
      color
        content {
        content
        }
        image {
        fluid {
          ...GatsbyContentfulFluid
        }
        }
        title
    }
  }

  allContentfulArcitecture {
    nodes {
      color
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      content {
        content
      }
    }
  }

  allContentfulNewsDigest {
    nodes {
      border
      content {
        content
      }
      color
      number
      title
    }
  }

  allContentfulVirtualReality {
    nodes {
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      label
    }
  }

  allContentfulDesign {
    nodes {
      color
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
    }
  }

  allContentfulTnyt {
    nodes {
      button
      content {
        content
      }
      images {
        fluid {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
        }
      }
      title
    }
  }

}
`