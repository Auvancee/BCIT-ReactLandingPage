import "./PageSynopsis.css";
import React, { useEffect, useRef } from "react";
import { initializeSplide } from "../global/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import HeaderThree from "../components/HeaderThree";
import FooterTwo from "../components/FooterTwo";
import SplideDiamond2 from "/public/OtherImages/DiamondSplide.svg"


import Profile1 from "/OtherImages/Portrait1.png";
import Profile2 from "/OtherImages/Portrait2.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import initScrollAnimation2 from "../global/projectscroll2"; // Desktop GSAP



function PageSynopsis() {

    const containerRef = useRef(null);
    // const lenis = useLenis(({ scroll }) => {});
        useLenis(() => {});


         useEffect(() => {
                window.scrollTo(0, 0);
              }, []);

        useEffect(() => {
            const timeout = setTimeout(() => {
                let ctx = gsap.context(() => {
                    initScrollAnimation2();
                }, containerRef);
                
                return () => ctx.revert();
            }, 50); // slight delay gives DOM time to stabilize
        
            return () => clearTimeout(timeout);
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

                        <div className="splide"><span className="PointerEvents">
                               <div className="splide__track splide__track">
                                   <ul className="splide__list">
                                       <li className="splide__slide"><span className="SplideHighlight2">SYNOPSIS</span></li>
                                       <li className="splide__slide"><img className="SocialIcon2" src={SplideDiamond2} alt="" /></li>
                                       <li className="splide__slide"><span className="SplideHighlight2">SYNOPSIS</span></li>
                                       <li className="splide__slide"><img className="SocialIcon2" src={SplideDiamond2} alt="" /></li>
                                       <li className="splide__slide"><span className="SplideHighlight2">SYNOPSIS</span></li>
                                       <li className="splide__slide"><img className="SocialIcon2" src={SplideDiamond2} alt="" /></li>
                                   </ul>
                               </div>
                            </span>
                       </div>            


                    <article className="SynopsisContainer" id="Synopsis">

                        <div className="SynopsisTitle">
                            <h4>(SYNOPSIS)</h4>
                            <h3><span className="SHighLight1">DEVELOPER <br/></span><span className="SHighLight2">DESIGNER &</span> STUDENT</h3>
                        </div>

                    

                        <div className="LeftColumn">
                            <img src={Profile1} alt="" />
                            <p> A curious and dedicated student passionate about the digital 
                                space—driven by the goal of building tools that solve real-world 
                                problems and serve people meaningfully.
                            </p>
                        </div>

                        <div className="RightColumn">
                            <img src={Profile2} alt="" />

                            <div className="RightColumnContent">
                                <p>As a Creative Developer, I care about building digital experiences that feel intuitive, 
                                    thoughtful, and genuinely helpful. I’m less about trends—and more about making things that matter.
                                </p>

                                <p>Outside of code, you’ll find me building my brand, 
                                    lifting at the gym, or geeking out over vintage car design.
                                     Balance fuels my creativity.
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
                            <p>A look at the areas I'm developing; where design, development, problem-solving, 
                                and clear thinking come together. Each skill here reflects how I build today 
                                and how I aim to grow tomorrow.
                            </p>
                        </div>

                        {/* Desktop GSAP Overlay Cards */}
                        <div className="cardskillset">

                            <div className="cardskill card-4">
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
                                            I build responsive websites with clean, maintainable code—focusing on performance, accessibility, 
                                            and small interactive details that elevate the user experience. I'm continuously 
                                            refining my workflow to create scalable, real-world solutions.
                                        </p>
                                
                                        <div className="cardskill-tags">
                                            <span>Responsive Layouts</span>
                                            <span>Interactive UI</span>
                                            <span>Micro Animations</span>
                                            <span>Accessibility Ready</span>
                                        </div>
                                    </div>

                                </div>
                                    

                                    
                                    

                                </div>
                            </div>

                            
                            <div className="cardskill card-5">
                                <div className="card-contentskill">

                                <div className="cardskill-info">
                                    
                                    <div className="cscontent1">
                                        <h3>Web Design | UI</h3>
                                        <div className="card-number">
                                            <h4>2</h4>
                                        </div>
                                    </div>

                                    <br/>
                                        <div className="divider"></div> 
                                    <br/>

                                    <div className="cscontent2">
                                        <p>
                                            I design intuitive, front-end layouts that feel good to use—striking a 
                                            balance between visual clarity and practical usability. I value simplicity, 
                                            visual hierarchy, and keeping things easy to navigate.
                                        </p>
                                
                                        <div className="cardskill-tags">
                                            <span>UI Prototyping</span>
                                            <span>Layout Design</span>
                                            <span>Transitions & Flow</span>
                                            <span>Visual Hierarchy</span>
                                        </div>
                                    </div>

                                </div>
                            
                                

                                </div>
                            </div>

                            <div className="cardskill card-6">
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
                                            I’m exploring core SEO principles to better understand how to improve 
                                            visibility and structure content effectively. My goal is to make websites 
                                            that are not just user-friendly—but discoverable and scalable too.
                                        </p>
                                
                                        <div className="cardskill-tags">
                                            <span>On-Page SEO</span>
                                            <span>Content Structuring</span>
                                            <span>Metadata & Semantics</span>
                                        </div>
                                    </div>

                                </div>

                                </div>
                            </div>

                        </div>
                        
                        
                        {/* Mobile GSAP Overlay Cards */}
                        <div className="cardskillset2">

                            <div className="cardskill2 card-7">
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
                                            I build responsive websites with clean, maintainable code—focusing on performance, accessibility, 
                                            and small interactive details that elevate the user experience. I'm continuously 
                                            refining my workflow to create scalable, real-world solutions.
                                        </p>
                                
                                        <div className="cardskill-tags">
                                            <span>Responsive Layouts</span>
                                            <span>Interactive UI</span>
                                            <span>Micro Animations</span>
                                            <span>Accessibility Ready</span>
                                        </div>
                                    </div>

                                </div>
                                    

                                    
                                    

                                </div>
                            </div>

                            
                            <div className="cardskill2 card-8">
                                <div className="card-contentskill">

                                <div className="cardskill-info">
                                    
                                    <div className="cscontent1">
                                        <h3>Web Design | UI</h3>
                                        <div className="card-number">
                                            <h4>2</h4>
                                        </div>
                                    </div>

                                    <br/>
                                        <div className="divider"></div> 
                                    <br/>

                                    <div className="cscontent2">
                                        <p>
                                            I design intuitive, front-end layouts that feel good to use—striking a 
                                            balance between visual clarity and practical usability. I value simplicity, 
                                            visual hierarchy, and keeping things easy to navigate.
                                        </p>
                                
                                        <div className="cardskill-tags">
                                            <span>UI Prototyping</span>
                                            <span>Layout Design</span>
                                            <span>Transitions & Flow</span>
                                            <span>Visual Hierarchy</span>
                                        </div>
                                    </div>

                                </div>
                            
                                

                                </div>
                            </div>

                            <div className="cardskill2 card-9">
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
                                            I’m exploring core SEO principles to better understand how to improve 
                                            visibility and structure content effectively. My goal is to make websites 
                                            that are not just user-friendly—but discoverable and scalable too.
                                        </p>
                                
                                        <div className="cardskill-tags">
                                            <span>On-Page SEO</span>
                                            <span>Content Structuring</span>
                                            <span>Metadata & Semantics</span>
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