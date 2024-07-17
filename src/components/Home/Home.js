import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImage from "../../Assets/home-image.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Type2 from "./Type2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Jenna Zawaski</strong>
              </h1>
              <br />
              <br />
              <div style={{ padding: 15, textAlign: "left" }}>
                <Type />
                <br />
                <br />
                <Type2 />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeImage}
                alt="home pic"
                className="homeImage"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
