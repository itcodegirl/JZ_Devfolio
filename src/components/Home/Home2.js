import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImage from "../../Assets/about-image.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm a Full-stack Web Developer from Chicago. I fell in love with coding and never looked back...
              <br />
              <br />I've immersed myself in the world of
              <i>
                <b className="purple"> HTML5, CSS and JavaScript, </b>
                constantly honing my skills and expanding my knowledge.
              </i>
              <br />
              <br />
              As a freelance web developer, I pride myself on&nbsp;
              <i>
                <b className="purple">creating responsive, user-friendly websites </b>
                that not only look great but also provide an{" "}
                <b className="purple">
                  excellent user experience.
                </b>
              </i>
              <br />
              <br />

              Explore my portfolio to see the projects I've worked on and the skills I've honed.
              If you're interested in collaborating or have any opportunities to discuss, don't hesitate to reach out.
              <br />
              <br />
              <i>
                <b className="purple">
                  {" "}
                  Let's connect and create something amazing together!
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="aboutImage">
            <Tilt>
              <img src={aboutImage} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/itCodeGirl"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/itCodeGirl"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jennazawaski/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/itcodegirl?igsh=MTgxNnQ0NjRvaHR0Mg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
