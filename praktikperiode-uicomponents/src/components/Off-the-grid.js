import React from "react"
import "../css/off-the-grid.css"
import Img from 'gatsby-image'


function OffTheGrid ({ title, content, image }){
    return(
        <div id="OffTheGrid">
            <h3>COLLECTION #10</h3>
            {<Img src={Img} alt="Off The Grid" className="off-the-grid-first-img"/>}
            {<Img src={Img2} alt="woman in circle" className="OffTheGrid-circle-img"/>}
            <div className="OffTheGrid-text">
                <h2>Off-the-grid experiences</h2>
                <p>By: Melanie S.</p>
            </div> 
        </div>           
    )
}
export default OffTheGrid
