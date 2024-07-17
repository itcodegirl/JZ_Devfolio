import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am, <span className="purple">Jenna Zawaski, </span>
            a passionate Full-Stack Web Developer with a knack for creating
            dynamic and responsive web applications.
            <br />
            <br />
            I thrive on building seamless user experiences and efficient server-side logic.
            Whether I'm crafting a sleek interface with React or developing robust backend
            solutions with Node and Express, I am dedicated to delivering high-quality,
            scalable applications.
            <br />
            <br />
            Over the years, I've worked on numerous projects that have honed my skills
            and expanded my knowledge. My journey in web development is driven by a constant
            desire to learn and evolve with the ever-changing landscape of technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Retail Therapy 💁‍♀️
            </li>
            <li className="about-activity">
              <ImPointRight /> Golfing 🏌️‍♀️
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling ✈️
            </li>
          </ul>
          <br />
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "JavaScript is my love language!"{" "}
          </p>
          <footer className="blockquote-footer">Yours Truly 💋</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
