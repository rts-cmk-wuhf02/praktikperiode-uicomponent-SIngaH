import React from "react"
import "../css/surfing.css"
import Img from 'gatsby-image'

function Surfing({ title, label, content, images }) {
  return(
    <div id="Surfing">
        { <Img fluid={images[0].fluid} alt="Surfing"/> }
        <div className="surfing-text">
            <h4>{ label }</h4>
            <h1>{title}</h1>
            <p>{content.content}</p>
        </div>
    </div>
  )
}
export default Surfing
