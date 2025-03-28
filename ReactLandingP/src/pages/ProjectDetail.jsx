import React from "react";
import { useParams, Link } from "react-router-dom";
import HeaderTwo from "../components/HeaderTwo";
import FooterOne from "../components/FooterOne";
import { projects } from "../global/projectData";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import "./ProjectDetail.css";

function ProjectDetail() {
const lenis = useLenis(({ scroll }) => {});
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  

  if (!project) {
    return <div style={{ padding: "4rem", textAlign: "center" }}><h2>Project not found</h2></div>;
  }

  return (
    <ReactLenis root>
            <main>
            <HeaderTwo />

            <br/><br/><br/><br/>

            <section className="ProjectDetailSection">
                <div className="ProjectDetailWrapper">    
                    <h1 className="ProjectTitle">{project.title}</h1>
                    <p className="ProjectDesc">{project.description}</p>
                    <div className="ProjectDetailTags">
                        {project.tags.map((tag, i) => (
                        <span className="Tag" key={i}>{tag}</span>
                        ))}
                    </div>
                </div>
                

                {project.image && (
                    <div className="ProjectDetailImage">
                        <img src={project.image} alt={project.title} />
                    </div>
                )}

                <div className="ProjectDetailTags">
                    {project.tags.map((tag, i) => (
                    <span className="Tag" key={i}>{tag}</span>
                    ))}
                </div>

                <Link to="/works" className="BackLink">← Back to Projects</Link>
                
            </section>
            
            </main>
        </ReactLenis>
  );
}

export default ProjectDetail;
