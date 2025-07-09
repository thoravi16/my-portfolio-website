import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import trackmyspends from "../../Assets/Projects/trackmyspends.png";
import rtls from "../../Assets/Projects/rtls.jpg";
import aicalcpro from "../../Assets/Projects/aicalcpro.png";
import weatherwiki from "../../Assets/Projects/weatherwiki.png";
import motiondetection from "../../Assets/Projects/motiondetection.avif";
import diseaseprediction from "../../Assets/Projects/diseaseprediction.png";

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
              imgPath={weatherwiki}
              isBlog={false}
              title="WeatherWiki"
              description="A sleek weather forecasting app using OpenWeatherMap API. Displays temperature, humidity, wind speed, and icons in a minimalist, responsive UI powered by React."
              ghLink="https://github.com/thoravi16/WeatherApp"
              demoLink="https://weatherwiki.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diseaseprediction}
              isBlog={false}
              title="AI Disease Prediction from Symptoms"
              description="A machine learning-based web application that predicts possible diseases based on user-input symptoms. Uses a trained classification model and provides precautionary advice."
              ghLink="https://github.com/thoravi16/AI-Disease-Prediction-from-Symptoms"
              demoLink="https://aidiseaseprediction.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aicalcpro}
              isBlog={false}
              title="AI CalcPro"
              description="A smart drawing-based AI calculator where users solve math problems by sketching expressions. No typing needed — it uses OCR and Python logic to recognize and compute handwritten equations in real-time. Built with React, Vite, TypeScript, and Python.

"
              ghLink="https://github.com/thoravi16/AI-CalcPro"
              //demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trackmyspends}
              isBlog={false}
              title="TrackMySpends"
              description="TrackMySpends is a smart expense tracker built with React, HTML, CSS, and JavaScript, designed to give users real-time insights into their spending habits.
It features an intuitive UI for logging, categorizing, and managing expenses effortlessly."
              ghLink="https://github.com/thoravi16/TrackMySpends"
              demoLink="https://trackmyspends.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motiondetection}
              isBlog={false}
              title="AI Based Camera Motion Tracking System"
              description="A real-time motion detection system that tracks human movement using a live camera feed. Built with Python and OpenCV, it identifies motion and can trigger alerts or actions based on activity detection."
              ghLink="https://github.com/thoravi16/ai-camera-motion-tracking"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rtls}
              isBlog={false}
              title="Real-Time Location Tracking"
              description="A web-based real-time location sharing app built with Node.js, Express, Socket.IO, and EJS. Allows users to share and view live locations on a map with instant updates using WebSocket communication."
              ghLink="https://github.com/thoravi16/RealTime-Tracking"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
