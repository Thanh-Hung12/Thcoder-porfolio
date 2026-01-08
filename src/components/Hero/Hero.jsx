import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Counter animation
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <section id="hero" className="hero">
      <h1 className="hero__title section-title">
        Software <span className="hero__highlight">Engineer</span>
      </h1>
      <p className="hero__desc">
        Passionate about creating intuitive and engaging user experiences with
        cutting-edge technology.
      </p>

      <div className="hero__stats">
        <div className="hero__stat">
          <span className="counter" data-target="12">
            0
          </span>
          <span>
            YEAR OF
            <br />
            EXPERIENCE
          </span>
        </div>
        <div className="hero__stat">
          <span className="counter" data-target="46">
            0
          </span>
          <span>
            PROJECTS
            <br />
            COMPLETED
          </span>
        </div>
        <div className="hero__stat">
          <span className="counter" data-target="20">
            0
          </span>
          <span>
            WORLDWIDE
            <br />
            CLIENTS
          </span>
        </div>
      </div>

      <div className="hero__skills">
        <div className="skill-card skill-card--orange">
          <h3>Frontend Development</h3>
          <p>
            Create stunning responsive interfaces with modern frameworks like
            React, Vue, and Angular. Proficient in HTML5, CSS3, and JavaScript
            ES6+.
          </p>
        </div>
        <div className="skill-card skill-card--green">
          <h3>Backend Development</h3>
          <p>
            Build robust and scalable APIs with Node.js, Express, and Python.
            Database expertise with MongoDB, PostgreSQL, and MySQL.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
