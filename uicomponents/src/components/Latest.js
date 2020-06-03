import React from "react"
import "../css/latest.css"
import Img from 'gatsby-image'

function Latest({ title, content, image, color }){
    return(
        <div className="latest-item">
            {<Img fluid={image.fluid} alt="trees" className="latest-img"/>}
            <div className="latest-item-text">
                <h5 style={{color: color}}>{title}</h5>
                <p>{content.content}</p>
            </div>
        </div>        
    )
}
export default Latest