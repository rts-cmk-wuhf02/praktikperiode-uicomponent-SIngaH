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
import Travel from "./components/Travel"
import Greenery from "./components/Greenery"
import NewsDigest from "./components/NewsDigest"
import Beaches from "./components/Beaches"
import TheNewYorkTimes from "./components/TheNewYorkTimes"
import SecondNewYorkTimes from "./components/SecondNewYorkTimes"
import Virtual from "./components/Virtual"
// const contentful = require("contentful");

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
                <Travel/>
                <Greenery/>
                <NewsDigest/>
                <Beaches/>
                <TheNewYorkTimes/>
                <SecondNewYorkTimes/>
                <Virtual/>
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