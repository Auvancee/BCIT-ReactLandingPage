import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HeaderTwo from "../components/HeaderTwo";
import FooterOne from "../components/FooterOne";
import { projects } from "../global/projectData";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import "./ProjectDetail.css";

function ProjectDetail() {
  const lenis = useLenis(({ scroll }) => {});
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <ReactLenis root>
      <main className="ProjectDetailMain">
        <HeaderTwo />

        

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
            {project.image && (
              <div className="ProjectDetailImage">
                <img src={project.image} alt={project.title} />
              </div>
            )}

            {/* Tools */}
            {project.tools && project.tools.length > 0 && (
              <div className="DetailsSection">
                <h2 className="SubTitle">Tools & Technologies</h2>
                <div className="ToolGrid">
                  {project.tools.map((tool, i) => (
                    <div className="ToolItem" key={i}>
                      <img src={tool.logo} alt={tool.name} />
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Sections */}
            <div className="DetailsSection">
                <Section title="Development Process" items={project.development} className="DetailHeading" />
                <Section title="Setbacks & Challenges" items={project.challenges} className="DetailHeading" />
                <Section title="Learning Curve" items={project.learningCurve}  className="DetailHeading" />
            </div>

            
          </div>
        </section>

        
      </main>
    </ReactLenis>
  );
}

export default ProjectDetail;
