import React, {Component} from "react";
import Surfing from "./components/Surfing"
import Outdoor from "./components/Outdoor"
import Delivery from "./components/Delivery"
const contentful = require("contentful");

class App extends Component{
    constructor(){
        super()
        this.state = {
            articles : []
        }
    }

    render(){
        return(
           <div id="wrapper">
               <Surfing/>
               <Outdoor/>
               <div id="four-little-boxes">
                    <Delivery/>
                    <Delivery/>
                    <Delivery/>
                    <Delivery/>
               </div>
           </div>
        )
    }
}
export default App

/*
for later 

    componentDidMount(){
        fetch("https://cdn.contentful.com/spaces/l7i7lm6yrnxh?access_token=d7VBCE2RDvIFSae64zF_EyRjjiNdms7T2JMExYTFEYk")
        .then(response => response.json())
        .then(result => console.log(result))
    }

*/
/*
Just in  case

        // const client = contentful.createClient({
        //     // This is the space ID. A space is like a project folder in Contentful terms
        //     space: "l7i7lm6yrnxh",
        //     // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        //     accessToken: "d7VBCE2RDvIFSae64zF_EyRjjiNdms7T2JMExYTFEYk"
        // });
        // client.getEntries({content_type: "post"}).then((response) =>{
        //     this.setState({articles: response.items});
        //     console.log(response);
        // })
*/