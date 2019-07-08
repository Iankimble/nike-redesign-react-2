import React from "react";
import ItemCard from "../Content/ItemCard";

const Jordan = () => (
    <div>
        <h2>The Michael Jordan Store</h2>
{/* Player specific Art*/}


{/* Player specific Items*/}
        <ItemCard
            Img={require("../Images/jordan33.jpg")}
            ItemName="Jordan 33"
            ItemPrice="$200"
        />

        <ItemCard
            Img={require("../Images/jordan33.jpg")}
            ItemName="Jordan 1"
            ItemPrice="$250"
        />

        <ItemCard
            Img={require("../Images/jordan33.jpg")}
            ItemName="Jordan 3"
            ItemPrice="$220"
        />

        <ItemCard
            Img={require("../Images/jordan33.jpg")}
            ItemName="Jordan Graphic T"
            ItemPrice="$50"
        />

        <ItemCard
            Img={require("../Images/jordan33.jpg")}
            ItemName="Jordan Graphic T"
            ItemPrice="$50"
        />

    </div>
);

export default Jordan;
