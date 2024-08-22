import { useState } from "react";
import "./main.css";
import { motion } from "framer-motion";

export default function Main() {
  const handleClick = (buttonCateogry) => {
    setCurrentActive(buttonCateogry);
    const newArr = myProjects.filter((item) => {
      return item.category === buttonCateogry;
    });
    setArr(newArr);
  };
  const myProjects = [
    {
      projectTitle: "E-commerce",
      category: "react",
      imgPath:
        "https://res.cloudinary.com/dprfoqe2j/image/upload/v1724266334/zz_ct6vnm.jpg",
      subTitle:
        "A responsive online store built with React, featuring product listings, shopping cart functionality, and secure checkout. Integrates with a backend APIfor inventory management and order processing",
      github: "https://github.com/Kholoud93/E-commerce",
      liveDemo: "https://kholoud93.github.io/E-commerce/",
    },
    {
      projectTitle: "Portfolio",
      category: "css",
      imgPath:
        "https://res.cloudinary.com/dprfoqe2j/image/upload/v1724266334/6_xfeg5p.png",
      subTitle:
        "A clean, responsive personal portfolio website showcasing skills, projects, and contact information. Built with semantic HTML5 and modern CSS3 techniques, including flexbox and grid for layout.",
      github: "https://github.com/Kholoud93/simple-portfolio",
      liveDemo: "https://kholoud93.github.io/simple-portfolio/",
    },
    {
      projectTitle: "Todo App",
      category: "javascript",
      imgPath:
        "https://res.cloudinary.com/dprfoqe2j/image/upload/v1724266330/todo_cseqlo.png",
      subTitle:
        "An interactive task management application built with vanilla JavaScript, allowing users to add, edit, delete, and mark tasks as complete. Features local storage for data persistence and a clean, intuitive user interface.",
      github: "https://github.com/Kholoud93/To-Do-App",
      liveDemo: "https://kholoud93.github.io/To-Do-App/",
    },
    {
      projectTitle: "Quotes",
      category: "javascript",
      imgPath:
        "https://res.cloudinary.com/dprfoqe2j/image/upload/v1724266328/quotes_ny6hhp.jpg",
      subTitle:
        "A dynamic web application that displays random inspirational quotes, built with JavaScript. Features quote generation, category filtering, and the ability to share quotes on social media platforms.",
      github: "https://github.com/Kholoud93/Quotes",
      liveDemo: "https://kholoud93.github.io/Quotes/",
    },
    {
      projectTitle: "Weather App",
      category: "javascript",
      imgPath:
        "https://res.cloudinary.com/dprfoqe2j/image/upload/v1724266329/weather_app_agx24d.jpg",
      subTitle:
        "A responsive weather application that fetches and displays current weather data and forecasts using JavaScript and a weather API. Features location-based weather information, temperature unit conversion, and dynamic weather icons.",
      github: "https://github.com/Kholoud93/weather-Api",
      liveDemo: "https://kholoud93.github.io/weather-Api/",
    },
  ];
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          className={currentActive === "all" ? "active" : null}
          onClick={() => {
            setCurrentActive("all"), setArr(myProjects);
          }}
        >
          All Projects
        </button>
        <button
          className={currentActive === "css" ? "active" : null}
          onClick={() => {
            handleClick("css");
          }}
        >
          Html && Css
        </button>
        <button
          className={currentActive === "javascript" ? "active" : null}
          onClick={() => {
            handleClick("javascript");
          }}
        >
          Javascript
        </button>
        <button
          className={currentActive === "react" ? "active" : null}
          onClick={() => {
            handleClick("react");
          }}
        >
          React
        </button>
      </section>
      <section className="right-section flex">
        {arr.map((item) => {
          return (
            <motion.div
              layout
              initial={{ transform: "scale(0" }}
              animate={{ transform: "scale(1)" }}
              transform={{ type: "spring" }}
              className="card"
              key={item.imgPath}
            >
              <img src={item.imgPath} width={250} alt="" />
              <div style={{ width: "250px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="subtitle">{item.subTitle}</p>
                <div className="flex icons">
                  <div className="flex" style={{ gap: "10px" }}>
                    <div
                      className="icon-link"
                      onClick={() => window.open(item.liveDemo)}
                    ></div>
                    <div
                      className="icon-github"
                      onClick={() => window.open(item.github)}
                    ></div>
                  </div>
                  <a href="" className="link flex">
                    more{" "}
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
    </main>
  );
}
