/* {ProjectImages (PC ONLY)} */
import ProjectOnePC from "/projectimages/ONAFilmsPC.png";
import ProjectTwoPC from "/projectimages/SangHanPC.png";
import ProjectThreePC from "/projectimages/IntercodexPC.png";
import ProjectFourPC from "/projectimages/TicTacToeJS.png"
import ProjectFivePC from "/projectimages/CSSTech.png"
import ProjectSixPC from "/projectimages/Mindset.png";

/* {Tool SVG Imports} */
import HTML from '/toolsvgs/HTMLsvg.svg';
import CSS from '/toolsvgs/CSSsvg.svg';
import JavaScript from '/toolsvgs/JavaScriptsvg.svg';
import Php from '/toolsvgs/PHPsvg.svg';
import Sass from '/toolsvgs/SASSsvg.svg';
import ReactLogo from '/toolsvgs/Reactsvg.svg';
import Wordpress from '/toolsvgs/Wordpresssvg.svg';
import GSAP from '/toolsvgs/Greensock.svg';
import API from '/toolsvgs/API.svg';
import Woo from '/toolsvgs/Woocommerce.png';

/* {Desgin SVG Imports} */

export const projects = [
    {
      slug: "intercodex",
      year: "2025",
      title: "Intercodex",
      description: "A corporate CMS-powered website for showcasing tech services and products. Built with SEO performance in mind.",
      tags: ["Wordpress Development", "CMS Integration", "Online Store"],
      image: ProjectThreePC,

      tools: [
        { logo: HTML },
        { logo: CSS },
        { logo: JavaScript },
        { logo: Wordpress },
        { logo: Php },
        { logo: Woo },
      ],

      development: [
        "Built a fully responsive layout using grid and flexbox.",
        "Implemented dynamic routing with React Router for individual movie pages.",
        "Integrated external API (TMDB) using async/await and Axios.",
       
      ],
      
      challenges: [
        "Handling inconsistent data responses from TMDB.",
        "Styling for mobile-first while keeping desktop fluid.",
        "Balancing animation with performance for load speed.",
      ],
    
      learningCurve: [
        "Deepened understanding of asynchronous API handling.",
        "Learned efficient component reuse across routes.",
        "Got comfortable debugging CORS and API quota issues.",
      ],

      media: [
        { type: "image", src: ProjectThreePC },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
        { type: "youtube", src: "https://www.youtube.com/embed/abc123xyz" },
      ]

    },
    {
      slug: "onafilms",
      year: "2025",
      title: "ONA Films",
      description: "ONA Films is a movie database using the Movie API, bringing countless films into a single platform. Built with React and styled for sleek, fast UI/UX.",
      tags: ["React Development", "Movie API", "Responsive Design"],
      image: ProjectOnePC,

      tools: [

        { logo: HTML },
        { logo: CSS },
        { logo: JavaScript },
        { logo: GSAP },
        { logo: ReactLogo },
        { logo: API },
      ],
    
      development: [
        "Built a fully responsive layout using grid and flexbox.",
        "Implemented dynamic routing with React Router for individual movie pages.",
        "Integrated external API (TMDB) using async/await and Axios.",
      ],
    
      challenges: [
        "Handling inconsistent data responses from TMDB.",
        "Styling for mobile-first while keeping desktop fluid.",
        "Balancing animation with performance for load speed.",
      ],
    
      learningCurve: [
        "Deepened understanding of asynchronous API handling.",
        "Learned efficient component reuse across routes.",
        "Got comfortable debugging CORS and API quota issues.",
      ],

      media: [
        { type: "image", src: ProjectOnePC },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
        { type: "video", src: "/projectmedia/intercodex/demo.mp4" },
      ]

    },
    {
      slug: "sanghan-replica",
      year: "2025",
      title: "SangHan Replica",
      description: "A SASS/SCSS styled responsive clone of the SangHan director portfolio website, focusing on layout recreation and mobile responsiveness.",
      tags: ["SASS/SCSS", "Design Recreation", "SEO Responsive"],
      image: ProjectTwoPC,

      tools: [
        { logo: HTML },
        { logo: CSS },
        { logo: JavaScript },
        { logo: ReactLogo },
        { logo: Sass },
      ],
    
      development: [
        "Built a fully responsive layout using grid and flexbox.",
        "Implemented dynamic routing with React Router for individual movie pages.",
        "Integrated external API (TMDB) using async/await and Axios.",
      ],
    
      challenges: [
        "Handling inconsistent data responses from TMDB.",
        "Styling for mobile-first while keeping desktop fluid.",
        "Balancing animation with performance for load speed.",
      ],
    
      learningCurve: [
        "Deepened understanding of asynchronous API handling.",
        "Learned efficient component reuse across routes.",
        "Got comfortable debugging CORS and API quota issues.",
      ],


    },
    {
      slug: "mindset-theme",
      year: "2025",
      title: "Mindset Theme",
      description: "A WordPress theme tailored for mindfulness and lifestyle blogs, using custom block patterns and ACF integration.",
      tags: ["Wordpress Development", "Blocks & Themes", "Online Store"],
      image: ProjectSixPC,

      tools: [
        { logo: HTML },
        { logo: CSS },
        { logo: JavaScript },
        { logo: Wordpress },
        { logo: Php },
        { logo: Woo },
      ],
    
      development: [
        "Built a fully responsive layout using grid and flexbox.",
        "Implemented dynamic routing with React Router for individual movie pages.",
        "Integrated external API (TMDB) using async/await and Axios.",
      ],
    
      challenges: [
        "Handling inconsistent data responses from TMDB.",
        "Styling for mobile-first while keeping desktop fluid.",
        "Balancing animation with performance for load speed.",
      ],
    
      learningCurve: [
        "Deepened understanding of asynchronous API handling.",
        "Learned efficient component reuse across routes.",
        "Got comfortable debugging CORS and API quota issues.",
      ],


    },
    {
      slug: "tictactoe",
      year: "2024",
      title: "TicTacToe Game",
      description: "A vanilla JavaScript implementation of the classic TicTacToe game with responsive layout and basic game logic.",
      tags: ["JavaScript", "Game Logic"],
      image: ProjectFourPC,

      tools: [
        { logo: HTML },
        { logo: CSS },
        { logo: JavaScript },
      ],
    
      development: [
        "Built a fully responsive layout using grid and flexbox.",
        "Implemented dynamic routing with React Router for individual movie pages.",
        "Integrated external API (TMDB) using async/await and Axios.",
      ],
    
      challenges: [
        "Handling inconsistent data responses from TMDB.",
        "Styling for mobile-first while keeping desktop fluid.",
        "Balancing animation with performance for load speed.",
      ],
    
      learningCurve: [
        "Deepened understanding of asynchronous API handling.",
        "Learned efficient component reuse across routes.",
        "Got comfortable debugging CORS and API quota issues.",
      ],


    },
    {
      slug: "css-technologies",
      year: "2024",
      title: "CSS Technologies",
      description: "Explorative page showcasing modern CSS features, animation experiments, and layout techniques.",
      tags: ["CSS", "Responsive", "Animation"],
      image: ProjectFivePC,

      tools: [
        { logo: HTML },
        { logo: CSS },
        { logo: JavaScript },
      ],
    
      development: [
        "Built a fully responsive layout using grid and flexbox.",
        "Implemented dynamic routing with React Router for individual movie pages.",
        "Integrated external API (TMDB) using async/await and Axios.",
      ],
    
      challenges: [
        "Handling inconsistent data responses from TMDB.",
        "Styling for mobile-first while keeping desktop fluid.",
        "Balancing animation with performance for load speed.",
      ],
    
      learningCurve: [
        "Deepened understanding of asynchronous API handling.",
        "Learned efficient component reuse across routes.",
        "Got comfortable debugging CORS and API quota issues.",
      ],


    },
  ];