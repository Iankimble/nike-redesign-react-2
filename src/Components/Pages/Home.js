import React from "react";
import SwooshCard from "../Content/SwooshCard";

const Home= ()=>(
<div style={{backgroundColor:"none"}}>

    
    <h1>Nike Basketball Icon Collection</h1>
    
    
    <SwooshCard 
    Route = "/LeBron"
    SwooshArt = {require("../Images/lebronSwoosh1.jpg")}
    />

        <SwooshCard 
    Route = "/KD"
    SwooshArt = {require("../Images/kdSwoosh1.jpg")}
    />

        <SwooshCard 
    Route = "/Jordan"
    SwooshArt = {require("../Images/jordanSwoosh1.jpg")} 
    />

        <SwooshCard 
    Route = "/Kobe"
    SwooshArt = {require("../Images/kobeSwoosh1.jpg")}
    />

</div>
);

export default Home