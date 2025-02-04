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
        "Developed Python scripts for data acquisition (firmographic, technographic, cybersecurity), and designed cloud-native applications using AWS Lambda and Docker within microservice architectures, boosting data efficiency by 40%.",
        "Automated data pipelines using AWS Glue and Airflow, reducing manual effort by 75%.",
        "Integrated LLMs (Llama, Claude) with Docker and AWS Lambda, cutting deployment time by 70% and improving scalability.",
        "Set up CI/CD pipelines for automated model deployment and retraining.",
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
        "Served as a trusted technical advisor to 15+ international clients, leveraging domain expertise to enhance VMware vSphere solutions.",
        "Improved data precision by 60% by extracting and transforming product requirements using SQL.",
        "Reduced VM downtime by 80% by analyzing trends and irregularities in SSL certificates, LDAP, and Active Directory setups across SaaS and On-Premises.",
        "Crafted interactive dashboards in Tableau showcasing KPIs & performance trends, contributing 98% reduction in product defects.",
        "Led agile workflows to deliver 10+ software releases in 2 years, achieving 95% customer satisfaction.",
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
