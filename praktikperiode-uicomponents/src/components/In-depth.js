import React, {Component} from "react"
import Img from "../imgs/Rectangle 15.png"
import Img2 from "../imgs/Ellipse 35.png"
import "../css/in-depth.css"

class InDepth extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="InDepth">
                <h3>COLLECTION #123</h3>
                <img src={Img} alt="Off The Grid" className="InDepth-first-img"/>
                <img src={Img2} alt="man in circle" className="InDepth-circle-img"/>
                <div className="InDepth-text">
                    <h2>In-depth architecture</h2>
                    <p>By: Benhour</p>
                </div>
           </div>           
        )
    }
}
export default InDepth
