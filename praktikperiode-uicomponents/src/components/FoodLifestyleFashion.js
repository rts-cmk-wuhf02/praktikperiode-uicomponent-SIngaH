import React, {Component} from "react"
import FoodLifestyle from "../imgs/Rectangle 20.png"
import Fashion from "../imgs/Rectangle 22.png"
import "../css/food-lifestyle-fashion.css"

class FoodLifestyleFashion extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="FoodLifestyleFashion">
               <div className="food-lifestyle">
                    <img src={FoodLifestyle} alt="honey" className="flf-img"/>
                    <div className="flf-item-text">
                        <h5 className="pink">FOOD & LIFESTYLE</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam</p>
                    </div>
               </div>

               <div className="fashion">
                   <img src={Fashion} alt="woman" className="flf-img"/>
                   <div className="flf-item-text">
                        <h5 className="blue">FASHION</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam</p>
                    </div>
               </div>
           </div>           
        )
    }
}
export default FoodLifestyleFashion