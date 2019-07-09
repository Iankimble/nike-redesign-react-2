import React from "react";
import ItemCard from "../Content/ItemCard";
import HeroImage from "../Content/HeroImage";

const KD = () => (
    <div>
        <h2>The Kevin Durant Collection</h2>

        <HeroImage
            HeroImg={require("../Images/kdHeroImage.jpg")}
        />

        {/* Player specific Items*/}
        <ItemCard
            Img={require("../Images/kd7.jpg")}
            ItemName="KD VII"
            ItemPrice="$200"
        />

        <ItemCard
            Img={require("../Images/kd10.jpg")}
            ItemName="KD X"
            ItemPrice="$250"
        />

        <ItemCard
            Img={require("../Images/kd4.jpg")}
            ItemName="KD IV"
            ItemPrice="$220"
        />

        <ItemCard
            Img={require("../Images/kdT1.jpg")}
            ItemName="KD Graphic T"
            ItemPrice="$50"
        />

        <ItemCard
            Img={require("../Images/kdT2.jpg")}
            ItemName="KD Grapgic T"
            ItemPrice="$50"
        />
    </div>
);

export default KD;