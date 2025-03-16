import React, { useEffect } from "react";
import "./PageHome.css";
import { initializeSplide } from "../global/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import HeaderOne from "../components/HeaderOne";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import SplideDiamond from "../components/images/DiamondSplide.svg"

function PageHome() {
    const lenis = useLenis(({ scroll }) => {});

    useEffect(() => {
        initializeSplide();
    }, []);

    return (
        <ReactLenis root>
            <main>
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
                            <div className="FavoriteTitle">
                                <h4>(FEATURED)</h4>
                                <h3>FAVORITE PROJECTS</h3>
                            </div>
    
                            <div className="FavoriteContent">
                                <p>Top of the line projects that have been meticulously built
                                    to thrive within the ever paradigm shift of technology.
                                </p>
                            </div>

                            
                    </article>

                </section>




            </main>
        </ReactLenis>
    );
}

export default PageHome;
