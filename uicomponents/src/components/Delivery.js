import React from "react"
import "../css/delivery.css"
import Img from 'gatsby-image'

function Delivery ({ title, content, image }){
    return(
        <div id="Delivery">
            {<Img fluid={image.fluid} alt="on time delivery"/>}
            <div className="delivery-text">
                <h1>{title}</h1>
                <p>{content.content}</p>
            </div>
        </div>
    )

}
export default Delivery
