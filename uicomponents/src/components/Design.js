import React from "react"
import Img from 'gatsby-image'

function Design({ title, image, color }){
    const DesignStyle={backgroundColor: color, borderRadius: "1rem", padding:"5%", width:"35%", display:"grid", textAlign:"center", color:"#fff"}
    const ImgStyles={width:"47%", placeSelf:"center"}
    return(
        <div id="Design" style={DesignStyle}>
            {<Img fluid={image.fluid} alt="design" style={ImgStyles}/>}
            <h2 style={{fontSize:"17px"}}>{title}</h2>
        </div>
    )    
}
export default Design