import React from "react"
import "../css/arcitecture.css"
import Img from 'gatsby-image'

function Arcitecture({ title, content, image, color }){
    return(
        <div id="Arcitecture"> 
            {<Img fluid={image.fluid} alt="Arcitecture" className="arcitecture-background"/>}
            <div className="arcitecture-text">
                <h5 style={{color: color}}>{title}</h5>
                <p>{content.content}</p>
            </div>
        </div>
    )
}
export default Arcitecture
