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
import HTML from '/toolsvgs/HTML.svg';
import CSS from '/toolsvgs/CSS.svg';
import JS from '/toolsvgs/JavaScript.svg';
import PHP from '/toolsvgs/PHP-Dark.svg';
import SASS from '/toolsvgs/Sass.svg';

/* Library */
import REACT from '/toolsvgs/React-Dark.svg';
import VITE from '/toolsvgs/Vite-Dark.svg';
import GSAP from '/toolsvgs/gsap-auto.svg';
import LENIS from '/toolsvgs/Lenis.png';
import SPLIDE from '/toolsvgs/Splide.png';

/* Others */
import WP from '/toolsvgs/Wordpress.svg';
// import API from '/toolsvgs/API.svg';
// import WOO from '/toolsvgs/Woocommerce.png';

/* Tools/Designs */
import XD from '/toolsvgs/XD.svg'
import AI from '/toolsvgs/Illustrator.svg'
import FIGMA from '/toolsvgs/Figma-Dark.svg'

/* Icon Import */
import Developer from '/OtherImages/Developer.svg'
import DiamondSplide from '/OtherImages/DiamondSplide.svg'
import PuzzlePiece from '/OtherImages/PuzzlePiece.svg'
import PaintBrush from '/OtherImages/PaintBrush.svg'

/* Temp Import */
import iphone14 from '/OtherImages/iphone-14.png';
import macbookair from '/OtherImages/MacBookAir.png';

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
        live: "https://aumar.xyz/",
        code: "https://github.com/Auvancee/BCIT-ReactLandingPage",
        wireframe: "https://xd.adobe.com/view/21616fa2-49d7-44dc-8ec1-43eddb098857-7432/?fullscreenhttps://xd.adobe.com/view/21616fa2-49d7-44dc-8ec1-43eddb098857-7432/grid"
      },

      techstack: [
        { logo: HTML },
        { logo: CSS },
        { logo: JS },
        { logo: REACT },
        { logo: VITE },
        { logo: LENIS },
        { logo: SPLIDE },
        { logo: GSAP },
        { logo: XD },
        { logo: AI },
      ],

      developmentprocess: [
      { icon: Developer, 
        text: "The goal with Intercodex was to create a sleek, CMS-powered corporate site that felt lightweight, yet scalable. I used WordPress as the foundation, allowing for dynamic content management while customizing the front-end to keep the interface consistent and modern." },

      { icon: PuzzlePiece, 
        text: "Structurally, I focused on creating a reusable system of components—so future pages and sections could be easily added without breaking layout or flow. I implemented a modular CSS structure and paid extra attention to page hierarchy, ensuring clarity across multiple service lines." },

      { icon: PaintBrush, 
        text: "Throughout the build, performance remained a priority. I optimized asset loading and limited animation to subtle transitions that enhanced UX without slowing the site. The balance between flexibility and stability was a constant tradeoff—but one that pushed me to think more like a systems designer than a page builder." },

      { icon: DiamondSplide, 
        text: "This project taught me how small structural choices early on affect everything downstream—from loading speed to future edits" }
    ],

      responsiveImages: {
        mobile: [
          iphone14,
          iphone14,
          iphone14,
        ],
        desktop: macbookair
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
      ],

       /* ● New Updates Below ● */
      links: {
        live: "https://intercodex.bcitwebdeveloper.ca/",
        code: "https://github.com/Auvancee/BCIT-ReactLandingPage",
        wireframe: "https://www.figma.com/design/8vMN96tGTSHCkWFleZ7WFs/Capstone-Project?node-id=76-59&t=C0AIJ34Hakx1KB7m-1"
      },

      techstack: [
        { logo: HTML },
        { logo: CSS },
        { logo: JS },
        { logo: REACT },
        { logo: WP },
        { logo: PHP },
        { logo: FIGMA },
        { logo: AI}
      ],

      developmentprocess: [
      { icon: Developer, 
        text: "The goal with Intercodex was to create a sleek, CMS-powered corporate site that felt lightweight, yet scalable. I used WordPress as the foundation, allowing for dynamic content management while customizing the front-end to keep the interface consistent and modern." },

      { icon: PuzzlePiece, 
        text: "Structurally, I focused on creating a reusable system of components—so future pages and sections could be easily added without breaking layout or flow. I implemented a modular CSS structure and paid extra attention to page hierarchy, ensuring clarity across multiple service lines." },

      { icon: PaintBrush, 
        text: "Throughout the build, performance remained a priority. I optimized asset loading and limited animation to subtle transitions that enhanced UX without slowing the site. The balance between flexibility and stability was a constant tradeoff—but one that pushed me to think more like a systems designer than a page builder." },

      { icon: DiamondSplide, 
        text: "This project taught me how small structural choices early on affect everything downstream—from loading speed to future edits" }
    ],

      responsiveImages: {
        mobile: [
          iphone14,
          iphone14
        ],
        desktop: macbookair
      }

      

  

      

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
      ],

      /* ● New Updates Below ● */
      links: {
        live: "https://aumar.xyz/home",
        code: "https://github.com/Auvancee/BCIT-ReactMovieDatabase",
        wireframe: "https://xd.adobe.com/view/cd29fc8c-0f0a-4647-9b62-8c184b912c88-987a/?fullscreen"
      },

      techstack: [
        { logo: HTML },
        { logo: CSS },
        { logo: JS },
        { logo: REACT },
        { logo: VITE },
        { logo: LENIS },
        { logo: SPLIDE },
        { logo: XD },
        { logo: AI },
      ],

      developmentprocess: [
      { icon: Developer, 
        text: "The goal with Intercodex was to create a sleek, CMS-powered corporate site that felt lightweight, yet scalable. I used WordPress as the foundation, allowing for dynamic content management while customizing the front-end to keep the interface consistent and modern." },

      { icon: PuzzlePiece, 
        text: "Structurally, I focused on creating a reusable system of components—so future pages and sections could be easily added without breaking layout or flow. I implemented a modular CSS structure and paid extra attention to page hierarchy, ensuring clarity across multiple service lines." },

      { icon: PaintBrush, 
        text: "Throughout the build, performance remained a priority. I optimized asset loading and limited animation to subtle transitions that enhanced UX without slowing the site. The balance between flexibility and stability was a constant tradeoff—but one that pushed me to think more like a systems designer than a page builder." },

      { icon: DiamondSplide, 
        text: "This project taught me how small structural choices early on affect everything downstream—from loading speed to future edits" }
    ],

      responsiveImages: {
        mobile: [
          iphone14,
          iphone14
        ],
        desktop: macbookair
      }




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
      ],

       /* ● New Updates Below ● */
      links: {
        live: "https://auvancee.github.io/BCIT-SangHanReplica/",
        code: "https://github.com/Auvancee/BCIT-SangHanReplica",
        wireframe: ""
      },

      techstack: [
        { logo: HTML },
        { logo: CSS },
        { logo: JS },
        { logo: SASS },
      ],

      developmentprocess: [
      { icon: Developer, 
        text: "The goal with Intercodex was to create a sleek, CMS-powered corporate site that felt lightweight, yet scalable. I used WordPress as the foundation, allowing for dynamic content management while customizing the front-end to keep the interface consistent and modern." },

      { icon: PuzzlePiece, 
        text: "Structurally, I focused on creating a reusable system of components—so future pages and sections could be easily added without breaking layout or flow. I implemented a modular CSS structure and paid extra attention to page hierarchy, ensuring clarity across multiple service lines." },

      { icon: PaintBrush, 
        text: "Throughout the build, performance remained a priority. I optimized asset loading and limited animation to subtle transitions that enhanced UX without slowing the site. The balance between flexibility and stability was a constant tradeoff—but one that pushed me to think more like a systems designer than a page builder." },

      { icon: DiamondSplide, 
        text: "This project taught me how small structural choices early on affect everything downstream—from loading speed to future edits" }
    ],

      responsiveImages: {
        mobile: [
          iphone14,
          iphone14
        ],
        desktop: macbookair
      }
      


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
      ],

       /* ● New Updates Below ● */
      links: {
        live: "https://aumar.xyz/tictactoe-javascript-game/",
        code: "https://github.com/Auvancee/BCIT-TicTacToeJS",
        wireframe: ""
      },

      techstack: [
        { logo: HTML },
        { logo: CSS },
        { logo: JS },
      ],

      developmentprocess: [
      { icon: Developer, 
        text: "The goal with Intercodex was to create a sleek, CMS-powered corporate site that felt lightweight, yet scalable. I used WordPress as the foundation, allowing for dynamic content management while customizing the front-end to keep the interface consistent and modern." },

      { icon: PuzzlePiece, 
        text: "Structurally, I focused on creating a reusable system of components—so future pages and sections could be easily added without breaking layout or flow. I implemented a modular CSS structure and paid extra attention to page hierarchy, ensuring clarity across multiple service lines." },

      { icon: PaintBrush, 
        text: "Throughout the build, performance remained a priority. I optimized asset loading and limited animation to subtle transitions that enhanced UX without slowing the site. The balance between flexibility and stability was a constant tradeoff—but one that pushed me to think more like a systems designer than a page builder." },

      { icon: DiamondSplide, 
        text: "This project taught me how small structural choices early on affect everything downstream—from loading speed to future edits" }
    ],

      responsiveImages: {
        mobile: [
          iphone14,
          iphone14,
          
        ],
        desktop: macbookair
      }

    },

  ];