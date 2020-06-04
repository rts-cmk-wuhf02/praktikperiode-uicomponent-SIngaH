import React from "react"
import "../css/must-see.css"
import heart from "../Heart.svg"
//Heart behøver at være statisk fordi man kan ikke have en svg på contentful og hjertet ser slemt ud som png
import Img from 'gatsby-image'

function MustSee({ title, label, content, images }){
    console.log(images)
    return(
        <div id="MustSee">
            {<Img fluid={images[0].fluid} alt="ocean and trees" className="mustsee-first-img"/>}
            {/* {<Img fluid={images[2].fluid} alt="like" className="mustsee-heart on-img"/>} */}
            <img src={heart} alt="heart" className="mustsee-heart on-img"/>
            <div className="new-york-times on-img">
                {<Img fluid={images[1].fluid} alt="new york times logo" className="mustsee-logo"/>}
                <h2>{label}</h2>
            </div>
            <h1 className="on-img">{title}</h1>
            <p className="on-img">{content.content}</p>
            {<Img fluid={images[3].fluid} alt="sliders" className="sliders"/>}
        </div>           
    )

}
export default MustSee