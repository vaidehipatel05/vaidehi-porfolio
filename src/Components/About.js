import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from 'react';

export default function About() {
  return (
    <section id="about" className="about background-alt py-5">
      <Container data-aos="fade-up">
        <div className="section-title text-center mb-4">
          <h2 className="text-primary fw-bold">About Me</h2>
        </div>

        <Row className="align-items-center">
          <Col lg={1} className="d-flex justify-content-center">
            {/* Optional Image */}
          </Col>

          <Col lg={9} className="content text-light">
            <h3 className="fw-bold text-info">Driven by Data, Fueled by Curiosity</h3>
            <p>
              I’m a passionate <strong>Data Analytics graduate student at San Jose State University</strong> with 
              hands-on experience in <strong>Machine Learning, Data Engineering, LLMs, and Cloud Computing</strong>. 
              My journey includes impactful roles as an <strong>ML Intern at Guidewire</strong> and a 
              <strong> VMware Engineer</strong>, where I honed real-world problem-solving skills.
            </p>

            <h5 className="mt-4 text-warning">My Expertise Includes:</h5>
            <ul className="list-unstyled ms-0">
              {[
                { icon: "bi-chevron-right", color: "primary", title: "Machine Learning", desc: "Specialized in CNNs, transfer learning, and model quantization for image classification and NLP tasks." },
                { icon: "bi-chevron-right", color: "success", title: "LLMs & Generative AI", desc: "Skilled in deploying models like Llama and Claude using Docker, with expertise in fine-tuning and optimizing performance." },
                { icon: "bi-chevron-right", color: "info", title: "Cloud Computing", desc: "Proficient with AWS services: Glue ETL, SageMaker, ECR, Lambda, S3, Athena for scalable deployments." },
                { icon: "bi-chevron-right", color: "danger", title: "Big Data & Data Engineering", desc: "Adept at handling large datasets with Hadoop, PySpark, Kafka and building robust data pipelines with Airflow, Snowflake, BigQuery." },
                { icon: "bi-chevron-right", color: "warning", title: "Data Visualization", desc: "Crafting impactful dashboards using Power BI and Tableau to communicate complex insights effectively." }
              ].map((item, index) => (
                <li key={index} className="d-flex align-items-start mb-2">
                  <i className={`bi ${item.icon} text-${item.color} me-2 mt-1`}></i>
                  <div>
                    <strong>{item.title}:</strong> {item.desc}
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-3 fst-italic text-secondary">
              "Passionate about driving innovation through data insights and cutting-edge AI technologies."
            </p>

            <Row className="mt-4">
              <Col lg={6}>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                    <strong>City:</strong> San Jose, CA [willing to relocate]
                  </li>
                  
                  <li>
                    <i className="bi bi-envelope-fill text-primary me-2"></i>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:vaidehi.patel@sjsu.edu" className="text-light">
                      vaidehi.patel@sjsu.edu
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-mortarboard-fill text-success me-2"></i>
                    <strong>Degree:</strong> Master of Science in Data Analytics
                  </li>
                </ul>
              </Col>
              
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
