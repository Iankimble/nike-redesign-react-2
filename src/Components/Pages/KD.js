import React from "react";
import ItemCard from "../Content/ItemCard";

const KD = ()=>(
    <div>
        <h2>The Kevin Durant Collection</h2>

        {/* Player specific Items*/}
        <ItemCard
            Img={require("../Images/O.jpg")}
            ItemName="KD VII"
            ItemPrice="$200"
        />

        <ItemCard
            Img={require("../Images/O.jpg")}
            ItemName="KD X"
            ItemPrice="$250"
        />

        <ItemCard
            Img={require("../Images/O.jpg")}
            ItemName="KD IV"
            ItemPrice="$220"
        />

        <ItemCard
            Img={require("../Images/O.jpg")}
            ItemName="KD Graphic T"
            ItemPrice="$50"
        />

        <ItemCard
            Img={require("../Images/O.jpg")}
            ItemName="KD Grapgic T"
            ItemPrice="$50"
        />
    </div>
);

export default KD;