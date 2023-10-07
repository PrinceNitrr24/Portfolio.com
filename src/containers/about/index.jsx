import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiApple } from "react-icons/di";
// import bgImage from "../../video/video2.mp4";
import {
  FaDev,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGit,
  FaGithub,
  FaCode,
  FaLaptop,
  FaReact,
  FaPython,
} from "react-icons/fa";

// const personalDetails = [
//   {
//     label: "Name:",
//     value: "Prince Kumar",
//   },
//   {
//     label: "Date of Birth:",
//     value: "20-05-2001",
//   },
//   {
//     label: "Address:",
//     value: "Bihar, India",
//   },
//   {
//     label: "Email:",
//     value: "princekumarbug12344@gmail.com",
//   },
//   {
//     label: "Youtube:",
//     value: "Prince_NITRR",
//   },
// ];

// const jobSummary =
//   "As a versatile web developer, I bring a rich skill set to the table. Proficient in HTML, CSS, and JavaScript, I craft stunning, interactive web experiences. My expertise extends to GSAP for smooth animations and Git/GitHub for seamless collaboration. I excel in React.js and have a knack for data with Power BI, SQL, and Microsoft Excel. My coding prowess extends to Python, C++, and HTML5 Canvas. I'm also skilled in crafting 3D magic with Three.js. With a passion for innovation, I'm constantly exploring the latest backend technologies, ready to elevate any project.";

const About = () => {
  return (
    <section id="about" className="about">
      {/* <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" />
      </video> */}
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            {/* <h3>Front End Developer</h3> */}
            {/* <p>{jobSummary}</p> */}
            <p></p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            {/* <h3 className="personalInformationHeaderText">
              Personal Information
            </h3> */}
            {/* <ul>
              {personalDetails.map((item, i) => (
                <li key={i} className="info">
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul> */}
            /
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="wheat" />
              </div>
              <div>
                <FaDatabase size={60} color="wheat" />
              </div>
              <div>
                <FaHtml5 size={60} color="wheat" />
              </div>
              <div>
                <FaCss3 size={60} color="wheat" />
              </div>
              <div>
                <FaJs size={60} color="wheat" />
              </div>

              <div>
                <FaGit size={60} color="wheat" />
              </div>
              <div>
                <FaGithub size={60} color="wheat" />
              </div>
              <div>
                <FaCode size={60} color="wheat" />
              </div>

              <div>
                <FaReact size={60} color="wheat" />
              </div>
              <div>
                <FaPython size={60} color="wheat" />
              </div>

              <div>
                <FaLaptop size={60} color="wheat" />
              </div>

              <div>
                <DiApple size={60} color="wheat" />
              </div>
            </div>
            /
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
