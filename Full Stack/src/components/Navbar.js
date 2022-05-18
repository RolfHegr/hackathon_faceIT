import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import "../css/Navbar.css";
import geoface from "../components/welcomePage/images/geoface.png"

function HomeNavbar() {
  return (
    <Container>
      <Navbar
        className="m-0"
        bg="light"
        expand="lg"
        style={{ marginTop: "10px", margin: "0" }}
      >
        <Container className="c-nav">
          <div className="test">
          <img src={geoface} width="45"/>
          <Navbar.Brand
            style={{
              color: "black",
              fontSize: "2rem",
              fontWeight: "bold",
              margin: "0",
            }}
          >
            FaceIT
          </Navbar.Brand>
          </div>

          <Button className="contact-btn shadow-xl" variant="secondary">Secondary</Button>
        </Container>
      </Navbar>
    </Container>
  );
}

export default HomeNavbar;
