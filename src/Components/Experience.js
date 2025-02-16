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
      date: "June 2024 - August 2024",
      cardTitle: "Machine Learning Engineer Intern",
      cardSubtitle: "Guidewire Software, San Mateo, CA",
      cardDetailedText: [
        "Engineered cyber risk assessment pipeline using LLaMA & Claude to analyze fraudulent activities in SEC filings, cutting false positives by 35%.",
        "Automated 9,000+ financial risk indicators by deploying containerized Python code, reducing manual effort by 60%.",
        "Integrated prompt engineering for extracting cyber incident disclosures from 10,000+ complex regulatory documents.",
        "Architected a scalable data pipeline with AWS Glue, Airflow, and Lambda, enabling dynamic web scraping and structured storage in S3 & Athena.",

      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
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
      cardTitle: "VMware vSphere Engineer",
      cardSubtitle: "VMware Inc., Bengaluru, India",
      cardDetailedText: [
        "Slashed VM downtime by 65% by architecting predictive analytics models (Python/time-series algorithms) to forecast hardware failures in SaaS/on-premise VMware vSphere clusters.",
        "Devised SQL/Google Analytics ETL pipelines for hybrid infrastructures, empowering data-driven decisions across 15+ global client environments.",
        "Revitalized vCenter PostgreSQL performance by 40% via deadlock resolution & query optimization for critical workloads.",
        "Mitigated system risks by 25% by pioneering Tableau dashboards to monitor VM KPIs across SaaS/on-premise deployments, aligning cross-functional teams.",
        "Spearheaded training initiatives for 50 engineers on VMware solutions, accelerating adoption with 30% productivity gain.",
        "Orchestrated Agile delivery of 10+ software releases, achieving 90% customer satisfaction through on-time deployment",
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
