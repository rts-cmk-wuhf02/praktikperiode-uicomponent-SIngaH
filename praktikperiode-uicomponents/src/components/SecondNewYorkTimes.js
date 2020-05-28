import React, {Component} from "react"
import Logo from "../imgs/News_logo.png"
import Background from "../imgs/Rectangle 35.png"
import "../css/second-new-york-times.css"

class SeconsNewYorkTimes extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="SeconsNewYorkTimes">
               <img src={Background} alt="mountains" className="nyt-background"/>
               <div className="second-new-york-logo">
                    <img src={Logo} alt="The new york times logo" className="nyt-logo"/>
                    <h2>THE NEW YORK TIMES</h2>
               </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar.</p>
                <button>READ MORE</button>
           </div>
        )
    }
}
export default SeconsNewYorkTimes
