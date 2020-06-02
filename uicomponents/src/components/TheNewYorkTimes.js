import React, {Component} from "react"
import Logo from "../imgs/News_logo.png"
import "../css/the-new-york-times.css"

class TheNewYorkTimes extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="TheNewYorkTimes">
               <div className="new-york-logo">
                    <img src={Logo} alt="The new york times logo"/>
                    <h2>THE NEW YORK TIMES</h2>
               </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar.</p>
                <button>READ MORE</button>
           </div>
        )
    }
}
export default TheNewYorkTimes