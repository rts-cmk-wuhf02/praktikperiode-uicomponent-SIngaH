import React, {Component} from "react"
import Img from "../imgs/Rectangle 16.png"
import Logo from "../imgs/News_logo.png"
import Heart from "../imgs/Heart.png"
import "../css/must-see.css"

class MustSee extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="MustSee">
                <img src={Img} alt="ocean and trees" className="mustsee-first-img"/>
                <img src={Heart} alt="like" className="mustsee-heart on-img"/>
                <div className="new-york-times on-img">
                    <img src={Logo} alt="new york times logo" className="mustsee-logo"/>
                    <h2>THE NEW YORK TIMES</h2>
                </div>
                <h1 className="on-img">Must see places for summer</h1>
                <p className="on-img">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar.</p>
           </div>           
        )
    }
}
export default MustSee