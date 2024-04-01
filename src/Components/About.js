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
              Greetings! I'm an aspiring Data Scientist with a robust background in developing technical solutions and managing international client relationships. With over three years of experience at VMware and a comprehensive education in Data Analytics and Computer Science Engineering, my expertise spans cutting-edge analytics, advanced visualization, and sophisticated ETL processes. Certified in Excel and Tableau, I am passionate about harnessing the power of data to drive decision-making and innovation.
            </p>
            <br></br>
            <p style={{ color: "whitesmoke" }}>
              My academic journey at San Jose State University and Savitribai Phule Pune University has equipped me with a deep understanding of data mining, machine learning, big data technologies, and more. Combining this knowledge with my hands-on experience in Python, SQL, and various data engineering and science tools, I am ready to tackle complex challenges and contribute to the success of dynamic organizations. I am driven by the quest for knowledge, the pursuit of excellence, and the opportunity to make impactful contributions through data science.
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
