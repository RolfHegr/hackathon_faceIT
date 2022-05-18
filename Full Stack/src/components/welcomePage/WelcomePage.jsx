import React from "react";
import "./welcomePage.css";
import face from "./images/face.jpg";
import { Container } from "react-bootstrap";

const WelcomePage = () => {
  return (
      <Container>
    <div className="pageWrapper">
      <div className="welcomeWrapper">
        <h1>FaceIT</h1>
        <h3>We kickstart your new healthier lifestyle</h3>
        <button>Come and see</button>
      </div>
      <div className="sideInfo">
        <div className="welcomeFace">
          <img src={face} width="300" />
        </div>
        <div className="motivation">
          <p>Start a healthier life TODAY!</p>
          <p>Burn your bad habits before they burn you</p>
          <p>Take control NOW!</p>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default WelcomePage;
