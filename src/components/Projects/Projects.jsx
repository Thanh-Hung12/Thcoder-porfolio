import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with product management, shopping cart, and payment integration. Built with React, Node.js, and MongoDB.",
      image: "imgs/project(2).avif",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Real-time task management application with team collaboration features. Includes drag-and-drop functionality and notifications.",
      image: "imgs/projects(3).avif",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for tracking social media metrics across multiple platforms. Interactive charts and real-time data updates.",
      image: "imgs/proiects(1).avif",
      tags: ["Vue.js", "Express", "Chart.js"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">
        Recent <span>Projects</span>
      </h2>

      {projects.map((project) => (
        <div key={project.id} className="project">
          <div className="project__thumbnail">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project__info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="project__link">
            <a href={project.link}>
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
