import React from "react"
import "../css/Outdoor.css"
import Img from 'gatsby-image'

function Outdoor ({ title, label, content, images }){
    return(
        <div id="Outdoor">
            {<Img fluid={images[0].fluid} alt="water and mountains" className="first-img"/>}
            <button>{label}</button>
            <h1>{title}</h1>
            <p>{content.content}</p>
            <div className="little-imgs">
                {<Img fluid={images[1].fluid} alt="mountains and water"/>}
                {<Img fluid={images[2].fluid} alt="snow"/>}
                {<Img fluid={images[3].fluid} alt="mountains"/>}
            </div>  
        </div>
    )
}
export default Outdoor
