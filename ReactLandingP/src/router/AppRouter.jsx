import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "../components/FooterOne";
// import Header from "../components/HeaderOne";
import PageHome from "../pages/PageHome";
import PageWorks from "../pages/PageWorks";
import PageSynopsis from "../pages/PageSynopsis";
import ProjectDetail from "../pages/ProjectDetail";



const AppRouter = () => {



  
    return (
      
      <>
        
      
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/works" element={<PageWorks />} />
            <Route path="/synopsis" element={<PageSynopsis />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
  
        
      </>
  
    );
  };
  
  const App = () => {
    return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );
  };
  
  export default App;