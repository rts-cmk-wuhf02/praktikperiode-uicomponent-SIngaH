import React, {Component} from "react"
import Img from "../imgs/Rectangle 37.png"
import "../css/greenery.css"


class Greenery extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="Greenery">
                <img src={Img} alt="trees"/>
                <div className="greenery-text">
                    <h5>GREENERY</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas </p>
                </div>
           </div>
        )
    }
}
export default Greenery
