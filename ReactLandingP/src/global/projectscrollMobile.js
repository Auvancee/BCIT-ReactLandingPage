import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const initMobileScrollAnimation = () => {
    let ctx = gsap.context(() => {
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".mobile-projects",
                pin: true,
                pinSpacing: true,
                start: "top top",
                end: "+=2000",
                scrub: 1,
            }
        });

        timeline.addLabel("card1");
        timeline.to(".mobile-card:nth-child(1)", {
            yPercent: 0,
            opacity: 1
        });

        timeline.from(".mobile-card:nth-child(2)", {
            yPercent: 100,
            opacity: 0
        });
        timeline.addLabel("card2");

        timeline.to(".mobile-card:nth-child(1)", {
            scale: 0.95,
            yPercent: -10,
            opacity: 0.5
        }, "-=0.3");

        timeline.to(".mobile-card:nth-child(2)", {
            yPercent: 0,
            opacity: 1
        });

        timeline.from(".mobile-card:nth-child(3)", {
            yPercent: 100,
            opacity: 0
        });
        timeline.addLabel("card3");

        timeline.to(".mobile-card:nth-child(2)", {
            scale: 0.98,
            yPercent: -10,
            opacity: 1
        }, "-=0.3");

        timeline.to(".mobile-card:nth-child(3)", {
            yPercent: 0,
            opacity: 1
        });

    });

    return () => ctx.revert(); // Cleanup animation when component unmounts
};

export default initMobileScrollAnimation;
