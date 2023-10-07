import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageTwo from "../../images/image2.jpeg";
import ImageOne from "../../images/image1.jpeg";
import ImageThree from "../../images/image3.PNG";
import ImageFour from "../../images/image4.PNG";
import ImageFive from "../../images/image5.png";
import "./style.scss";

const portfolioData = [
  {
    id: 20,
    name: "Creative!",
    image: ImageTwo,
    link: "",
    target: "_blank",
  },

  {
    id: 30,
    name: "Portfolio Sample!",
    image: ImageOne,
    link: "",
  },
  {
    id: 40,
    name: "Matrix Code Rain!",
    image: ImageThree,
    link: "",
  },
  {
    id: 50,
    name: "Portfolio!",
    image: ImageFour,
    link: "",
  },
  {
    id: 6,
    name: "HTML5 Canvas!",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 0, // Change this to 0 for "All"
    label: "All",
    link: "",
  },
  {
    filterId: 90,
    label: "Development",
    link: "",
  },
  {
    filterId: 100,
    label: "Design",
    link: "",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilterdValue] = useState(0); // Change initial value to 0
  const [hoveredValue, setHoveredValue] = useState(null);

  function handlFilter(currentId) {
    setFilterdValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 0
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <>
      <section id="portfolio" className="portfolio">
        <PageHeaderContent
          headerText="My Portfolio"
          icon={<BsInfoCircleFill size={40} />}
        />

        <div className="portfolio__content">
          <ul className="portfolio__content__filter">
            {filterData.map((item) => (
              <li
                className={item.filterId === filteredvalue ? "active" : ""}
                onClick={() => handlFilter(item.filterId)}
                key={item.filterId}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="portfolio__content__cards">
            {filteredItems.map((item, index) => (
              <div
                className="portfolio__content__cards__item"
                key={`cardItems${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a href={item.link} target={item.target}>
                    <img alt="dummy data" src={item.image} />
                  </a>
                </div>

                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <button>Visit</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
