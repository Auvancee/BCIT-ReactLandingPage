import "./PageSynopsis.css";
import React, { useEffect, useRef } from "react";
import { initializeSplide } from "../global/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import HeaderThree from "../components/HeaderThree";
import FooterTwo from "../components/FooterTwo";
import SplideDiamond2 from "../components/images/DiamondSplide.svg"


import Profile1 from "../components/images/Portrait1.png";
import Profile2 from "../components/images/Portrait2.png";



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

            {/* HERO Section that contains everything on the first screen */}
            <section className="SynopsisHeroSection">
                    <div className="SynopsisIntro">
                        <h2>Design Driven. Powered By Code.</h2>
                        <h1>Hafiz Aakif Umar</h1>
                    </div>

            </section>

            {/* Work Section */}
            <section className="ContainerBlack">

                        <div className="splide">
                               <div className="splide__track splide__track">
                                   <ul className="splide__list">
                                       <li className="splide__slide">SYNOPSIS</li>
                                       <li className="splide__slide"><img className="SocialIcon2" src={SplideDiamond2} alt="" /></li>
                                       <li className="splide__slide">SYNOPSIS</li>
                                       <li className="splide__slide"><img className="SocialIcon2" src={SplideDiamond2} alt="" /></li>
                                       <li className="splide__slide">SYNOPSIS</li>
                                       <li className="splide__slide"><img className="SocialIcon2" src={SplideDiamond2} alt="" /></li>
                                   </ul>
                               </div>
                       </div>            


                    <article className="SynopsisContainer" id="Synopsis">

                        <div className="SynopsisTitle">
                            <h4>(SYNOPSIS)</h4>
                            <h3><span className="SHighLight1">DEVELOPER <br/></span><span className="SHighLight2">DESIGNER &</span> STUDENT</h3>
                        </div>

                        <div className="LeftColumn">
                            <img src={Profile1} alt="" />
                            <p>A young student captivated by the digital space, 
                                focused on blending aesthetics with functionality, ensuring a 
                                seamless journey & achieving perfection.
                            </p>
                        </div>

                        <div className="RightColumn">
                            <img src={Profile2} alt="" />

                            <div className="RightColumnContent">
                                <p>As a Creative Developer, I focus
                                    on building incredible web experiences with user centric
                                    principles that leaves a lasting impact.
                                </p>

                                <p>When I'm not developing, I turn
                                    my attention to building my brand,
                                    working out & stare at antique
                                    cars for hours!
                                </p>
                            </div>
                        </div>

                    </article>


                    <article className="SkillsetContainer" id="Skillset">

                        <div className="SkillsetTitle">
                            <h4>(SKILLSET)</h4>
                            <h3>FAMILIAR WITH WHAT I DO</h3>
                        </div>

                    </article>

                {/* <FooterTwo/>  
                <br/><br/> */}
            </section>
        
        </main>
    </ReactLenis>


    )

}

export default PageSynopsis