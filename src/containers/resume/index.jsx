import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { data } from "./utilis";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.scss";

const Resume = () => {
  return (
    <>
      <section id="resume" className="resume">
        <PageHeaderContent
          headerText="My Resume"
          icon={<BsInfoCircleFill size={40} />}
        />

        <div className="timeline">
          <div className="timeline__experience">
            <h3 className="timeline__experience__header-text">Education</h3>
            <VerticalTimeline layout="{1-column}" lineColor="wheat">
              {data.experience.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline___vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "wheat",
                    border: "1.5px dotted rgb(5, 247, 5)",
                    borderRadius:"5px",
                   fontFamily:" Patua One",
                   animation:"left 360"
                  }}
                  date="2023-Present"
                  icon={<MdWork />}
                  iconStyle={{
                    background: "black",
                    color: "rgb(5, 247, 5)",
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <div className="timeline__education">
            <h3 className="timeline__education__header-text">Experience</h3>
            <VerticalTimeline layout="{1-column}" lineColor="wheat">
              {data.education.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline__experience__vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "wheat",
                    border: "1.5px dotted rgb(5, 247, 5)",
                    borderRadius:"5px"
                  }}
                  date="2023-Present"
                  icon={<MdWork />}
                  iconStyle={{
                    background: "black",
                    color: "rgb(5, 247, 5)",
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
