import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";

// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import algo from "../../Assets/Projects/algo.png";
// import plant from "../../Assets/Projects/plant.jpeg";

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

        <Row style={{ justifyContent: "flex-start", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Pokemon"
              description="Find your Favourite Pokemon"
              link="https://github.com/manishken/pokemon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Color Picker"
              description="Pick a color palette for project"
              link="https://github.com/manishken/color-challange"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="BMS"
              description="Movie Ticket booking system"
              link="https://github.com/manishken/BMS"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="FRMI analysis using Graph convolution neural networks"
              description="Brain Signal classification"
              link="https://github.com/manishken/Graph-convolutional-networks-for-fMRI-analysis"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="LSTM analysis for stock market prediction"
              description="Stock market prediction"
              link="https://github.com/manishken/LSTM-Analysis-for-stock-market-prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
