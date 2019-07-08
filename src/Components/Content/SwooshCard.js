import React from "react";
import { Link } from "react-router-dom";

const SwooshCard = prop => (

    <div style={{backgroundColor:"none",display:"inline-block",margin:"10px", height:"325px"}}> 
        <Link to={prop.Route}>
            <img src={prop.SwooshArt} style={{height:"300px",width:"300px"}}/>
        </Link>

    </div>

);

export default SwooshCard;