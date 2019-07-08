import React from "react";
import ItemCard from "../Content/ItemCard";

const Kobe = ()=>(
    <div>
        <h2> The Kobe Bryant Collection</h2>

                {/* Player specific Items*/}
                <ItemCard
            Img={require("../Images/O.jpg")}
            ItemName="Kobe VII"
            ItemPrice="$200"
        />

        <ItemCard
            Img={require("../Images/O.jpg")}
            ItemName="Kobe IX"
            ItemPrice="$250"
        />

        <ItemCard
            Img={require("../Images/O.jpg")}
            ItemName="Kobe III"
            ItemPrice="$220"
        />

        <ItemCard
            Img={require("../Images/O.jpg")}
            ItemName="Kobe Graphic T"
            ItemPrice="$50"
        />

        <ItemCard
            Img={require("../Images/O.jpg")}
            ItemName="Kobe Graphic T"
            ItemPrice="$50"
        />
    </div>
);

export default Kobe;