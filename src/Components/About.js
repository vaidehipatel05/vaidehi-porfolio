//import img from "./images/vp.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from 'react';

export default function About() {
  return (
    <section id="about" class="about background-alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <Row>
          <Col lg={6} className="d-flex justify-content-center">
            
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>Data Analytics Graduate | SJSU</h3>
            <br></br>
            <p style={{ color: "whitesmoke" }}>
            Graduate student with expertise in Machine Learning, Data Engineering, LLMs, and Cloud Computing. Former VMware Engineer and Guidewire ML Intern. 
            </p>
            <br></br>
            <p style={{ color: "whitesmoke" }}>
            My expertise includes:
            <ul>
              <li>
              <i class="bi bi-chevron-right"></i> <strong>Machine Learning:</strong>{" "}
              <span>CNNs, transfer learning, quantization for image classification and NLP.</span>
              </li>
            </ul>
            <ul>
              <li>
              <i class="bi bi-chevron-right"></i> <strong>LLMs and Generative AI:</strong>{" "}
              <span>Experienced in leveraging state-of-the-art models like Llama and Claude for various applications, including deployment using Docker containers.</span>
              </li>
            </ul>
            <ul>
              <li>
              <i class="bi bi-chevron-right"></i> <strong>Cloud:</strong>{" "}
              <span>Skilled in utilizing AWS services such as Glue ETL, SageMaker, ECR, Lambda, S3, and Athena for scalable data processing, model training, and deployment.</span>
              </li>
            </ul>
            <ul>
              <li>
              <i class="bi bi-chevron-right"></i> <strong>Big Data:</strong>{" "}
              <span>Adept at working with Hadoop, PySpark, Kafka for handling large-scale datasets and implementing data pipelines.</span>
              </li>
            </ul>

            <ul>
              <li>
              <i class="bi bi-chevron-right"></i> <strong>Data Engineering:</strong>{" "}
              <span>Proficient in using various databases and tools - MySQL, PostgreSQL, Snowflake, MongoDB, Neo4j, BigQuery, Redis, Cassandra, Apache Airflow, Google Analytics.</span>
              </li>
            </ul>

            <ul>
              <li>
              <i class="bi bi-chevron-right"></i> <strong>Data Visualization:</strong>{" "}
              <span>Experienced in creating impactful visualizations using PowerBI and Tableau to communicate complex insights effectively.</span>
              </li>
            </ul>
            </p>
            
            <p style={{ color: "whitesmoke" }}>
            Passionate about driving innovation through data insights and cutting-edge AI technologies.</p>

            <br></br>
            <Row>
              <Col lg={4}>
                <ul>
                  
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>San Jose, CA</span>
                  </li>
                </ul>
              </Col>
              <Col lg={7}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                    <span>Master of Science in Data Analytics</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                    <span>
                      <a href="mailto:vaidehi.patel@sjsu.edu">
                      vaidehi.patel@sjsu.edu
                      </a>
                    </span>
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
