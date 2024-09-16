import img from "./images/leadership_icon.png";
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
          <Col lg={4} className="d-flex justify-content-center">
            <img
              src={img}
              height="100%"
              width="69%"
              style={{ borderRadius: "50%" }}
              alt="1"
            />
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>Data Analyst</h3>
            <br></br>
            <p style={{ color: "whitesmoke" }}>
              Data Analytics graduate student at San Jose State University with expertise in Machine Learning, Data Engineering, and Software Development. Former VMware Engineer at VMware and Machine Learning Engineer Intern at Guidewire Software. 
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
            
            <p>
            At Guidewire, I developed web scraping scripts, implemented ETL jobs, and worked with LLMs, improving data collection efficiency by 40% and reducing third-party data costs by 60%[1].

            Passionate about leveraging data to drive insights and innovation. Seeking opportunities to contribute my skills to innovative projects and teams.
            </p>

            <br></br>
            <Row>
              <Col lg={4}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                    <span>+1 408-207-8426</span>
                  </li>
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
