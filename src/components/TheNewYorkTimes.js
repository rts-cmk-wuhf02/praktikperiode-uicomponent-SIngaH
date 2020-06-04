import React from "react"
import "../css/the-new-york-times.css"
import Img from 'gatsby-image'

function TheNewYorkTimes({ title, content, images, button }){
    return(
        <div id="TheNewYorkTimes">
            <div className="new-york-logo">
                {<Img fluid={images[0].fluid} alt="The new york times logo" className="tnyt-logo"/>}
                <h2>{title}</h2>
            </div>
            <p>{content.content}</p>
            <button>{button}</button>
        </div>
    )
}
export default TheNewYorkTimes