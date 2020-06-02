import React, {Component} from "react"
import educationIcon from "../imgs/Education_Icon.png"

class Education extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        const EducationStyle={backgroundColor:"var(--fourth-blue)", borderRadius: "1rem", padding:"5%", width:"35%", display:"grid", textAlign:"center", color:"#fff"}
        const ImgStyles={width:"47%", placeSelf:"center"}
        return(
           <div id="Education" style={EducationStyle}>
               <img src={educationIcon} alt="Education" style={ImgStyles}/>
               <h2>EDUCATION</h2>
           </div>
        )    
    }
}
export default Education