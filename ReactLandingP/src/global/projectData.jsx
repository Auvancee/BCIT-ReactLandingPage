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
import WOO from '/toolsvgs/WooCommerce.svg';

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
        heading: "Project Scope:",
        text: ( <>
          This portfolio was built as both a showcase and a reflection of my evolving thinking as a developer. 
          I treated it as a personal platform to experiment with smoother motion, scalable architecture, and 
          clarity in communication. It wasn’t just about presenting work — it was about expressing how I think.
        </>  
      )
      },

      { icon: PuzzlePiece, 
        heading: "System Design:",
        text: ( <>
          I used modular component structures and integrated motion libraries like GSAP and Lenis to create a flow 
          that felt fluid but controlled. Every section was built with reusability in mind, allowing for consistent 
          behavior across pages while keeping the codebase manageable and adaptable.
        </>  
      )
    },

      { icon: PaintBrush, 
        heading: "Interface Behavior:",
        text: ( <>
          Animations were treated as tools for focus—not flair. Visual transitions were 
          designed to direct attention and reinforce hierarchy rather than distract. Every 
          interaction, hover, and scroll behavior was tuned to feel responsive and intuitive 
          without overcomplicating the experience.
        </>  
      )
    },
      { icon: DiamondSplide, 
        heading: "Reflection:",
        text: ( <>
          This project taught me that simplicity is harder than complexity—but far more rewarding. 
          It pushed me to think like both the user and the builder, and showed me how intentional 
          design paired with thoughtful development can create experiences that are both functional 
          and memorable.
        </>  
      )
    },

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
        { logo: WOO },
        { logo: FIGMA },
        { logo: AI}
      ],

      developmentprocess: [
      { icon: Developer, 
        heading: "Project Scope:",
        text: ( <>
          Intercodex was developed as a fictional tech showcase—a blend between a virtual 
          Comic-Con and a modern product conference. Built collaboratively, the goal was to 
          create an experience that combined real-time updates, content-rich pages, and a bold 
          visual identity that would appeal to a diverse digital audience.
        </>  
      )
      },

      { icon: PuzzlePiece, 
        heading: "System Design:",
        text: ( <>
          The project leveraged WordPress custom post types and taxonomies to model speakers, 
          events, and schedules in a scalable way. We used Gutenberg blocks and the template hierarchy 
          to modularize content rendering, while WooCommerce handled ticketing, pricing tiers, and live updates. 
          This architecture gave the team flexibility across both structure and content delivery.
        </>  
      )
    },

      { icon: PaintBrush, 
        heading: "Interface Behavior:",
        text: ( <>
          The interface was designed in Figma and implemented with a focus on responsiveness and accessibility. 
          Custom blocks and modals were optimized for mobile-first viewing, while hover states and visual 
          transitions guided users through complex information without friction. We kept performance top of 
          mind—prioritizing lightweight assets and accessible markup.   
        </>  
      )
    },
      { icon: DiamondSplide, 
        heading: "Reflection:",
        text: ( <>
          Intercodex taught me how to work within a team while still owning core sections of the build. 
          Collaborating via Slack and Discord, we solved blockers through regular mentor feedback and daily 
          async updates. It sharpened my ability to plan architecture around actual content needs and made 
          me more confident in working with dynamic systems that serve real user flows.
        </>  

      )
    },

    ],

      

  

      

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
        heading: "Project Scope:",
        text: ( <>
          ONA Films is a collaborative React-based web app built to simulate a cinematic movie 
          browser using the TMDB API. The goal was to create an engaging discovery platform that 
          felt both interactive and accessible—where users could explore trending films with ease, 
          across devices.
        </>  
      )
      },

      { icon: PuzzlePiece, 
        heading: "System Design:",
        text: ( <>
          We built the app using modular React components and dynamic routing with React Router. 
          Data was handled asynchronously via Axios and abstracted into services for reuse across 
          views. We integrated Splide for carousel functionality and structured our file system to 
          encourage scalability. The architecture focused on separation of concerns—handling data, 
          presentation, and routing independently for maintainability.
        </>  
      )
    },

      { icon: PaintBrush, 
        heading: "Interface Behavior:",
        text: ( <>
          The interface was built around smooth user flow and clarity. Using Lenis for subtle scroll behavior, 
          we ensured that content moved fluidly and felt responsive across devices. Carousel navigation, hover states, 
          and modal previews were all designed to feel intuitive and consistent—guiding users without adding visual noise. 
          Mobile layout and accessibility were prioritized from the start to make browsing seamless on any screen.
        </>  
      )
    },
      { icon: DiamondSplide, 
        heading: "Reflection:",
        text: ( <>
          Working on ONA Films pushed me to collaborate deeply—from resolving state flow bugs with teammates to 
          refining layout behavior based on design feedback. I learned the value of modular thinking in React, the 
          power of clean async data handling, and how to prioritize user experience while balancing technical constraints. 
          It was a project that matured both my technical approach and my communication inside a dev team.
        </>  

      )
    },

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
        heading: "Project Scope:",
        text: ( <>
          This collaborative project involved recreating the Sang Han portfolio site—a minimalist, 
          visual-heavy layout—with SCSS and vanilla JavaScript. The goal was to replicate the overall 
          structure and flow of the site closely, focusing on responsive design and layout precision without 
          relying on the original codebase.
        </>  
      )
      },

      { icon: PuzzlePiece, 
        heading: "System Design:",
        text: ( <>
          We used SCSS partials, variables, and BEM naming conventions to keep the code modular and scalable
          across team contributions. While not pixel-perfect, the layout was recreated with attention to hierarchy 
          and spacing using Flexbox and media queries. Roles were divided clearly, and files were structured to 
          streamline collaboration.
        </>  
      )
    },

      { icon: PaintBrush, 
        heading: "Interface Behavior:",
        text: ( <>
          The interface focused on maintaining a clean, predictable rhythm. Hover states, transitions, and layout 
          scale were designed to echo the elegance of the original site. Animations were minimal by choice, letting typography, 
          spacing, and visual pacing carry the experience across screen sizes.
        </>  
      )
    },
      { icon: DiamondSplide, 
        heading: "Reflection:",
        text: ( <>
          This project gave me hands-on experience working within a shared codebase—learning how to stay organized, communicate 
          through code, and adapt to team decisions. Recreating the layout taught me how to balance design intent with clean, scalable CSS. 
          It also helped me see how collaborative structure supports clarity at every stage of a build.
        </>  

      )
    },

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
        heading: "Project Scope:",
        text: ( <>
          TicTacToe JS is a browser-based implementation of the classic game, designed to reinforce core JavaScript 
          fundamentals. The objective was to build a fully functional, responsive game interface using only HTML, CSS, 
          and vanilla JavaScript—emphasizing clean logic, user interaction, and mobile accessibility.
        </>  
      )
      },

      { icon: PuzzlePiece, 
        heading: "System Design:",
        text: ( <>
          The game logic was structured around a modular approach, separating concerns between game state management and 
          DOM manipulation. Functions were created to handle player turns, win conditions, and game resets, ensuring clarity 
          and maintainability. The codebase was organized to facilitate scalability, allowing for potential future enhancements 
          like AI integration or score tracking.
        </>  
      )
    },

      { icon: PaintBrush, 
        heading: "Interface Behavior:",
        text: ( <>
          The user interface features a minimalist 3x3 grid layout, with responsive design principles ensuring usability 
          across devices. Interactive elements provide immediate feedback on player actions, and the game state updates dynamically 
          to reflect wins, draws, or ongoing play. A reset functionality allows users to start new games seamlessly
        </>  
      )
    },
      { icon: DiamondSplide, 
        heading: "Reflection:",
        text: ( <>
          This project was a starting point in solidifying my JavaScript fundamentals. While simple on the surface, building 
          TicTacToe helped me better understand state management, conditionals, and interaction feedback. It exposed gaps I’m 
          now actively working to close—and gave me a clearer sense of what clean, maintainable JS looks like in practice.
        </>  

      )
    },

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