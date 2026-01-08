import React from "react";

const Tools = () => {
  const tools = [
    { id: 1, name: "React", icon: "imgs/tools(1).avif" },
    { id: 2, name: "Node.js", icon: "imgs/tools(2).avif" },
    { id: 3, name: "MongoDB", icon: "imgs/tools(3).avif" },
    { id: 4, name: "Docker", icon: "imgs/tools(4).avif" },
    { id: 5, name: "Git", icon: "imgs/tools(6).avif" },
    { id: 6, name: "VS Code", icon: "imgs/tools(5).avif" },
  ];

  return (
    <section id="tools" className="tools">
      <h2 className="section-title">
        Premium <span>Tools</span>
      </h2>
      <div className="tools__list">
        {tools.map((tool) => (
          <div key={tool.id} className="tool">
            <img src={tool.icon} alt={tool.name} className="tool__icon" />
            <span className="tool__name">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
