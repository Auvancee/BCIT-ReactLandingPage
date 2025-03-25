import "./PageWorks.css";
import React, { useEffect, useRef } from "react";
import { initializeSplide } from "../global/splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import HeaderTwo from "../components/HeaderTwo";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import SplideDiamond from "../components/images/DiamondSplide.svg"
import FooterOne from "../components/FooterOne";
import "./PageWorks.css";




function PageWorks() {
    const containerRef = useRef(null);
    const lenis = useLenis(({ scroll }) => {});

    useEffect(() => {
        initializeSplide();
    }, []); // Add an empty dependency array to run the effect only once
            
    return (

    <ReactLenis root>
            <main ref={containerRef}>
                <HeaderTwo />

                {/* HERO Section that contains everything on the first screen */}
                <section className="WorkHeroSection">
                    <div className="WorkIntro">
                        {/* <h2>UX/UI Designer &</h2> */}
                        <h1>PROJECTS, WORK & <span className="WorkHighlight">MORE STUFF</span></h1>
                    </div>

                
                </section>

                {/* Work Section */}
                  <section className="ContainerWhite">
  
                      <div className="splide">
                              <div className="splide__track splide__track-2">
                                  <ul className="splide__list">
                                      <li className="splide__slide">WORKS</li>
                                      <li className="splide__slide"><img className="SocialIcon" src={SplideDiamond} alt="" /></li>
                                      <li className="splide__slide">WORKS</li>
                                      <li className="splide__slide"><img className="SocialIcon" src={SplideDiamond} alt="" /></li>
                                      <li className="splide__slide">WORKS</li>
                                      <li className="splide__slide"><img className="SocialIcon" src={SplideDiamond} alt="" /></li>
                                  </ul>
                              </div>
                      </div>


                      <article className="WorkContainer" id="Projects">

                        <div className="WorkTitle">
                            <h4>(PROJECTS)</h4>
                            <h3>ELEVATING<br/>EXPERIENCE</h3>
                        </div>

                        {/* <div className="AboutContent">
                            <p>Front-End Developer & UX/UI Designer helping brands & teams 
                                build responsive experiences that blend form, function, and scalable code — 
                                turning complex ideas into elegant digital solutions.
                            </p>
                        </div> */}

                        </article>



                    </section>            



            </main>
    
    
    
    
    </ReactLenis>
        


    )

}

export default PageWorks