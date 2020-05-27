import React, {Component} from "react"
import Img from "../imgs/Rectangle 13.png"
import Img2 from "../imgs/Ellipse 33.png"
import "../css/off-the-grid.css"

class OffTheGrid extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="OffTheGrid">
                <h3>COLLECTION #10</h3>
                <img src={Img} alt="Off The Grid" className="off-the-grid-first-img"/>
                <img src={Img2} alt="woman in circle" className="OffTheGrid-circle-img"/>
                <div className="OffTheGrid-text">
                    <h2>Off-the-grid experiences</h2>
                    <p>By: Melanie S.</p>
                </div>
           </div>           
        )
    }
}
export default OffTheGrid
