import React from "react"
import "../css/arcitecture.css"
import Img from 'gatsby-image'

function Arcitecture({ title, content, image }){
    return(
        <div id="Arcitecture">
            {<Img fluid={image.fluid} alt="Arcitecture"/>}
            <div className="arcitecture-text">
                <h5>{title}</h5>
                <p>{content.content}</p>
            </div>
        </div>
    )
}
export default Arcitecture
