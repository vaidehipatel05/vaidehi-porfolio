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
        "Pre-trained models on a dataset of 10,000+ web scraped images stored in Amazon S3, securing a 95% accuracy rate in detecting accidental poisonings.",
        "Performed a comparative assessment on pre-trained models such as MobileNetV1, MobileNetV2, EfficientNet Lite0 and Quantized CNN.",
        "MobileNetV2 outperformed by succeeding a 30% reduction in computational complexity and optimized memory use with quantization.",
      ],
      technologies: ["Transfer Learning", "MobileNet V1", "MobileNet V2", "CNN+Quantisation", "EfficientNet Lite0", "Tensorflow", "AWS S3"],
      links: [],
      date: "Feb 2024 - May 2024",
    },
    {
      cardTitle: "Predicting election outcome based on news articles",
      cardDetailedText: [
        "Accomplished 95% accurate real-time news analysis by developing a Kafka data pipeline for live predictive electoral outcomes with the News API, and implementing Local Sensitive Hashing to remove duplicate data.",
        "Enhanced data quality by 90% with PySpark’s Bloom filter and stored preprocessed data in Amazon S3.",
        "Architected Latent Dirichlet Allocation, achieving 85% accuracy in identifying underlying themes.",
      ],
      technologies: ["Kafka", "Amazon S3", "NLTK", "K-means clustering", "Bloom filter", "Local Sensitive Hashing"],
      links: [],
      date: "Feb 2024 - May 2024",
    },
    {
      cardTitle: "Study Bucks: Student Finance, Simplified",
      cardDetailedText: [
        "Technology stack: Python, Pandas, Matplotlib, Postgres SQL, pgAdmin, Plotly, ETL.",
        "Assessed student spending behaviors through advanced SQL queries, identifying 20% potential savings.",
        "Spearheaded development of Emergency Fund Builder, enabling students to save an average of $500 per semester.",
      ],
      technologies: ["Python", "Pandas", "Matplotlib", "Postgres SQL", "pgAdmin", "Plotly", "ETL"],
      links: [],
      date: "Aug 2023",
    },
    {
      cardTitle: "Analysis of Sector-Wise Layoff Trends",
      cardDetailedText: [
        "Technology stack: Python with Pandas, Matplotlib, and Tableau for in-depth analysis.",
        "Researched layoff and fundraising trends in the technology sector to provide strategic insights; identified market opportunities and career pathways based on industry data and analysis.",
        "Constructed visualization of diverse data sources, offering stakeholders a comprehensive view of layoff data; boosted stakeholder understanding by 50% and fostered collaborative decision-making processes.",
      ],
      technologies: ["Python", "Pandas", "Matplotlib", "Tableau"],
      links: [],
      date: "Aug 2023",
    },
    {
      cardTitle: "Cloud-Based Data Pipeline for YouTube Video Analytics",
      cardDetailedText: [
        "Technology stack: AWS Glue, AWS Lambda, Amazon S3, AWS Athena, AWS IAM, Amazon QuickSight.",
        "Engineered and implemented data pipeline, resulting in a 30% reduction in data processing time, by integrating AWS Glue and Lambda for scalable ETL processes, facilitating ingestion of unprocessed video data in S3.",
        "Leveraged AWS Athena for interactive querying directly on data stored in S3, achieving a 50% improvement in analytics accessibility and security, evidenced by reduced data migration needs and enhanced access control.",
      ],
      technologies: ["AWS Glue", "AWS Lambda", "Amazon S3", "AWS Athena", "AWS IAM", "Amazon QuickSight"],
      links: [],
      date: "Feb 2024",
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
