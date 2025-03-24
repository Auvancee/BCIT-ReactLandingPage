import "./PageWorks.css";
import React, { useEffect, useRef } from "react";
import { initializeSplide } from "../global/splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import HeaderTwo from "../components/HeaderTwo";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import SplideDiamond from "../components/images/DiamondSplide.svg"
import FooterOne from "../components/FooterOne";




function PageWorks() {
    const containerRef = useRef(null);
    const lenis = useLenis(({ scroll }) => {});

    return (

    <ReactLenis root>
            <main ref={containerRef}>
                <HeaderTwo />




            </main>
    
    
    
    
    </ReactLenis>
        


    )

}

export default PageWorks