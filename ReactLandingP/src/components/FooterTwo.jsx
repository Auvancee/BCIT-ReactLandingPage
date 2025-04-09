import React, { useEffect, useRef, useState } from "react";
import "./FooterTwo.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useLenis } from "@studio-freight/react-lenis";

{/* White Icons */}
import linkedInWhtieIcon from "/whiteicons/LinkedInWhite.svg"; // Import your SVG as image
import youTubeWhiteIcon from "/whiteicons/YouTubeWhite.svg"; // Import your SVG as image
import codepenWhiteIcon from "/whiteicons/CodepenWhite.png"; // Import your SVG as image
import githubWhiteIcon from "/whiteicons/GitHubWhite.svg"; // Import your SVG as image
import behanceWhiteIcon from "/whiteicons/BehanceWhite.png"; // Import your SVG as image

import ScrollToTopIcon from "/OtherImages/ScrollToTop.svg"; // Update path if needed
import EarthSVG from "/OtherImages/EarthWorld.svg"; // Update path to your uploaded SVG


function FooterTwo() {
    const footerRef2 = useRef(null);
    const shapesRef = useRef([]);
    const lenis = useLenis();
    const [localTime, setLocalTime] = useState("");
    const earthRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        shapesRef.current.forEach((shape, index) => {
            tl.to(shape, {
                x: `random(-50, 50)`,
                y: `random(-30, 30)`,
                rotation: `random(0, 360)`,
                duration: 5 + Math.random() * 5,
                ease: "power1.inOut"
            });
        });
    }, []);



    useEffect(() => {
        gsap.to(earthRef.current, {
            scale: 1.05,
            opacity: 1,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }, []);



    // 1. Update local time every second
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setLocalTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };

        updateTime(); // Initial call
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // 2. Scroll to top function
    const scrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 4) });
        }
    };

    

    return (
        <footer className="footer-container-three" ref={footerRef2}>

            <div className="FooterUpperThree">
                {/* Moving Shapes Background */}
                {/* <div className="footer-shapes">
                    <svg className="shape" ref={(el) => (shapesRef.current[0] = el)} width="100" height="100">
                        <polygon points="50,15 90,90 10,90" stroke="white" strokeWidth="1" fill="none" />
                    </svg>
                    <svg className="shape" ref={(el) => (shapesRef.current[1] = el)} width="100" height="100">
                        <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1" fill="none" />
                    </svg>
                    <svg className="shape" ref={(el) => (shapesRef.current[2] = el)} width="100" height="100">
                        <polygon points="20,30 80,30 100,80 50,100 0,80" stroke="white" strokeWidth="1" fill="none" />
                    </svg>
                </div> */}

                {/* Footer Content */}
                <div className="FooterUpperContentThree">
                    <h4>(CONTACT)</h4>
                    <h2>LET'S CONNECT & TRANSFORM</h2>
                    <button className="email-btn-2">Email Me →</button>
                </div>
            </div>
            
            <div className="FooterLowerThree" id="Contact">
                {/* Social Icons */}
                <div className="FooterSocialsThree">
                    <h4>SOCIALS</h4>
                    <div className="FooterSocialsContainerThree">
                        <a href="https://www.linkedin.com/in/hafizau/">
                            <img className="SocialIcon3" src={linkedInWhtieIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://www.youtube.com/@Auvance">
                            <img className="SocialIcon3" src={youTubeWhiteIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://codepen.io/Auvancee">
                            <img className="SocialIcon3" src={codepenWhiteIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/Auvancee">
                            <img className="SocialIcon3" src={githubWhiteIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/Auvancee">
                            <img className="SocialIcon3" src={behanceWhiteIcon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="FooterCopyRight">
                    <h3>HAFIZAU</h3>
                    <h3>©2025</h3>
                </div>
            </div>

            <div className="FooterLowerExtra">
                {/* NEW: Scroll-to-Top and Local Time Section */}
                <div className="FooterLowerLeft">

                    <div className="FooterExtra">
                        {/* Scroll to Top */}
                        <div className="ScrollToTopContainer" onClick={scrollToTop}>
                            <img src={ScrollToTopIcon} alt="Scroll to Top" className="scroll-icon" />
                        </div>

                        {/* Local Time Display */}
                        <div className="LocalTimeContainer">
                            <span className="local-time-label-2">Local Time:</span><br/>
                            <span className="local-time-2">{localTime}, CA</span>
                        </div>
                    </div>

                    <div className="WorkingGloballyContainer">
                        <div className="WorkingText">
                            <span className="globally-label-2">WORKING GLOBALLY</span>
                            <span className="AvailableWork-label-2">Available for Work</span>
                        </div>
                        <img ref={earthRef} src={EarthSVG} alt="Earth" className="SubtleEarthEffect-2" />
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default FooterTwo;
