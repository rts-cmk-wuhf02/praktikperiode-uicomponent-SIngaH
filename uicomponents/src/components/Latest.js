import React from "react"
import "../css/latest.css"
import Img from 'gatsby-image'

function Latest({ title, content, image }){
    return(
        <div className="latest-item">
            {<Img fluid={image.fluid} alt="trees" className="latest-img"/>}
            <div className="latest-item-text">
                <h5>{title}</h5>
                <p>{content.content}</p>
            </div>
        </div>        
    )
}
export default Latest