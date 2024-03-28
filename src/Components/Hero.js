import img from "./images/leadership_icon.png";
import Typed from "react-typed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import React from 'react';

export default function Hero() {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center">
      <Container data-aos="zoom-in" data-aos-delay="500">
        <Row>
          <Col lg={6} className="item-center">
            <h1>Vaidehi Patel</h1>
            <br />
            <p>
              I'm a&nbsp;
              <span
                class="typed"
                data-typed-items="Student,Data Scientist,Data Engineer,Technical Solutions Advisor">
                <Typed
                  strings={["Student","Data Scientist",
                  "Data Engineer",
                  "Technical Solutions Advisor"]}
                  loop
                  typeSpeed={90}
                  backSpeed={60}
                  smartBackspace
                  shuffle={false}
                  backDelay={500}
                  fadeOut={true}
                  fadeOutDelay={200}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </span>
            </p>
            <div class="social-links">
              <a href="http://linkedin.com/in/patel-vaidehi">
                <i class="bx bxl-linkedin" style={{color: "whitesmoke"}}></i>
              </a>
              <a href="mailto:vaidehi.patel@sjsu.edu">
                <i class="bx bx-envelope"  style={{color: "whitesmoke"}}></i>
              </a>
            </div>
            <br />
            <Button
              variant="outlined"
              target="_blank"
              href=""
              startIcon={<CloudDownloadIcon />}
              style={{
                color: "rgb(255, 255, 255)",
                borderColor: "rgb(255, 255, 255)",
                
              }}
            >
              Download Resume
            </Button>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            <img
              src={img}
              height="100%"
              width="65%"
              alt="2"
              style={{
                borderRadius: "30px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
