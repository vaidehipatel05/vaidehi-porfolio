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
        "Engineered cyber risk pipeline using LLaMA & Claude; manipulated SEC data & evaluated models to cut false positives by 35%.",
        "Automated 9,000+ risk indicators via Dockerized code with Poetry, reducing manual effort by 60%.",
        "Integrated prompt engineering to extract cyber incident disclosures from 10,000+ regulatory documents.",
        "Architected scalable data pipeline with AWS Glue, Airflow & Lambda, enabling dynamic web scraping & S3/Athena storage.",
        "Implemented CI/CD pipelines for model deployment, evaluation & retraining, ensuring production-ready ML workflows.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "October 2023 - Present",
      cardTitle: "Student Assistant",
      cardSubtitle: "Center for Faculty Education & Teaching Innovations at San Jose State University, CA",
      cardDetailedText: [
        "Led workshops for 100+ professors on AI literacy, LSM platform, and GenAI tools, boosting tech adoption by 45% among non-technical staff.",
        "Spearheaded AI project talks (e.g., DeepSeek, ChatGPT), resulting in 15+ AI-integrated course modules.",
        "Collaborated to resolve LSM platform issues, ensuring smooth hybrid learning for 500+ students.",  
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "July 2020 - July 2023",
      cardTitle: "Technical Analyst II",
      cardSubtitle: "VMware Inc., Bengaluru, India",
      cardDetailedText: [
        "Slashed VM downtime by 65% by architecting predictive analytics models (time-series algorithms) to forecast hardware failures in SaaS/on-premise VMware vSphere clusters.",
        "Devised Google Analytics ETL pipelines for hybrid infra, empowering data-driven decisions across 15+ global clients.",
        "Revitalized vCenter PostgreSQL performance by 40% via deadlock resolution & query optimization for critical workload.",
        "Mitigated system risks by 25% by pioneering Tableau dashboards to monitor VM KPIs, aligning cross-functional teams.",
        "Orchestrated Agile delivery of 10+ software releases, achieving 90% customer satisfaction through on-time deployment."
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
