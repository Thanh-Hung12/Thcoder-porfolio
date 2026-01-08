import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tech Company Inc.",
      role: "Senior Frontend Developer",
      period: "Jan 2022 - Present",
      description:
        "Led development of multiple high-traffic applications. Mentored junior developers and established best practices for the frontend team.",
      skills: ["React", "TypeScript", "Redux", "CSS-in-JS"],
    },
    {
      id: 2,
      company: "Digital Solutions Ltd.",
      role: "Full Stack Developer",
      period: "Jun 2020 - Dec 2021",
      description:
        "Developed and maintained web applications for various clients. Collaborated with design and product teams to deliver user-centric solutions.",
      skills: ["MERN Stack", "PostgreSQL", "Docker", "AWS"],
    },
  ];

  return (
    <section id="experience" className="experience">
      >
      <h2 className="section-title">
        5 Years of <span>Experience</span>
      </h2>
      <div className="experience__list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience__item">
            <h3>{exp.company}</h3>
            <div className="role">{exp.role}</div>
            <div className="period">{exp.period}</div>
            <p>{exp.description}</p>
            <div className="skills">
              {exp.skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
