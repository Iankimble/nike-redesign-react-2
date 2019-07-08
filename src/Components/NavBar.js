import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <div>

        <nav style={{backgroundColor:"none", display:"flex",justifyContent:"space-around", alignItems:"center"}}>
    
            <Link to="/">
                <a style={{float:"left"}}> 
                <img src={require("./Images/swoosh.jpg")} style={{height:"75px",width:"85px",justifyContent:"space-around",alignItems:"center"}}/>
                </a>
            </Link>

            <ul style={{display:"inline-block",float:"right"}}>
                <Link to="/LeBron">
                    <li style={{listStyle:"none",color:"black", display:"inline-block", margin:"10px", justifyContent:"space-around" }}>LeBron</li>
                </Link>

                <Link to="/KD">
                    <li style={{listStyle:"none",color:"black", display:"inline-block", margin:"10px", justifyContent:"space-around" }}>KD</li>
                </Link>

                <Link to="Jordan">
                    <li style={{listStyle:"none",color:"black", display:"inline-block", margin:"10px", justifyContent:"space-arond"}}>Jordan</li>
                </Link>

                <Link to="/Kobe">
                    <li style={{listStyle:"none",color:"black", display:"inline-block", margin:"10px", justifyContent:"space-around" }}>Kobe</li>
                </Link>

            <img src={require("./Images/cart.jpg")} style={{height:"40px",width:"40px",float:"right",justifyContent:"space-around", paddingLeft:"20px"}}/>

            </ul>
        </nav>
    </div>
)

export default NavBar;