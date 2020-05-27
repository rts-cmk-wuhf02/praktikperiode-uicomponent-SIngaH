import React, {Component} from "react"
import Img from "../imgs/Rectangle 14.png"
import Img2 from "../imgs/Ellipse 34.png"
import "../css/shapes.css"

class Shapes extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="Shapes">
                <h3>COLLECTION #1</h3>
                <img src={Img} alt="Off The Grid" className="Shapes-first-img"/>
                <img src={Img2} alt="woman in circle" className="Shapes-circle-img"/>
                <div className="Shapes-text">
                    <h2>Shapes, triangles & fashion</h2>
                    <p>By: Saraha F.</p>
                </div>
           </div>           
        )
    }
}
export default Shapes
