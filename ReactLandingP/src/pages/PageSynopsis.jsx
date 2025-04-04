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

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import initScrollAnimation2 from "../global/projectscroll2"; // Desktop GSAP



function PageSynopsis() {

    const containerRef = useRef(null);
        const lenis = useLenis(({ scroll }) => {});

    useEffect(() => {
        let ctx = gsap.context(() => {
            initScrollAnimation2();
        }, containerRef);
        
        return () => ctx.revert(); // Clean up animation on unmount
    }, []);
    
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

                        <div className="SynopsisContent">
                            <p>Meticulosly crafted projects that have been designed, developed
                                & reviewed from the absolute bare bone. 
                            </p>
                        </div>

                        {/* Skillset Cards */}
                        <div className="cardskillset">

                            <div className="cardskill card-1">
                                <div className="card-contentskill">

                                <div className="cardskill-info">
                                    <h3>Search Optimization SEO</h3>
                            
                                    <p>
                                    Amplify your online presence with a website that truly connects with your audience's feelings and desires. I design stunning, high-converting sites that align with your business goals.
                                    </p>
                            
                                    <div className="cardskill-tags">
                                    <span>CMS Integration</span>
                                    <span>Motion & Animate</span>
                                    <span>3D Development</span>
                                    </div>
                                </div>
                            
                                {/* <!-- Hexagonal Icon (Right Side) --> */}
                                <div className="card-icon">
                                    {/* <!-- Insert Icon or SVG here --> */}
                                </div>

                                </div>
                            </div>

                            <div className="cardskill card-2">
                                <div className="card-contentskill">

                                <div className="cardskill-info">
                                    <h3>Search Optimization SEO</h3>
                            
                                    <p>
                                    Amplify your online presence with a website that truly connects with your audience's feelings and desires. I design stunning, high-converting sites that align with your business goals.
                                    </p>
                            
                                    <div className="cardskill-tags">
                                    <span>CMS Integration</span>
                                    <span>Motion & Animate</span>
                                    <span>3D Development</span>
                                    </div>
                                </div>
                            
                                {/* <!-- Hexagonal Icon (Right Side) --> */}
                                <div className="card-icon">
                                    {/* <!-- Insert Icon or SVG here --> */}
                                </div>

                                </div>
                            </div>

                            <div className="cardskill card-3">
                                <div className="card-contentskill">
                                
                                    <div className="cardskill-info">
                                    <h3>Search Optimization SEO</h3>

                                    <p>
                                        Amplify your online presence with a website that truly connects with your audience's feelings and desires. I design stunning, high-converting sites that align with your business goals.
                                    </p>

                                    <div className="cardskill-tags">
                                        <span>CMS Integration</span>
                                        <span>Motion & Animate</span>
                                        <span>3D Development</span>
                                    </div>
                                    </div>

                                    {/* <!-- Hexagonal Icon (Right Side) --> */}
                                    <div className="card-icon">
                                    {/* <!-- Insert Icon or SVG here --> */}
                                    </div>

                                </div>
                            </div>

                        </div>
                        




                    </article>


                    {/* CTA Section */}
                    <div className="CTABeforeTwo">
                        <h4>READY TO</h4>
                        <h5>TRANSFORM</h5>
                        <h4>YOUR EXPERIENCE?</h4>
                    </div>

                <FooterTwo/>  
                <br/><br/>
            </section>
        
        </main>
    </ReactLenis>


    )

}

export default PageSynopsis