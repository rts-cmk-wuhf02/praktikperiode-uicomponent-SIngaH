import React, {Component} from "react"
// import LatestSub from "./Latest-sub-component"
import Trees from "../imgs/Rectangle 29.png"
import Lion from "../imgs/Rectangle 30.png"
import Headphones from "../imgs/Rectangle 31.png"
import Mountain from "../imgs/Rectangle 32.png"
import Africa from "../imgs/Rectangle 33.png"

import "../css/latest.css"

class Latest extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="Latest">
               <h2 className="latest-news">LATEST NEWS</h2>
               <div className="latest-item">
                    <img src={Trees} alt="trees" className="latest-img"/>
                    <div className="latest-item-text">
                        <h5>NATURE</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam</p>
                    </div>
               </div>
               <div className="latest-item">
                   <img src={Lion} alt="lion" className="latest-img"/>
                   <div className="latest-item-text">
                        <h5>ANIMAL KINGDOM</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam</p>
                    </div>
               </div>
               <div className="latest-item">
                    <img src={Headphones} alt="Headphones" className="latest-img"/>
                    <div className="latest-item-text">
                        <h5>TECHNOLOGY</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam</p>
                    </div>
               </div>
               <div className="latest-item">
                   <img src={Mountain} alt="Mountain" className="latest-img"/>
                   <div className="latest-item-text">
                        <h5>EXPLORE</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam</p>
                    </div>
               </div>
               <div className="latest-item">
                    <img src={Africa} alt="Africa" className="latest-img"/>
                    <div className="latest-item-text">
                        <h5>AFRICA ZOO</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam</p>
                    </div>
               </div>
               <h2 className="more-news">MORE NEWS</h2>
           </div>           
        )
    }
}
export default Latest