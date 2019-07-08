import React from "react";

const ItemCard = prop =>(
<div style={{display:"inline-block",height:"300px",width:"200px", justifyContent:"space-around", alignItems:"center",
backgroundColor:"none", margin:"20px", }}>
    <img src={prop.Img} style={{height:"150px", width:"185px", margin:"10px"}}/>
    <p style={{backgroundColor:"none", borderTop:"solid", borderWidth:"1px", borderColor:"grey", lineHeight:"5px", fontSize:"20px"}}>
        <h2 style={{fontSize:"20px"}}>{prop.ItemName}</h2>
        {prop.ItemPrice}
    </p>
    <button style={{backgroundColor:"black", border:"none", height:"40px", width:"175px", borderRadius:"25px", color:"white",
fontSize:"15px"}}>Buy</button>
</div>
)

export default ItemCard;