import React, {Component} from "react"
import Img from "../imgs/Rectangle 38.png"
import "../css/beaches.css"


class Beaches extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="Beaches">
                <img src={Img} alt="water and mountains"/>
                <div className="beaches-text">
                    <h5>BEACHES</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas </p>
                </div>
           </div>
        )
    }
}
export default Beaches
