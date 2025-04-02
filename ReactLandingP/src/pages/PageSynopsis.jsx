import "./PageSynopsis.css";
import React, { useEffect, useRef } from "react";
import { initializeSplide } from "../global/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import HeaderThree from "../components/HeaderThree";
import SplideDiamond from "../components/images/DiamondSplide.svg"

function PageSynopsis() {

    const containerRef = useRef(null);
        const lenis = useLenis(({ scroll }) => {});
    
        useEffect(() => {
            initializeSplide();
        }, []); // Add an empty dependency array to run the effect only once

    return (

    <ReactLenis root>
        <main ref={containerRef} className="PageSynopsisMain">
            <HeaderThree />


        
        </main>
    </ReactLenis>


    )

}

export default PageSynopsis