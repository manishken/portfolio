import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiBootstrap,
    DiPython,
    DiDjango, DiJava,
    DiAngularSimple,
    DiGo,
    DiFirebase,
    DiAws
} from "react-icons/di";
import {SiJupyter} from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons pointer" title="C++">
         C++
      </Col>
      <Col xs={4} md={2} className="tech-icons pointer" title="Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons pointer" title="GO">
        <DiGo />
      </Col>
      <Col xs={4} md={2} className="tech-icons pointer" title="Node JS">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons pointer" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons pointer" title="Angular">
        <DiAngularSimple/>
      </Col>
      <Col xs={4} md={2} className="tech-icons pointer" title="GraphQL">
        <GrGraphQl/>
      </Col>
      <Col xs={4} md={2} className="tech-icons pointer" title="Python">
        <DiPython />
      </Col>
        <Col xs={4} md={2} className="tech-icons pointer" title="Django">
            <DiDjango />
        </Col>
        <Col xs={4} md={2} className="tech-icons pointer" title="Jupyter Notebook">
            <SiJupyter />
        </Col>
        <Col xs={4} md={2} className="tech-icons pointer" title="Java">
            <DiJava />
        </Col>
      <Col xs={4} md={2} className="tech-icons pointer" title="Bootstrap">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons pointer" title="Firebase">
        <DiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons pointer" title="AWS services">
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons pointer" title="Spring Boot">
        <BiLogoSpringBoot/>
      </Col>
    </Row>
  );
}

export default Techstack;
