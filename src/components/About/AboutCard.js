import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Maurya </span>
            from <span className="purple"> Varanasi, India.</span>
            <br />I am pursuing B.Tech in Information Technology from Rajkiya Engineering College Azamgarh.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Designs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't tell people your plans!"{" "}
          </p>
                </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
