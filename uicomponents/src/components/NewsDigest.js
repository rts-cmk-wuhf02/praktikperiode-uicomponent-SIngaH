import React, {Component} from "react"
import "../css/news-digest.css"

class NewsDigest extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="NewsDigest">
               <h2 className="news-headline">NEWS DIGEST</h2>
               <div className="news-item">
                   <div className="news-number number1">
                        <p>1</p>
                   </div>
                    <h2 className="news-item-h2">Technology</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit</p>
               </div>
               <div className="news-item">
                   <div className="news-number number2">
                        <p>2</p>
                   </div>
                    <h2 className="news-item-h2">Nature</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit</p>
               </div>
               <div className="news-item">
                   <div className="news-number number3">
                        <p>3</p>
                   </div>
                    <h2 className="news-item-h2">Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit</p>
               </div>
               <div className="news-item">
                   <div className="news-number number4">
                        <p>4</p>
                   </div>
                    <h2 className="news-item-h2">Development</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit</p>
               </div>
           </div>           
        )
    }
}
export default NewsDigest