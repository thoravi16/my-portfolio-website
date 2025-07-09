import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Saurabh </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            A passionate Fullstack Developer and AI enthusiast.
            <br />
            I'm currently pursuing B.Tech in Computer Science from GGSIPU and love crafting seamless, scalable, and smart digital products.
            <br />
            <br />
            I’ve built real-time applications, AI-powered tools, and interactive web platforms. Whether it's frontend design or backend logic, I enjoy delivering high-quality solutions that solve real-world problems.
          </p>
         

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building the future with code."{" "}
          </p>
          <footer className="blockquote-footer">thor_avi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
