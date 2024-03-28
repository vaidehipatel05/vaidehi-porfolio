import React from "react";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Projects = () => {
  const items = [
    {
      cardTitle: "Classification of Toxic plant species using CNN and Transfer Learning",
      cardDetailedText: [
        "Developed a CNN-based classification system using transfer learning to distinguish between toxic and non-toxic plant species.",
        "Utilized pre-trained models like MobileNet v1, MobileNet v2, and EfficientNet, trained on a dataset of 10 toxic plant species with 1000 images each.",
      ],
      technologies: ["Transfer Learning", "MobileNet V1", "MobileNet V2", "CNN+Quantisation", "EfficientNet Lite0", "Tensorflow lite"],
      links: [],
      date: "Feb 2024 - Present",
    },
    {
      cardTitle: "Study Bucks: Student Finance, Simplified",
      cardDetailedText: [
        "Leveraged custom survey and SQL queries to analyze student spending patterns and identify financial trends.",
        "Spearheaded the development of the Emergency Fund Builder, enabling students to save an average of $500 per semester.",
      ],
      technologies: ["Python", "Pandas", "Matplotlib", "Postgres SQL", "pgAdmin", "Plotly", "ETL"],
      links: [],
      date: "Sep 2023 - Dec 2023",
    },
    {
      cardTitle: "Analysis of Sector-Wise Layoff Trends",
      cardDetailedText: [
        "Analyzed layoff trends and fundraising data to offer insights into market dynamics and career trajectories.",
        "Employed a multi-dimensional data visualization framework, including Matplotlib, Seaborn, and Plotly.",
      ],
      technologies: ["Python", "Pandas", "Matplotlib", "Tableau"],
      links: [],
      date: "Sep 2023 - Dec 2023",
    },
    {
      cardTitle: "Health Monitoring System Based on Diet Evaluation",
      cardDetailedText: [
        "Developed an Android app for dietary tracking using voice commands and NLP, supported by a dataset of over 10,000 Indian food items.",
        "Used a custom KNN algorithm for diet predictions with over 99% accuracy, validated against BMR.",
      ],
      technologies: ["Python", "ML", "NLP", "Heroku Flask", "AWS", "PostgreSQL", "Speech Recognition", "KNN", "Mobile computing"],
      links: [],
      date: "Jul 2019 - Jun 2020",
    },
  ];

  return (
    <section id="projects" className="about background-alt">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "black" }}
                  date={data.date}
                  dateClassName="timeline-date"
                  contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                  icon={<CodeIcon />}
                  iconStyle={{ background: "#0563bb", color: "#fff" }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((name, techIndex) => (
                      <Chip key={techIndex} label={name} color="primary" style={{ margin: "2px" }} />
                    ))}
                  </div>
                  <h3
                    className="vertical-timeline-element-title"
                    style={{ fontSize: "1.25rem", color: "whitesmoke", fontWeight: "bold" }}
                  >
                    {data.cardTitle}
                  </h3>
                  <ul style={{ color: "whitesmoke" }}>
                    {data.cardDetailedText.map((text, index) => (
                      <li key={index}>{text}</li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
