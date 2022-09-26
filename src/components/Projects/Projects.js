import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bank from "../../Assets/Projects/bank.png";
import grocery from "../../Assets/Projects/grocery.png";
import women from "../../Assets/Projects/women.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocery}
              isBlog={false}
              title="GroceryList Application"
              description="As we can't remember everything, users frequently forget to buy the things they want to buy. However, with the assistance of this app, you can make a list of the groceries you intend to buy so that you don't forget anything."
              ghLink="https://github.com/smartinternz02/SPSGP-80959-Virtual-Internship---Android-Application-Development-Using-Kotlin"
              demoLink="https://drive.google.com/file/d/1YkPR-nSosG8EVsoFNwB8DJnew7kyNaiW/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Basic Banking System"
              description="This is a website built using HTML,CSS,PHP and JavaScript to demonstrate basic banking operations like Making a transaction, Creating a user, Showing Transaction History."
              ghLink="https://github.com/itsabhikhm/Basic-Banking-System"
              demoLink="https://abhidoodle.000webhostapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={women}
              isBlog={false}
              title="Women Safety Flutter Application (Under Development)"
              description="This Project is Under Development, This is basically a Flutter application developed to ensure women safety, it has features like live loaction sharing, Shake to alert, SOS etc."
              ghLink="https://github.com/itsabhikhm/WomenSafetyApp"
              demoLink="#"              
            />
          </Col>  

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
