import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import React from 'react';
export default function Experience() {
  const items = [
    {
      date: "October 2023 - Present",
      cardTitle: "Student Assistant",
      cardSubtitle: "eCampus at San Jose State University, CA",
      cardDetailedText: [
        "Pioneered the development of ecampus database leveraging advanced SQL, reducing manual workload by 90%.",
        "Orchestrated Tableau dashboard development, driving an 80% enhancement in workshop performance by providing stakeholders with data-driven insights for agile decision-making and strategic marketing initiatives.",
        "Formulated and executed sophisticated statistical models to convert raw data into actionable insights, leading to a 50% increase in workshop success and a 15% uptick in faculty engagement",  
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "July 2020 - July 2023",
      cardTitle: "VMware Engineer",
      cardSubtitle: "VMware Inc., Bengaluru, India",
      cardDetailedText: [
        "Analyzed system data for 15 international clients using Google Analytics, recommending tailored products and integration strategies, resulting in an 80% performance improvement.",
        "Detected and resolved discrepancies across vSphere tools through root cause analyses, guaranteeing optimal system functionality and operational smoothness, which led to a 20% reduction in downtime.",
        "Led cross-functional teams in defining key performance indicators (KPIs) and creating custom reports using Tableau, leading to a 30% reduction in escalation cases through monitoring and evaluation.",
        "Configured and maintained virtualized clusters, ensuring high availability and performance of critical applications, achieving a 99.9% uptime.",
        "Championed technical advisory role for international clients, delivering solutions to enhance system performance and mitigate vSphere tool inconsistencies, resulting in long-lasting client partnerships."
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    // You can add more projects and experiences following the same structure.
  ];

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "black" }}
                    date={data.date}
                    dateClassName="timeline-date"
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "#0563bb",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        fontSize: "30px",
                        fontWeight:"bold",
                        color: "#ffff",
                      }}
                    >
                      {data.cardTitle}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "350",
                        color: "whitesmoke",
                      }}
                    >
                      {data.cardSubtitle}
                    </h4>
                    <p
                      style={{
                        fontSize: "1em",
                        fontWeight: "350",
                        color: "whitesmoke",
                      }}
                    >
                      {data.cardDetailedText}
                    </p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
