import React from "react"
import "../css/must-see.css"
import Img from 'gatsby-image'

function MustSee({ title, label, content, images }){
    return(
        <div id="MustSee">
            <Img fluid={images[0].fluid} alt="ocean and trees" className="mustsee-first-img"/>
            <Img fluid={images[1].fluid} alt="like" className="mustsee-heart on-img"/>
            <div className="new-york-times on-img">
                <Img fluid={images[2].fluid} alt="new york times logo" className="mustsee-logo"/>
                <h2>{label}</h2>
            </div>
            <h1 className="on-img">{title}</h1>
            <p className="on-img">{content.content}</p>
        </div>           
    )

}
export default MustSee