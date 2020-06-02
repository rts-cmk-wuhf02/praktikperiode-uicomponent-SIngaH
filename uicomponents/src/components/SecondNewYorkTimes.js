import React from "react"
import "../css/second-new-york-times.css"
import Img from 'gatsby-image'

function SeconsNewYorkTimes({ title, content, images, button }){
    return(
        <div id="SeconsNewYorkTimes">
            {<Img fluid={images[1].fluid} alt="mountains" className="nyt-background"/>}
            <div className="new-york-logo">
                {<Img fluid={images[0].fluid} alt="The new york times logo"/>}
                <h2>{title}</h2>
            </div>
            <p>{content.content}</p>
            <button>{button}</button>
        </div>
    )
}
export default SeconsNewYorkTimes