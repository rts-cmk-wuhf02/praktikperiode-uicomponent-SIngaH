import React, {Component} from "react";
import Surfing from "./components/Surfing"
import Outdoor from "./components/Outdoor"
import Delivery from "./components/Delivery"
import Parcels from "./components/Parcels"
import Quality from "./components/Quality"
import Customer from "./components/Customer"
import OffTheGrid from "./components/Off-the-grid"
import Shapes from "./components/Shapes"
import InDepth from "./components/In-depth"
import MustSee from "./components/MustSee"
import Latest from "./components/Latest"
import FoodLifestyleFashion from "./components/FoodLifestyleFashion"
import Arcitecture from "./components/Arcitecture"
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
                    <Parcels/>
                    <Quality/>
                    <Customer/>
               </div>
                <OffTheGrid/>
                <Shapes/>
                <InDepth/>
                <MustSee/>
                <Latest/>
                <FoodLifestyleFashion/>
                <Arcitecture/>
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