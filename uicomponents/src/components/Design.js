import React from "react"
import Img from 'gatsby-image'

function Design({ title, image }){
    const DesignStyle={backgroundColor:"var(--nd-greenblue)", borderRadius: "1rem", padding:"5%", width:"35%", display:"grid", textAlign:"center", color:"#fff"}
    const ImgStyles={width:"47%", placeSelf:"center"}
    return(
        <div id="Design" style={DesignStyle}>
            {<Img fluid={image.fluid} alt="design" style={ImgStyles}/>}
            <h2>{title}</h2>
        </div>
    )    
}
export default Design