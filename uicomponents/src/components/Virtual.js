import React from "react"
import "../css/Virtual.css"
import Img from 'gatsby-image'

function Virtual({ title, label, image }){
    const h2Styles = {zIndex:2, placeSelf:"start center", fontSize:"29px"};
    const h5Styles = {zIndex: 2, placeSelf:"end", padding:"7% 10%", color:"var(--ln-orange)"}
    return(
        <div id="Virtual">
            {<Img fluid={image.fluid} alt="virtual reality" className="virtual-background"/>}
            <h2 style={h2Styles}>{title}</h2>
            <h5 style={h5Styles}>{label}</h5>
        </div>
    )
}
export default Virtual