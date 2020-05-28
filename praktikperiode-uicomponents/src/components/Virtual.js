import React, {Component} from "react"
import background from "../imgs/Mask Group 1.jpg"
import "../css/Virtual.css"

class Virtual extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        const h2Styles = {zIndex:2, placeSelf:"start center", fontSize:"29px"};
        const h5Styles = {zIndex: 2, placeSelf:"end", padding:"7% 10%", color:"var(--ln-orange)"}
        return(
           <div id="Virtual">
               <img src={background} alt="virtual reality" className="virtual-background"/>
               <h2 style={h2Styles}>Virtual Reality</h2>
               <h5 style={h5Styles}>TECHNOLOGY</h5>
           </div>
        )
    }
}
export default Virtual