import React from "react";
import ItemCard from "../Content/ItemCard";
import HeroImage from "../Content/HeroImage";

const LeBron = () => (

    <div>
        <h2>The LeBron James Collection</h2>

        <HeroImage
            HeroImg={require("../Images/lebronHeroImg.jpg")}
        />

        {/* Player specific Items*/}
        <ItemCard
            Img={require("../Images/lebron10.jpg")}
            ItemName="LeBron X"
            ItemPrice="$200"
        />

        <ItemCard
            Img={require("../Images/lebron11.jpg")}
            ItemName="LeBron XI"
            ItemPrice="$250"
        />

        <ItemCard
            Img={require("../Images/lebron13.jpg")}
            ItemName="LeBron XIII"
            ItemPrice="$220"
        />

        <ItemCard
            Img={require("../Images/lebronT1.jpeg")}
            ItemName="LeBron Graphic T"
            ItemPrice="$50"
        />

        <ItemCard
            Img={require("../Images/lebronT2.jpg")}
            ItemName="LeBron Graphic T"
            ItemPrice="$50"
        />
    </div>

)

export default LeBron;