import React, { useEffect, useRef } from "react";
import "./PageHome.css";
import { initializeSplide } from "../global/splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import HeaderOne from "../components/HeaderOne";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import SplideDiamond from "/OtherImages/DiamondSplide.svg"
import FooterOne from "../components/FooterOne";

import { projects } from "../global/projectData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import initScrollAnimation from "../global/projectscroll"; // Desktop GSAP
// import initMobileScrollAnimation from "../global/projectscrollMobile"; // Mobile GSAP



// import ProjectOnePC from "/projectimages/ONAFilmsPC.png";
// import ProjectTwoPC from "/projectimages/SangHanPC.png";
// import ProjectThreePC from "/projectimages/IntercodexPC.png";
import { Link } from "react-router-dom";


function PageHome() {
    
   
    const containerRef = useRef(null);
    // const lenis = useLenis(({ scroll }) => {});
    useLenis(() => {});

    // Initialize Splide for the carousel
    useEffect(() => {
        initializeSplide();

        let ctx = gsap.context(() => {
            initScrollAnimation();
        }, containerRef);

        return () => ctx.revert(); // Clean up animation on unmount
    }, []);

    // To Scroll To The Top of the Page when the page loads
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    // To Set the vh variable for mobile devices
      

   
    



    return (
        <ReactLenis root>
            <main ref={containerRef} className="PageHomeMain">
                <HeaderOne />

                {/* HERO Section that contains everything on the first screen */}
                <section className="HeroSection">
                    <div className="Introduction">
                        <h2>Web Designer &</h2>
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
                                A Creative Developer & Web Designer with over 2 years of experience 
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
                                {projects.slice(0, 3).map((project, index) => (
                                    <Link to={`/project/${project.slug}`} className={`card card-${index + 1}`} key={index}>
                                    <div className="card-content">
                                        {/* Image */}
                                        <div className="card-image">
                                        <img className="ProjectImageDesktop" src={project.image} alt={project.title} />
                                        </div>

                                        {/* Info */}
                                        <div className="card-info">
                                        <h3>{project.title}</h3>
                                        <div className="card-tags">
                                            {project.tags.map((tag, i) => (
                                            <span key={i}>{tag}</span>
                                            ))}
                                        </div>
                                        <p>{project.description}</p>
                                        </div>
                                    </div>
                                    </Link>
                                ))}
                            </div>


                        <div className="MobileCards">
                            {projects.slice(0, 3).map((project, index) => (
                                <Link to={`/project/${project.slug}`} className="ProjectBox" key={index}>
                                    <div className="ProjectImage">
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} />
                                    ) : (
                                        <div className="Placeholder"></div>
                                    )}
                                    </div>
                                    <div className="ProjectContent">
                                    <div className="ProjectTags">
                                        {project.tags.map((tag, i) => (
                                        <span key={i} className="Tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="ProjectInfo">
                                        <span className="ProjectYear">{project.year}</span>
                                        <h3>{project.title}</h3>
                                    </div>
                                    </div>
                                </Link>
                                ))}
                    </div>
                            

                            <br/><br/><br/><br/>

                            {/* More Work Button */}
                            <Link to="/works" className="more-work-link-desktop">
                                <button className="more-work-btn-desktop">More Work</button>
                            </Link>
                            
                            

                    
                            
                            

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
