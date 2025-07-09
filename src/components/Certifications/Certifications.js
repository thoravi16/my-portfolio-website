import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={6} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Cybersecurity Essentials</Card.Title>
                <Card.Text>
                  Certified by CISCO NETWORKING ACADEMY.
                </Card.Text>
                <a href="https://www.credly.com/badges/21f683de-d7f3-45ea-80c6-d48eaae6e856/public_url" target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>CYBER SECURITY AWARENESS PROGRAMME</Card.Title>
                <Card.Text>
                  Certified by NIELIT .
                </Card.Text>
                <a href="https://drive.google.com/file/d/1bYp0Q7z7vdPk_TPFasmhedGxrnTZ6tH2/view" target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Data Analysis with Python</Card.Title>
                <Card.Text>
                  Certified by IBM SkillsBuild.
                </Card.Text>
                <a href="https://courses.skillsbuild.skillsnetwork.site/certificates/f0ff5aa8815a441584f1969e8690d003" target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Introduction to Packet Tracer</Card.Title>
                <Card.Text>
                  Certified by CISCO NETWORKING ACADEMY .
                </Card.Text>
                <a href="https://drive.google.com/file/d/18wUkFJcN8jKRJeUKjB3emoyiKkkia5zz/view" target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Python 101 for Data Science</Card.Title>
                <Card.Text>
                  Certified by IBM SkillsBuild .
                </Card.Text>
                <a href="https://courses.skillsbuild.skillsnetwork.site/certificates/d7629423494d43cfaab1c8e23c387621" target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Generative AI Fundamentals</Card.Title>
                <Card.Text>
                  Certified by GOOGLE Cloud.
                </Card.Text>
                <a href="https://www.cloudskillsboost.google/public_profiles/487caae1-b993-42c1-9050-b4b7e222b6e0/badges/5441933" target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* ➕ Add more certifications similarly */}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
