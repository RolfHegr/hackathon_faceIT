import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import "./resultsPage.css";
import face from "../welcomePage/images/face.jpg";
import test from "../welcomePage/images/test.png";
import rolf35 from "../welcomePage/images/rolf35.png";
import rolf50 from "../welcomePage/images/rolf50.png";
import react from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { useNavigate } from "react-router-dom";
import AdvieAlert from "../AdvieAlert";
import { useStepperContext } from "../../contexts/StepperContext";

const ResultsPage = () => {
  const [showMore, setShowMore] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userData")) || "null")
  const { userData } = useStepperContext()
  console.log(userData)
  const navigate = useNavigate();
  //   const [goodYou, setGoodYou] = useState(false);
  //   const [futureYou, setFutureYou] = useState(false);

  return (
    <Container>
      <div className="resultHeader">
        <h1>Welcome to the future you</h1>
      </div>
      <div className="cardBtnCtl">
      <div className="sliderCard">
        {/* <div className="sliderImage"> */}
        <ReactCompareSlider
          boundsPadding={0}
          itemOne={<ReactCompareSliderImage alt="Image one" src={rolf35} />}
          itemTwo={
            <ReactCompareSliderImage
              alt="Image two"
              src={rolf50}
              style={{ transform: "scale(1)" }}
            />
          }
          position={50}
          // style={{
          //   height: "30%",
          //   width: "55%",
          // }}
        />
        {/* </div> */}
        <div className="ageControl">
        <div className="headerAge">
        <span style={{color: "green"}}>Healthy Life Trajectory:</span>
          <span className="goodAgeTest" style={{fontSize: "2rem"}}>Age: {+user.age + 10}</span>
          </div>
          <div className="headerAge">
          <span style={{color: "red"}}>Current Habits Trajectory:</span>
          <span className="badAgeTest" style={{fontSize: "2rem"}}>Age: {+user.age + 10}</span>
          </div>
        </div>
      </div>
      
        <button className="reccomendBtn" onClick={() => {setShowMore(!showMore)}}>SHOW ME HOW</button>
        </div>
        {!showMore && (<AdvieAlert/> )}
        
    </Container>
  );
};

export default ResultsPage;

{
  /* <div className="resultCard">
  <div className="resultImage">
    {showMore ? (
      <img src={face} width="500" height="500" />
    ) : (
      <img src={test} width="300" height="300" />
    )}
    <button
      className="resultBtn"
      onClick={() => {
        setShowMore(!showMore);
      }}
    >
      {showMore ? "Good You" : "Future Me"}
    </button>
  </div>
</div> */
}
