import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./style.scss";
import bgImage from "../../video/back.mp4";

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills">
        <video className="video1" autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>

        <PageHeaderContent
          headerText="Skills"
          icon={<BsInfoCircleFill size={40} />}
        />

        <div className="skills__content-wrapper">
          {skillsData.map((item, index) => (
            <div key={index} className="skills__content_wrapper__inner-content">
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: "translateX(-500px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3 className="skills__content-wrapper__inner-content__category-text">
                  {item.label}
                </h3>

                <div className="skills__content-wrapper__inner-content__progressbar-container">
                  {item.data.map((skillItem, j) => (
                    <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={[
                        "opacity: 1, transform: scaleX(1)",
                        "opacity: 0, transform: scaleX(0)",
                      ]}
                      iterationCount="1"
                      key={j}
                    >
                      <div className="progressbar-wrapper" key={j}>
                        <p>{skillItem.skillName}</p>
                        <Line
                          percent={skillItem.percentage}
                          strokeWidth="5"
                          strokeColor="rgb(5, 247, 5)"
                          trailWidth="5"
                          strokeLinecap="circle"
                        />
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
