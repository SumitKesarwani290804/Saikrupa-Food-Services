import React from "react";
import Navbar from "../components/Navbar";
import Imagesilder from "../components/Imagesilder";
import Googlemap from "../components/googlemap";
import FooterSection from "../components/footer";
import MenuCards from "../components/menu-card";

function Homepage() {
    return (
        <>
            <Navbar />
            <Imagesilder />
            <MenuCards />
            <Googlemap />
            <FooterSection />
        </>
    )
}

export default Homepage;