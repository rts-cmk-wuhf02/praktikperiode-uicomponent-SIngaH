import React, {Component} from "react"
import Img from "../imgs/On_time_delivery_icon.png"
import "../css/delivery.css"


class Delivery extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="Delivery">
                <img src={Img} alt="on time delivery"/>
                <div className="delivery-text">
                    <h1>ON-TIME DELIVERY</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar.</p>
                </div>
           </div>
        )
    }
}
export default Delivery
