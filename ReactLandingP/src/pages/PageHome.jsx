import React, { useEffect, useRef } from "react";
import "./PageHome.css";
import { initializeSplide } from "../global/splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import HeaderOne from "../components/HeaderOne";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import SplideDiamond from "/OtherImages/DiamondSplide.svg"
import FooterOne from "../components/FooterOne";


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import initScrollAnimation from "../global/projectscroll"; // Desktop GSAP
// import initMobileScrollAnimation from "../global/projectscrollMobile"; // Mobile GSAP



import ProjectOnePC from "/projectimages/ONAFilmsPC.png";
import ProjectTwoPC from "/projectimages/SangHanPC.png";
import ProjectThreePC from "/projectimages/IntercodexPC.png";
import { Link } from "react-router-dom";


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

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


   
    



    return (
        <ReactLenis root>
            <main ref={containerRef} className="PageHomeMain">
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

                    <article className="AboutContainer" id="About">

                        <div className="AboutTitle">
                            <h4>(ABOUT)</h4>
                            <h3>A BIT ABOUT ME</h3>
                        </div>

                        <div className="AboutContent">
                            <p>
                                A Creative Developer & UX/UI Designer with over 2 years of experience 
                                building intuitive, responsive, & visually compelling digital solutions. 
                            </p>

                            <p>
                                I specialize in translating complex ideas into elegant, scalable solutions by 
                                leveraging thoughtful design & clean, robust code empowering brands & teams 
                                to connect deeply with their users.
                            </p>
                        </div>

                    </article>


                    {/* Featured Project Intro */}
                    <article className="FavoriteContainer" id="Featured">

                        <div className="FavoriteContainerInner">
                            <div className="FavoriteTitle">
                                <h4>(FEATURED)</h4>
                                <h3>FAVORITE PROJECTS</h3>
                            </div>
    
                            <div className="FavoriteContent">
                                <p>Top-tier projects, meticulously built to thrive in technology, 
                                    showcase innovative design, cutting-edge techniques, & 
                                    seamless integration of creativity and technical expertise.
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
                                           
                                        
                                            <img className="ProjectImageDesktop" src={ProjectThreePC} alt="Intercodex" />
                                        </div>
                                
                                    {/* <!-- Right Info --> */}
                                        <a href="https://intercodex.bcitwebdeveloper.ca/" className="card-button" target="_blank">↖</a>

                                        <div className="card-info">
                                            
                                            <h3>Intecodex</h3>
                                            
                                            <div className="card-tags">
                                                <span>Wordpress Development</span>
                                                <span>CMS Integration</span>
                                                <span>Online Store</span>
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
                                            
                                            <img className="ProjectImageDesktop" src={ProjectOnePC} alt="ONAFilms" />
                                        </div>

                                        <a href="https://aumar.xyz/ONA-Films/" className="card-button" target="_blank">↖</a>

                                        {/* <!-- Right Info --> */}
                                        <div className="card-info">
                                        <h3>ONAFilms</h3>
                                        
                                        <div className="card-tags">
                                            <span>React Development</span>
                                            <span>Movie API</span>
                                            <span>Responsive Design</span>
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
                                            <img className="ProjectImageDesktop" src={ProjectTwoPC} alt="SangHan-Sass" />
                                        </div>
                                        
                                        <a href="https://auvancee.github.io/BCIT-SangHanReplica/" className="card-button" target="_blank">↖</a>
                                    
                                        {/* <!-- Right Info --> */}
                                        <div className="card-info">
                                        <h3>SANGHAN SASS/SCSS</h3>
                                        
                                        <div className="card-tags">
                                            <span>SASS/SCSS</span>
                                            <span>Design Recreation</span>
                                            <span>SEO Responsive</span>
                                        </div>
                                    
                                        <p>
                                            A SASS/SCSS styled responsive clone of the SangHan director portfolio website, 
                                            focusing on layout recreation and mobile responsiveness.
                                        </p>
                                    
                                        
                                        </div>
                                    </div>
                                </div>

                                

                            </div>

                            <br/><br/><br/><br/>

                            {/* More Work Button */}
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

                            {/* CTA Section */}
                            <div className="CTABefore">
                                <h4>READY TO</h4>
                                <h5>TRANSFORM</h5>
                                <h4>YOUR EXPERIENCE?</h4>
                            </div>

                            {/* Footer */}
                            <FooterOne/>
                            
                            <br/><br/>

                            
                </section>


                
                

            </main>

            
            

        </ReactLenis>

        
    );
}

export default PageHome;
