/* {ProjectImages (PC ONLY)} */
import ProjectOnePC from "../components/images/projectimages/ONAFilmsPC.png";
import ProjectTwoPC from "../components/images/projectimages/SangHanPC.png";
import ProjectThreePC from "../components/images/projectimages/IntercodexPC.png";
import ProjectFourPC from "../components/images/projectimages/TicTacToeJS.png"
import ProjectFivePC from "../components/images/projectimages/CSSTech.png"

/* {Tool SVG Imports} */
import HTML from '../components/images/toolsvgs/HTMLsvg.svg';
import CSS from '../components/images/toolsvgs/CSSsvg.svg';
import JavaScript from '../components/images/toolsvgs/JavaScriptsvg.svg';
import Php from '../components/images/toolsvgs/PHPsvg.svg';
import Sass from '../components/images/toolsvgs/SASSsvg.svg';
import ReactLogo from '../components/images/toolsvgs/Reactsvg.svg';
import Wordpress from '../components/images/toolsvgs/Wordpresssvg.svg';


export const projects = [
    {
      slug: "intercodex",
      year: "2025",
      title: "Intercodex",
      description: "A corporate CMS-powered website for showcasing tech services and products. Built with SEO performance in mind.",
      tags: ["Wordpress Development", "CMS Integration", "Online Store"],
      image: ProjectThreePC,

      tools: [
        { logo: Wordpress },
        { name: "TMDB API", logo: "/logos/api.svg" },
        { name: "CSS Modules", logo: "/logos/cssmodules.svg" },
      ],

    },
    {
      slug: "onafilms",
      year: "2025",
      title: "ONA Films",
      description: "ONA Films is a movie database using the Movie API, bringing countless films into a single platform. Built with React and styled for sleek, fast UI/UX.",
      tags: ["React Development", "Movie API", "Responsive Design"],
      image: ProjectOnePC,

      tools: [
        { logo: ReactLogo },
        { name: "TMDB API", logo: "/logos/api.svg" },
        { name: "CSS Modules", logo: "/logos/cssmodules.svg" },
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
      slug: "sanghan-replica",
      year: "2025",
      title: "SangHan Replica",
      description: "A SASS/SCSS styled responsive clone of the SangHan director portfolio website, focusing on layout recreation and mobile responsiveness.",
      tags: ["SASS/SCSS", "Design Recreation", "SEO Responsive"],
      image: ProjectTwoPC,
    },
    {
      slug: "mindset-theme",
      year: "2025",
      title: "Mindset Theme",
      description: "A WordPress theme tailored for mindfulness and lifestyle blogs, using custom block patterns and ACF integration.",
      tags: ["Wordpress Development", "Blocks & Themes", "Online Store"],
      image: "",
    },
    {
      slug: "tictactoe",
      year: "2024",
      title: "TicTacToe Game",
      description: "A vanilla JavaScript implementation of the classic TicTacToe game with responsive layout and basic game logic.",
      tags: ["JavaScript", "Game Logic"],
      image: ProjectFourPC,
    },
    {
      slug: "css-technologies",
      year: "2024",
      title: "CSS Technologies",
      description: "Explorative page showcasing modern CSS features, animation experiments, and layout techniques.",
      tags: ["CSS", "Responsive", "Animation"],
      image: ProjectFivePC,
    },
  ];