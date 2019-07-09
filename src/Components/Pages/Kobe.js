import React from "react";
import ItemCard from "../Content/ItemCard";
import HeroImage from "../Content/HeroImage";

const Kobe = () => (
    <div>
        <h2> The Kobe Bryant Collection</h2>

        <HeroImage
            HeroImg={require("../Images/kobeHeroImg.jpg")}
        />

        {/* Player specific Items*/}
        <ItemCard
            Img={require("../Images/kobe7.jpg")}
            ItemName="Kobe VII"
            ItemPrice="$200"
        />

        <ItemCard
            Img={require("../Images/kobe9.jpg")}
            ItemName="Kobe IX"
            ItemPrice="$250"
        />

        <ItemCard
            Img={require("../Images/kobe3.jpg")}
            ItemName="Kobe III"
            ItemPrice="$220"
        />

        <ItemCard
            Img={require("../Images/kobeT1.jpg")}
            ItemName="Kobe Graphic T"
            ItemPrice="$50"
        />

        <ItemCard
            Img={require("../Images/kobeT2.jpg")}
            ItemName="Kobe Graphic T"
            ItemPrice="$50"
        />
    </div>
);

export default Kobe;