import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HeaderTwo from "../components/HeaderTwo";
import FooterOne from "../components/FooterOne";
import { projects } from "../global/projectData";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import "./ProjectDetail.css";
import SplideGallery from "../components/SplideGallery"; // adjust path as needed

function ProjectDetail() {
  // const lenis = useLenis(({ scroll }) => {});
   useLenis(() => {});
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

//   useEffect(() => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }, [slug]);

  if (!project) {
    return (
      <div style={{ padding: "4rem", textAlign: "center" }}>
        <h2>Project not found</h2>
      </div>
    );
  }

  

  const Section = ({ title, items }) =>
    items && items.length > 0 && (
      <div className="DetailSection">
        <h2 className="SubTitle">{title}</h2>
        <ul className="DetailList">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );

    const currentIndex = projects.findIndex(p => p.slug === slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];


  return (
    <ReactLenis root>
      <main className="ProjectDetailMain">
        

        

        <section className="ProjectDetailSection">
          {/* Back Button */}
            <Link to="/works" className="BackLink">
              ← Back to Projects
            </Link>

          <div className="ProjectDetailWrapper">
            {/* Title & Short Description */}
            <div className="ProjectContentFirst">
              <h1 className="ProjectTitle">{project.title}</h1>
              <div className="ProjectContentSecond">
                <p className="ProjectDesc">{project.description}</p>
                <div className="ProjectDetailTags">
                  {project.tags.map((tag, i) => (
                    <span className="Tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            {project.media ? (
              <SplideGallery media={project.media} />
            ) : project.image ? (
              <div className="ProjectDetailImage">
                <img src={project.image} alt={project.title} />
              </div>
            ) : null}


            {/* Links */}
            {project.links && (
              <div className="ExternalLinks">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noreferrer">View Live</a>
                )}
                {project.links.code && (
                  <a href={project.links.code} target="_blank" rel="noreferrer">View Code</a>
                )}
                {project.links.wireframe && (
                  <a href={project.links.wireframe} target="_blank" rel="noreferrer">View AdobeXD</a>
                )}
              </div>
            )}

            {/* Tech Stack */}
            {project.techstack && (
              <div className="TechStackSection">
                <div className="TechStackHeading">Tech Stack</div>
                <div className="TechStackBox">
                  {project.techstack.map((tool, i) => (
                    <img key={i} src={tool.logo} alt={tool.name} className="TechIcon" />
                  ))}
                </div>
              </div>
            )}


            {/* Development Process */}
            {project.developmentprocess && (
              <div className="DevelopmentProcess">
                <h2 className="SubTitle">Development Process</h2>
                <div className="DevProcessGrid">
                  {project.developmentprocess.map((step, i) => (
                    <div className="DevStep" key={i}>
                      <img src={step.icon} alt="step icon" className="StepIcon" />
                      <p>{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Responsive Design Section */}
            {project.responsiveImages && (
              <div className="ResponsiveShowcase">
                <h2 className="SubTitle">Responsive Design \ <br/> Accessibility</h2>

                <div className="ResponsiveTopRow">
                  <div className="ResponsiveText">
                    <p>Mobile-First,<br />Everywhere Always</p>
                  </div>
                  <div className="ResponsiveMobileImages">
                    {project.responsiveImages.mobile.map((img, i) => (
                      <img key={i} src={img} className="MobileScreen" alt={`Mobile ${i}`} />
                    ))}
                  </div>
                </div>

                <div className="ResponsiveBottomColumn">
                  <img src={project.responsiveImages.desktop} className="MacScreen" alt="Desktop view" />
                  <p className="MacNote">Designing for All Devices</p>
                </div>
              </div>
            )}

            
          </div>

          

        </section>

            {/* Mini Footer: Next Work */}
          {projects.length > 1 && (
            <div className="NextProjectFooter">
              <p className="NextLabel">Next Work</p>
              <a href={`/project/${nextProject.slug}`} className="NextTitle">
                {nextProject.title}
              </a>

              <hr className="FooterLine" />
              <Link to="/works" className="AllWorksButton">All Work ↗</Link>
              <p className="FooterSignature">HAFIZAU ©2025</p>
            </div>
          )}
        
      </main>
    </ReactLenis>
  );
}

export default ProjectDetail;
