import React, {Component} from "react"
import Img from "../imgs/Group 4.png"
import "../css/customer.css"

class Customer extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="Customer">
                <img src={Img} alt="Customer"/>
                <div className="Customer-text">
                    <h1>COSTUMER SERVICE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar.</p>
                </div>
           </div>
        )
    }
}
export default Customer
