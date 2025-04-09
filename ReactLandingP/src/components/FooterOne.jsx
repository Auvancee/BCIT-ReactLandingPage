import React, { useEffect, useRef, useState } from "react";
import "./FooterOne.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useLenis } from "@studio-freight/react-lenis";

{/* Black Icons */}
import linkedInBlackIcon from "/blackicons/LinkedInBlack.png"; // Import your SVG as image
import youTubeBlackIcon from "/blackicons/YouTubeBlack.png"; // Import your SVG as image
import codepenBlackIcon from "/blackicons/CodePenBlack.png"; // Import your SVG as image
import githubBlackIcon from "/blackicons/GitHubBlack.png"; // Import your SVG as image
import behanceBlackIcon from "/blackicons/BehanceBlack.png"; // Import your SVG as image

import ScrollToTopIcon from "/OtherImages/ScrollToTop.svg"; // Update path if needed
import EarthSVG from "/OtherImages/EarthWorld.svg"; // Update path to your uploaded SVG


function FooterOne() {
    const footerRef = useRef(null);
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
        <footer className="footer-container" ref={footerRef}>

            <div className="FooterUpper">
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
                <div className="FooterUpperContent">
                    <h4>(CONTACT)</h4>
                    <h2>LET'S CONNECT & TRANSFORM</h2>
                    <button className="email-btn">Email Me →</button>
                </div>
            </div>
            
            <div className="FooterLower" id="Contact">
                {/* Social Icons */}
                <div className="FooterSocials">
                    <h4>SOCIALS</h4>
                    <div className="FooterSocialsContainer">
                        <a href="https://www.linkedin.com/in/hafizau/">
                            <img className="SocialIcon" src={linkedInBlackIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://www.youtube.com/@Auvance">
                            <img className="SocialIcon" src={youTubeBlackIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://codepen.io/Auvancee">
                            <img className="SocialIcon" src={codepenBlackIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/Auvancee">
                            <img className="SocialIcon" src={githubBlackIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/Auvancee">
                            <img className="SocialIcon" src={behanceBlackIcon} alt="LinkedIn" />
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
                            <span className="local-time-label">Local Time:</span><br/>
                            <span className="local-time">{localTime}, CA</span>
                        </div>
                    </div>

                    <div className="WorkingGloballyContainer">
                        <div className="WorkingText">
                            <span className="globally-label">WORKING GLOBALLY</span>
                            <span className="AvailableWork-label">Available for Work</span>
                        </div>
                        <img ref={earthRef} src={EarthSVG} alt="Earth" className="SubtleEarthEffect" />
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default FooterOne;
