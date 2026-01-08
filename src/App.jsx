import React, { useEffect, useState } from "react";
import "./scss/style.scss";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Tools from "./components/Tools/Tools";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

function App() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="layout_container">
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="main">
          <Hero />
          <Projects />
          <Experience />
          <Tools />
          <Blog />
          <Contact />

          <button
            className={`btn_top ${showBtn ? "show" : ""}`}
            onClick={topFunction}
            title="Go to top"
            style={{ display: showBtn ? "flex" : "none" }}
          >
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </main>
      </div>
    </div>
  );
}

export default App;
