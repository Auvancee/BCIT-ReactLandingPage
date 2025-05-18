/* {ProjectImages (PC ONLY)} */
import HAFIZAU from "/projectimages/HAFIZAU.png"
import InterCodex from "/projectimages/IntercodexPC.png";
import ONAFilms from "/projectimages/ONAFilmsPC.png";
import SangHan from "/projectimages/SangHanPC.png";
import MindsetWP from "/projectimages/Mindset.png";
import TICJS from "/projectimages/TicTacToeJS.png"
import CSSTech from "/projectimages/CSSTech.png"


/* {Tool SVG Imports} */

/* Languages */
import HTML from '/toolsvgs/HTMLsvg.svg';
import CSS from '/toolsvgs/CSSsvg.svg';
import JS from '/toolsvgs/JavaScriptsvg.svg';
import PHP from '/toolsvgs/PHPsvg.svg';
import SASS from '/toolsvgs/SASSsvg.svg';

/* Library */
import REACT from '/toolsvgs/Reactsvg.svg';
import GSAP from '/toolsvgs/Greensock.svg';

/* Others */
import WP from '/toolsvgs/Wordpresssvg.svg';
import API from '/toolsvgs/API.svg';
import WOO from '/toolsvgs/Woocommerce.png';

/* {Desgin SVG Imports} */

export const projects = [

{
      /* Portfolio Website (HAFIZAU) */
      slug: "aumarxyz",
      year: "2025",
      title: "Portfolio Site (HAFIZAU)",
      description: "A corporate CMS-powered website for showcasing tech services and products. Built with SEO performance in mind.",
      tags: ["React Development", "GSAP & Lenis", "Responsive"],
      image: HAFIZAU,
      
      media: [
        { type: "image", src: HAFIZAU },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
        { type: "youtube", src: "https://www.youtube.com/embed/abc123xyz" },
      ],

      /* ● New Updates Below ● */
      links: {
        live: "https://your-site.com",
        code: "https://github.com/your-repo",
        wireframe: "https://wikipedia.com"
      },

      techstack: [
        { logo: HTML },
        { logo: CSS },
        { logo: JS },
        { logo: REACT },
      ],

      developmentprocess: [
      { icon: "", 
        text: "The goal with Intercodex was to create..." },

      { icon: "/icons/system.svg", 
        text: "Structurally, I focused on creating..." },

      { icon: "/icons/performance.svg", 
        text: "Throughout the build, performance..." },

      { icon: "../../public/OtherImages/DiamondSplide.svg", 
        text: "This project taught me how small..." }
    ],

      responsiveImages: {
        mobile: [
          "/projectimages/CSSTech.png",
          "/projectimages/CSSTech.png"
        ],
        desktop: "/projectimages/CSSTech.png"
      }
    },



    /* Intercodex Website */
    {
      slug: "intercodex",
      year: "2025",
      title: "Intercodex",
      description: "A corporate CMS-powered website for showcasing tech services and products. Built with SEO performance in mind.",
      tags: ["Wordpress Development", "CMS Integration", "Online Store"],
      image: InterCodex,

      media: [
        { type: "image", src: InterCodex },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
        { type: "youtube", src: "https://www.youtube.com/embed/abc123xyz" },
      ]

       /* ● New Updates Below ● */

      

  

      

    },

    /* ONA Films Website */
    {
      slug: "onafilms",
      year: "2025",
      title: "ONA Films",
      description: "ONA Films is a movie database using the Movie API, bringing countless films into a single platform. Built with React and styled for sleek, fast UI/UX.",
      tags: ["React Development", "Movie API", "Responsive Design"],
      image: ONAFilms,

      media: [
        { type: "image", src: ONAFilms },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
      ]

      /* ● New Updates Below ● */




    },

    /* SangHan SASS Replica Site */
    {
      slug: "sanghan-replica",
      year: "2025",
      title: "SangHan Replica",
      description: "A SASS/SCSS styled responsive clone of the SangHan director portfolio website, focusing on layout recreation and mobile responsiveness.",
      tags: ["SASS/SCSS", "Design Recreation", "SEO Responsive"],
      image: SangHan,

       media: [
        { type: "image", src: SangHan },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
      ]

       /* ● New Updates Below ● */
      


    },

    /* Mindset Theme Website */
    {
      slug: "mindset-theme",
      year: "2025",
      title: "Mindset Theme",
      description: "A WordPress theme tailored for mindfulness and lifestyle blogs, using custom block patterns and ACF integration.",
      tags: ["Wordpress Development", "Blocks & Themes", "Online Store"],
      image: MindsetWP,

       media: [
        { type: "image", src: MindsetWP },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
      ]
      
      /* ● New Updates Below ● */


    },

    /* TicTacToe - JavaScript Game */
    {
      slug: "tictactoe",
      year: "2024",
      title: "TicTacToe Game",
      description: "A vanilla JavaScript implementation of the classic TicTacToe game with responsive layout and basic game logic.",
      tags: ["JavaScript", "Game Logic"],
      image: TICJS,

      media: [
        { type: "image", src: TICJS },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
      ]

      /* ● New Updates Below ● */

    },

    /* CSS Technologies */
    {
      slug: "css-technologies",
      year: "2024",
      title: "CSS Technologies",
      description: "Explorative page showcasing modern CSS features, animation experiments, and layout techniques.",
      tags: ["CSS", "Responsive", "Animation"],
      image: CSSTech,

      media: [
        { type: "image", src: CSSTech },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
      ]

      /* ● New Updates Below ● */


    },
  ];