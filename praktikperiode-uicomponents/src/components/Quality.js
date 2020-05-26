import React, {Component} from "react"
import Img from "../imgs/Quality_Icon.png"
import "../css/quality.css"


class Quality extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="Quality">
                <img src={Img} alt="QUALITY CHECK"/>
                <div className="Quality-text">
                    <h1>QUALITY CHECK</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar.</p>
                </div>
           </div>
        )
    }
}
export default Quality
