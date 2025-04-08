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
                                       <li className="splide__slide"><span className="SplideHighlight">SYNOPSIS</span></li>
                                       <li className="splide__slide"><img className="SocialIcon2" src={SplideDiamond2} alt="" /></li>
                                       <li className="splide__slide"><span className="SplideHighlight">SYNOPSIS</span></li>
                                       <li className="splide__slide"><img className="SocialIcon2" src={SplideDiamond2} alt="" /></li>
                                       <li className="splide__slide"><span className="SplideHighlight">SYNOPSIS</span></li>
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
                            <p>A dedicated student passionate about the digital space, committed to 
                                harmonizing aesthetics & functionality to deliver seamless experiences 
                                & achieve digital excellence.
                            </p>
                        </div>

                        <div className="RightColumn">
                            <img src={Profile2} alt="" />

                            <div className="RightColumnContent">
                                <p>As a Creative Developer, I craft impactful web experiences 
                                    centered around user-centric design principles.
                                </p>

                                <p>In my spare time, I enjoy developing my own brand, 
                                    going to the gym, & admiring the classic beauty of vintage cars.
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
                            <p>A showcase of meticulously crafted projects—designed, developed, & 
                                refined to deliver exceptional results across multiple areas of the web industry.
                            </p>
                        </div>

                        {/* Skillset Cards */}
                        <div className="cardskillset">

                            <div className="cardskill card-1">
                                <div className="card-contentskill">

                                <div className="cardskill-info">
                                    
                                    <div className="cscontent1">
                                        <h3>Web Development</h3>
                                       
                                        <div className="card-number">
                                            <h4>1</h4>
                                        </div>
                                        
                                    </div>
                                    
                                    <br/>
                                        <div className="divider"></div> 
                                    <br/>

                                    <div className="cscontent2">
                                        <p>
                                            Specialized in crafting modern websites built with clean, efficient code, 
                                            optimized for performance and scalability. Integration with innovative 
                                            technologies & micro animations ensuring a seamless functionality to 
                                            your needs.
                                        </p>
                                
                                        <div className="cardskill-tags">
                                            <span>CMS Integration</span>
                                            <span>Motion & Animate</span>
                                            <span>3D Development</span>
                                        </div>
                                    </div>

                                </div>
                                    

                                    
                                    

                                </div>
                            </div>

                            <div className="cardskill card-2">
                                <div className="card-contentskill">

                                <div className="cardskill-info">
                                    
                                    <div className="cscontent1">
                                        <h3>Web Design | UX/UI</h3>
                                        <div className="card-number">
                                            <h4>2</h4>
                                        </div>
                                    </div>

                                    <br/>
                                        <div className="divider"></div> 
                                    <br/>

                                    <div className="cscontent2">
                                        <p>
                                            Focused on designing intuitive interfaces and visually striking layouts that prioritize 
                                            usability and user satisfaction. My designs blend aesthetics and 
                                            functionality, ensuring digital experiences that resonate deeply 
                                            with your audience.
                                        </p>
                                
                                        <div className="cardskill-tags">
                                            <span>Responsive</span>
                                            <span>Prototyping</span>
                                            <span>Personas</span>
                                        </div>
                                    </div>

                                </div>
                            
                                

                                </div>
                            </div>

                            <div className="cardskill card-3">
                                <div className="card-contentskill">
                                
                                    <div className="cardskill-info">
                                    
                                    <div className="cscontent1">
                                        <h3>SEO Leverage</h3>
                                        <div className="card-number">
                                            <h4>3</h4>
                                        </div>
                                    </div>

                                    <br/>
                                        <div className="divider"></div> 
                                    <br/>
                                    
                                    <div className="cscontent2">
                                        <p>
                                            Dedicated to implementing effective SEO strategies to improve visibility, 
                                            drive organic growth, and enhance overall website performance. 
                                            My methods ensure your content reaches the right audience, 
                                            fostering measurable, long-term success.
                                        </p>
                                
                                        <div className="cardskill-tags">
                                            <span>CMS Integration</span>
                                            <span>Motion & Animate</span>
                                            <span>3D Development</span>
                                        </div>
                                    </div>

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