import React from "react";
import { Row, Col, Container } from "reactstrap";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";
const About = () => {
  return (
    <Container fluid>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Our <strong>Motivation</strong>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.3em" }}>
              We have friends tested positive for covid after going to
              University and cinema because the booking system did not block the
              seats around them.
              <br />
              <br />
              We all want to go out during Covid period, but we are afraid of
              getting infected. Many people procrastinate a lot and not feeling
              motivated working at home with their bed just one feet away from
              their working table.
              <br />
              <br />
              How can we make sure that we can work at an office space but
              keeping social distance at the same time to prevent ourselves from
              getting infected by coronavirus? We have the solution!
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={about2} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={about1} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Our <strong>Mission</strong>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.3em" }}>
              Our booking system automatically disable seats around the selected
              seat(s), keeping at least 1.5m away from people around you.
              <br />
              <br />
              This system can be applied to many areas, from University, office
              to cinema and flight.
              <br />
              <br />
              Users are allowed to use Augmented Reality (AR) to check which
              seat is available or use this technology to navigate their way in
              the cinema where there’s no light! Even if there’s no any disease,
              we can still adapt our system for normal daily use!
              <br />
              <br />
              We believe that this system can help to keep us safe and healthy,
              and benefits our social life.
            </p>
            <strong style={{ marginBlockEnd: 0, color: "#294581" }}>
              "Strive to build things that make a difference!"
            </strong>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default About;
