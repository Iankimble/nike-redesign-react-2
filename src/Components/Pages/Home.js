import React from "react";
import SwooshCard from "../Content/SwooshCard";

const Home= ()=>(
<div style={{backgroundColor:"none"}}>

    
    <h1>Nike Basketball Icon Collection</h1>
    
    
    <SwooshCard 
    Route = "/LeBron"
    SwooshArt = {require("../Images/swoosh.jpg")}
    />

        <SwooshCard 
    Route = "/KD"
    SwooshArt = {require("../Images/swoosh.jpg")}
    />

        <SwooshCard 
    Route = "/Jordan"
    SwooshArt = {require("../Images/swoosh.jpg")}
    />

        <SwooshCard 
    Route = "/Kobe"
    SwooshArt = {require("../Images/swoosh.jpg")}
    />

</div>
);

export default Home