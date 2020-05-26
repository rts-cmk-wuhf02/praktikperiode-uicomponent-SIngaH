import React, {Component} from "react"
import Img from "../imgs/Parcels_Icon.png"
import "../css/parcels.css"

class Parcels extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="Parcels">
                <img src={Img} alt="Parcels"/>
                <div className="Parcels-text">
                    <h1>PARCELS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar.</p>
                </div>
           </div>
        )
    }
}
export default Parcels
