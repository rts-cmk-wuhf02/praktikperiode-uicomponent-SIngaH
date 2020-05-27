import React, {Component} from "react"
import Img from "../imgs/Rectangle 21.png"
import "../css/travel.css"


class Travel extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="Travel">
                <img src={Img} alt="mountains and water"/>
                <div className="travel-text">
                    <h5>TRAVEL & LEISURE</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas </p>
                </div>
           </div>
        )
    }
}
export default Travel
