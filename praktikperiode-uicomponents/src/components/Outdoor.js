import React, {Component} from "react"
import Img1 from "../imgs/Rectangle 52.jpg"
import Img2 from "../imgs/Rectangle 53.jpg"
import Img3 from "../imgs/Rectangle 54.jpg"
import Img4 from "../imgs/Rectangle 55.jpg"
import "../css/Outdoor.css"


class Outdoor extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="Outdoor">
               <img src={Img1} alt="water and mountains" className="first-img"/>
                <button>Leasure</button>
                <h1>Outdoor Experience</h1>
                <p>It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>
                <div className="little-imgs">
                    <img src={Img2} alt="mountains and water"/>
                    <img src={Img3} alt="snow"/>
                    <img src={Img4} alt="mountains"/>
                </div>
              
           </div>
        )
    }
}
export default Outdoor
