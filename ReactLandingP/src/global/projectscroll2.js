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
                start: "top-=10px top",
                end: "+=1500",
                scrub: 1
            }
        });

        timeline.addLabel('card4');
        timeline.to('.card-4', {
            yPercent: 0,
            opacity: 1,
        });

        timeline.from('.card-5', {
            yPercent: 75,
            opacity: 0,
        });
        timeline.addLabel("card5");

        timeline.to(".card-4", {
            scale: 0.95,
            yPercent: -10,
            opacity: 0.5,
        }, "-=0.3");

        timeline.to('.card-5', {
            yPercent: 0,
            opacity: 1,
        });

        timeline.from('.card-6', {
            yPercent: 75,
            opacity: 0,
        });
        timeline.addLabel('card6');

        timeline.to(".card-5", {
            scale: 0.98,
            yPercent: -10,
            opacity: 1,
        }, "-=0.3");

        timeline.to(".card-6", {
            yPercent: 0,
            opacity: 1,
        });

    });

    return () => ctx.revert(); // Cleanup to prevent multiple animations
};

export default initScrollAnimation2;
