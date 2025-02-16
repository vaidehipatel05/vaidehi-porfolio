import React from "react";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Projects = () => {
  const items = [
    {
      cardTitle: "AI-Powered Mock Interview Platform",
      cardDetailedText: [
        "Curated 30,000+ data points via AWS-powered pipelines with Groq, Docker, and AWS for robust preprocessing.",
        "Fine tuned LLMs (Llama 3, GPT-4) using PyTorch and LangChain implementing dynamic conversational history retention.",
        "Formulated a scalable microservices architecture leveraging Kubernetes and AWS ECS, diminishing API latency by 40%.",
        "Embedded reinforcement learning with TTS/STT integrations improving skill gap closure by 35%.",
      ],
      technologies: ["TensorFlow", "Hugging Face", "AWS", "Docker", "LangChain"],
      links: [],
      date: "Aug 2024 – present",
    },
    {
      cardTitle: "AI-Driven Content Source Identification",
      cardDetailedText: [
        <a href="https://huggingface.co/spaces/vai0511/ai-content-classifier-app">
                Demo
              </a>,
        
        "Spearheaded AI-powered plagiarism detection models (RoBERTa, ELECTRA, GPT-Neo, Mistral-7B leveraging QLoRA) on 46,180 texts, achieving 95.73% accuracy—outperforming traditional methods.",
        "Enhanced PyTorch pipelines with advanced prompting, elevating accuracy by 15% and processing time to 3.8 seconds.",
        "Pioneered unrestricted plagiarism detection across variable text lengths, eliminating traditional 250-character constraints,",
      ],
      technologies: ["Hugging Face", "Scikit-Learn", "PyTorch"],
      links: [],
      date: "Aug 2024 – Nov 2024",
    },
    {
      cardTitle: "Predictive Analytics for Wildfire Risk",
      cardDetailedText: [
        "Built Gradient Boosting models with 96.19% R² to predict wildfire risks using 2.3M+ entries spatial-temporal datasets.",
        "Applied PCA and hyperparameter tuning, improving model accuracy by 40% while reducing training time by 35%.",
        "Designed geospatial risk maps and interactive Power BI dashboards, providing actionable insights for wildfire prevention and resource allocation.",
      ],
      technologies: ["NumPy", "Scikit-learn", "XGBoost", "Power BI", "PCA"],
      links: [],
      date: "Aug 2024 – Nov 2024",
    },
    {
      cardTitle: "Classification of Toxic plant species using CNN and Transfer Learning",
      cardDetailedText: [
        "Processed 7,475+ toxic plant images via web scraping, augmentation, and histogram equalization for real-time detection.",
        "Achieved 95% accuracy in toxic plant classification via CNNs & transfer learning, addressing 68,000+ poisoning cases.",
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
