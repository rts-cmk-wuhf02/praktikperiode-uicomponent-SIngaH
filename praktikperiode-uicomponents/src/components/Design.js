import React, {Component} from "react"
import desingIcon from "../imgs/Desgin_Icon.png"

class Design extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        const DesignStyle={backgroundColor:"var(--nd-greenblue)", borderRadius: "1rem", padding:"5%", width:"35%", display:"grid", textAlign:"center", color:"#fff"}
        const ImgStyles={width:"47%", placeSelf:"center"}
        return(
           <div id="Design" style={DesignStyle}>
               <img src={desingIcon} alt="design" style={ImgStyles}/>
               <h2>DESIGN</h2>
           </div>
        )    
    }
}
export default Design