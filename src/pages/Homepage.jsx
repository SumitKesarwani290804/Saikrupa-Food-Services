import React from "react";  
import Navbar from "../components/Navbar";
import Imagesilder from "../components/Imagesilder";
import Googlemap from "../components/googlemap";

function Homepage () {
    return(
        <>
            <Navbar />
            <Imagesilder />
            <Googlemap />
        </>
    )
}

export default Homepage;