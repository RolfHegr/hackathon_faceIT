import React from "react";
import "./welcomePage.css";
import face from "./images/face.jpg";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Form from "../Form";
import faceage from "./images/faceage.mp4";

const WelcomePage = () => {
    const navigate = useNavigate()

    const userForm = () => {
        navigate("/form")
    } 
  return (
      <Container>
    <div className="pageWrapper">
      <div className="welcomeWrapper">
        <h1>FaceIT</h1>
        <h3>We kickstart your new healthier lifestyle</h3>
        <button onClick={userForm} className="welcomeBtn">Come and see</button>
      </div>
        <div className="welcomeFace">
          <video className="face" muted loop autoPlay={true}>
            <source src={faceage} type="video/mp4" />
          </video>
          {/* <img src={face}/> */}
        <div className="backgroundStyle"></div>
        </div>
    </div>
    </Container>
  );
};

export default WelcomePage;

      // <div className="sideInfo">
      //   <div className="motivation">
      //     <span>Start a healthier life TODAY!</span>
      //     <p>Good habits can change your life</p>
      //     <span>Burn your bad habits before they burn you</span>
      //     <span>Take control now, before it's too late</span>
      //   </div>
      // </div>