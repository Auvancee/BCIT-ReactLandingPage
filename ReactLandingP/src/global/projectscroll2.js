import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const initScrollAnimation2 = () => {
    let ctx = gsap.context(() => {
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".cardskillset",
                pin: true,
                pinSpacing: true,
                start: "top-=20px top",
                end: "+=1500",
                scrub: 1
            }
        });

        timeline.addLabel('card1');
        timeline.to('.card-1', {
            yPercent: 0,
            opacity: 1,
        });

        timeline.from('.card-2', {
            yPercent: 75,
            opacity: 0,
        });
        timeline.addLabel("card2");

        timeline.to(".card-1", {
            scale: 0.95,
            yPercent: -10,
            opacity: 0.5,
        }, "-=0.3");

        timeline.to('.card-2', {
            yPercent: 0,
            opacity: 1,
        });

        timeline.from('.card-3', {
            yPercent: 75,
            opacity: 0,
        });
        timeline.addLabel('card3');

        timeline.to(".card-2", {
            scale: 0.98,
            yPercent: -10,
            opacity: 1,
        }, "-=0.3");

        timeline.to(".card-3", {
            yPercent: 0,
            opacity: 1,
        });

    });

    return () => ctx.revert(); // Cleanup to prevent multiple animations
};

export default initScrollAnimation2;
