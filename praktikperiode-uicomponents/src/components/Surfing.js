import React, {Component} from "react"
import Img1 from "../imgs/Rectangle 2.png"
import "../css/surfing.css"



class Surfing extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="Surfing">
               <img src={Img1} alt="Surfing"/>
               <div className="surfing-text">
                   <h4>TRAVEL</h4>
                   <h1>Surfing in Maldives</h1>
                   <p>It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>
               </div>
           </div>
        )
    }
}
export default Surfing
