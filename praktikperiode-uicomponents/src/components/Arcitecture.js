import React, {Component} from "react"
import Img from "../imgs/Rectangle 19.png"
import "../css/arcitecture.css"


class Arcitecture extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="Arcitecture">
                <img src={Img} alt="Arcitecture"/>
                <div className="arcitecture-text">
                    <h5>ARCHITECTURE</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas </p>
                </div>
           </div>
        )
    }
}
export default Arcitecture
