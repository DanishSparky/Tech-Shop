import React from "react";
import HeroSliders from "../components/HeroSliders";
import FeaturedProducts from "../components/FeaturedProducts";
import TopProducts from "../components/TopProducts";
import Footer from "../components/Footer";
import Advantages from "../components/Advantages";

const Home = () => {
    return (
        <>
            <HeroSliders/>
            <FeaturedProducts />
            <TopProducts />
            <Advantages/>
            <Footer/>
        </>
    )
}
export default Home