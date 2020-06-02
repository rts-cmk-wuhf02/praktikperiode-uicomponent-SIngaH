import React from "react"
import "../css/off-the-grid.css"
import Img from 'gatsby-image'


function OffTheGrid ({ title, label, images, author }){
    return(
        <div id="OffTheGrid">
            <h3>{label}</h3>
            {<Img fluid={images[0].fluid} alt="Off The Grid" className="off-the-grid-first-img"/>}
            {<Img fluid={images[1].fluid} alt="woman in circle" className="OffTheGrid-circle-img"/>}
            <div className="OffTheGrid-text">
                <h2>{title}</h2>
                <p>{author}</p>
            </div> 
        </div>           
    )
}
export default OffTheGrid
