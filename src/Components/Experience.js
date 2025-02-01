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
        "Developed Python web scraping scripts for firmographic, technographic, and cybersecurity data, increasing collection efficiency by 40%.",
        "Implemented AWS Glue ETL jobs and scheduled Airflow DAGs to automate weekly data collection, cutting manual effort by 75% and ensuring consistent, up-to-date data.",
        "Leveraged Amazon SageMaker to process and analyze scraped data, boosting data quality by 30%.",
        "Utilized Docker Dev containers to deploy Large Language Models (LLMs) Llama and Claude, enhancing model portability and reducing deployment time by 70%.",
        "Created an AWS Lambda function from container image and uploaded it to Amazon ECR, improving function scalability and minimizing cold start times by 35%.",
        "Engineered in-house data collection scripts, leading to a 60% reduction in third-party data acquisition costs."
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
      cardTitle: "Solutions Architect",
      cardSubtitle: "VMware Inc., Bengaluru, India",
      cardDetailedText: [
        "Served as a trusted technical advisor to 15+ international clients, leveraging domain expertise to enhance VMware vSphere solutions.",
        "Improved data precision by 60% by extracting and transforming product requirements using SQL.",
        "Reduced VM downtime by 80% by analyzing trends and irregularities in SSL certificates, LDAP, and Active Directory setups across SaaS and On-Premises.",
        "Crafted interactive dashboards in Tableau showcasing KPIs & performance trends, contributing 98% reduction in product defects.",
        "Led agile workflows to deliver 10+ releases in 2 years, achieving 95% customer satisfaction.",
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
