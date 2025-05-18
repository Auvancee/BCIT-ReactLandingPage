import "./PageWorks.css";
import React, { useEffect, useRef } from "react";
import { initializeSplide } from "../global/splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import HeaderTwo from "../components/HeaderTwo";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import SplideDiamond from "/OtherImages/DiamondSplide.svg"
import FooterOne from "../components/FooterOne";
import { projects } from "../global/projectData";


import { Link } from "react-router-dom";
// import { projects2 } from "../data/projectData";








function PageWorks() {
    const containerRef = useRef(null);
    // const lenis = useLenis(({ scroll }) => {});
     useLenis(() => {});

    useEffect(() => {
        initializeSplide();
    }, []); // Add an empty dependency array to run the effect only once

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
            
    return (

    <ReactLenis root>
            <main ref={containerRef} className="PageWorkMain">
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
                                      <li className="splide__slide"><span className="SplideHighlight">WORKS</span></li>
                                      <li className="splide__slide"><img className="SocialIcon" src={SplideDiamond} alt="" /></li>
                                      <li className="splide__slide"><span className="SplideHighlight">WORKS</span></li>
                                      <li className="splide__slide"><img className="SocialIcon" src={SplideDiamond} alt="" /></li>
                                      <li className="splide__slide"><span className="SplideHighlight">WORKS</span></li>
                                      <li className="splide__slide"><img className="SocialIcon" src={SplideDiamond} alt="" /></li>
                                  </ul>
                              </div>
                      </div>


                      <article className="WorkContainer" id="Projects">

                            <div className="WorkTitle">
                                <h4>(PROJECTS)</h4>
                                <h3>ELEVATING<br/>EXPERIENCE</h3>
                            </div>

                            <div className="WorkContent">
                                <p>These projects represent my journey in building purposeful, evolving solutions; from design to development.  
                                    Each one is a step toward solving real-world problems with clarity and intention.
                                </p>
                            </div>

                        </article>


                        <section className="ProjectGrid">
                        {projects.map((project, index) => (
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


                        </section>
                        
                        

                        <article className="ArchiveContent" id="Archives">
                            <h4>(ARCHIVES)</h4>         
                            <a href="https://github.com/Auvancee" target="_blank">
                                <button className="ArchiveButton">View On Github ↗</button>
                            </a>
                        </article>
                        



                        <div className="CTABefore">
                            <h4>READY TO</h4>
                            <h5>TRANSFORM</h5>
                            <h4>YOUR EXPERIENCE?</h4>
                        </div>


                        <FooterOne/>  
                        <br/><br/>

                        



                    </section>            



            </main>
    
    
    
    
    </ReactLenis>
        


    )

}

export default PageWorks