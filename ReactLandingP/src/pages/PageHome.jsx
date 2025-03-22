import React, { useEffect, useRef } from "react";
import "./PageHome.css";
import { initializeSplide } from "../global/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import HeaderOne from "../components/HeaderOne";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import SplideDiamond from "../components/images/DiamondSplide.svg"
import FooterOne from "../components/FooterOne";


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import initScrollAnimation from "../global/projectscroll"; // Desktop GSAP
// import initMobileScrollAnimation from "../global/projectscrollMobile"; // Mobile GSAP



import ProjectOnePC from "../components/images/projectimages/ONAFilmsPC.png";
import ProjectTwoPC from "../components/images/projectimages/SangHanPC.png";


function PageHome() {
    const containerRef = useRef(null);
    const lenis = useLenis(({ scroll }) => {});

    useEffect(() => {
        initializeSplide();

        let ctx = gsap.context(() => {
            initScrollAnimation();
        }, containerRef);

        return () => ctx.revert(); // Clean up animation on unmount
    }, []);


   
    



    return (
        <ReactLenis root>
            <main ref={containerRef}>
                <HeaderOne />

                {/* HERO Section that contains everything on the first screen */}
                <section className="HeroSection">
                    <div className="Introduction">
                        <h2>UX/UI Designer &</h2>
                        <h1>Creative Developer</h1>
                    </div>

                
                </section>

                {/* About Section */}
                <section className="ContainerWhite">

                    <div className="splide">
                            <div className="splide__track splide__track-2">
                                <ul className="splide__list">
                                    <li className="splide__slide">HAFIZAU</li>
                                    <li className="splide__slide"><img className="SocialIcon" src={SplideDiamond} alt="" /></li>
                                    <li className="splide__slide">HAFIZAU</li>
                                    <li className="splide__slide"><img className="SocialIcon" src={SplideDiamond} alt="" /></li>
                                    <li className="splide__slide">HAFIZAU</li>
                                    <li className="splide__slide"><img className="SocialIcon" src={SplideDiamond} alt="" /></li>
                                </ul>
                            </div>
                    </div>

                    <article className="AboutContainer" id="#About">

                        <div className="AboutTitle">
                            <h4>(ABOUT)</h4>
                            <h3>A BIT ABOUT ME</h3>
                        </div>

                        <div className="AboutContent">
                            <p>Front-End Developer & UX/UI Designer helping brands & teams 
                                build responsive experiences that blend form, function, and scalable code — 
                                turning complex ideas into elegant digital solutions.
                            </p>
                        </div>

                    </article>


                    <article className="FavoriteContainer">

                        <div className="FavoriteContainerInner">
                            <div className="FavoriteTitle">
                                <h4>(FEATURED)</h4>
                                <h3>FAVORITE PROJECTS</h3>
                            </div>
    
                            <div className="FavoriteContent">
                                <p>Top of the line projects that have been meticulously built
                                    to thrive within the ever paradigm shift of technology.
                                </p>
                            </div>
                        </div>

                            {/* Projects Section */}

                            {/* <!--DESKTOP & TABLET--> */}
                            <div className="cards">

                                <div className="card card-1">
                                    <div className="card-content">
                                    {/* <!-- Left Image --> */}
                                    <div className="card-image">
                                        <a href="javascript:void(0)" className="card-button" target="_blank" rel="noopener noreferrer">LIVE SITE →</a>
                                       
                                        <img src="/2025-02-27_22.00.24.png" alt="Project Preview" />
                                    </div>
                                
                                    {/* <!-- Right Info --> */}
                                    <div className="card-info">
                                        <h3>CAPSTONE PROJECT</h3>
                                        
                                        <div className="card-tags">
                                        <span>Design</span>
                                        <span>Development</span>
                                        <span>Responsive</span>
                                        </div>
                                
                                        <p>
                                        A website built to increase volume of potential students along with
                                        site responsiveness, sleekness & visual stimulation.
                                        </p>
                                
                                        
                                    </div>
                                    </div>
                                </div>

                                <div className="card card-2">
                                    <div className="card-content">
                                        {/* <!-- Left Image --> */}
                                        <div className="card-image">
                                            <a href="#" className="card-button" target="_blank">LIVE SITE →</a>
                                            <img className="ProjectImageDesktop" src={ProjectOnePC} alt="ONAFilms" />
                                        </div>
                                    
                                        {/* <!-- Right Info --> */}
                                        <div className="card-info">
                                        <h3>REACT MOVIE DATABASE</h3>
                                        
                                        <div className="card-tags">
                                            <span>Design</span>
                                            <span>Development</span>
                                            <span>Responsive</span>
                                        </div>
                                    
                                        <p>
                                            A website built to increase volume of potential students along with
                                            site responsiveness, sleekness & visual stimulation.
                                        </p>
                                    
                                        
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-3">
                                    <div className="card-content">
                                        {/* <!-- Left Image --> */}
                                        <div className="card-image">
                                            <a href="#" className="card-button" target="_blank">LIVE SITE →</a>
                                            <img className="ProjectImageDesktop" src={ProjectTwoPC} alt="ONAFilms" />
                                        </div>
                                    
                                        {/* <!-- Right Info --> */}
                                        <div className="card-info">
                                        <h3>SANGHAN SASS/SCSS</h3>
                                        
                                        <div className="card-tags">
                                            <span>Design</span>
                                            <span>Development</span>
                                            <span>Responsive</span>
                                        </div>
                                    
                                        <p>
                                            A website built to increase volume of potential students along with
                                            site responsiveness, sleekness & visual stimulation.
                                        </p>
                                    
                                        
                                        </div>
                                    </div>
                                </div>

                                

                            </div>

                            <br/><br/><br/><br/>

                            <button className="more-work-btn-desktop">More Work</button>
                            


                            {/* <!--MOBILE--> */}
                            <div className="mobile-projects">
                                <div className="mobile-card">
                                    <div className="mobile-card-image">
                                        <div className="mobile-card-number">1</div>
                                        
                                    </div>
                                    <div className="mobile-card-content">
                                        <h3>CAPSTONE PROJECT</h3>
                                        <p>A website built to increase volume of potential students along with site responsiveness, sleekness & visual stimulation.</p>
                                        <div className="mobile-tags">
                                            <span>CMS & Integration</span>
                                            <span>Design & Development</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mobile-card">
                                    <div className="mobile-card-image">
                                        <div className="mobile-card-number">2</div>
                                        <img className="ProjectImageMobile" src={ProjectOnePC} alt="ONAFilms" />
                                        
                                    </div>
                                    <div className="mobile-card-content">
                                        <h3>REACT MOVIE DATABASE</h3>
                                        <p>Created to help the foundation base level of the business. Custom background with pieces of built-to-last code.</p>
                                        <div className="mobile-tags">
                                            <span>CMS & Integration</span>
                                            <span>Design & Development</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mobile-card">
                                    <div className="mobile-card-image">
                                        <div className="mobile-card-number">3</div>
                                        <img className="ProjectImageMobile" src={ProjectTwoPC} alt="ONAFilms" />
                                    </div>
                                    <div className="mobile-card-content">
                                        <h3>SANGHAN SASS/SCSS</h3>
                                        <p>A website to attract a large base player of the best indie franchise game, well rounded of user-centric principles for converting gamers into sales.</p>
                                        <div className="mobile-tags">
                                            <span>CMS & Integration</span>
                                            <span>Design & Development</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="more-work-btn">More Work</button>
                            </div>
                            

                    </article>

                            <div className="CTABefore">
                                <h4>READY TO</h4>
                                <h5>TRANSFORM</h5>
                                <h4>YOUR EXPERIENCE?</h4>
                            </div>


                            <FooterOne />
                            
                            <br/><br/><br/><br/>

                            
                </section>


                
                

            </main>

            
            

        </ReactLenis>

        
    );
}

export default PageHome;
