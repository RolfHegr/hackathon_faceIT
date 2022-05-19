import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import "./resultsPage.css";
import face from "../welcomePage/images/face.jpg";
import test from "../welcomePage/images/test.png";
import stevenOld from "../welcomePage/images/stevenOld.png";
import steven60 from "../welcomePage/images/steven60.png";
import react from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { useNavigate } from "react-router-dom";
import AdvieAlert from "../AdvieAlert";

const ResultsPage = () => {
  const [showMore, setShowMore] = useState(true);
  const navigate = useNavigate();
  //   const [goodYou, setGoodYou] = useState(false);
  //   const [futureYou, setFutureYou] = useState(false);

  return (
    <Container>
      <div className="resultHeader">
        <h1>Welcome to the future you</h1>
      </div>
      <div className="sliderCard">
        {/* <div className="sliderImage"> */}
        <ReactCompareSlider
          boundsPadding={0}
          itemOne={<ReactCompareSliderImage alt="Image one" src={stevenOld} />}
          itemTwo={
            <ReactCompareSliderImage
              alt="Image two"
              src={steven60}
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
          <span className="goodAgeTest">45</span>
          <span className="badAgeTest">60</span>
        </div>
      </div>
      <div className="resultBtn">
        <button onClick={() => navigate("/reccomend")}>Reccomendatins</button>
      </div>
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
