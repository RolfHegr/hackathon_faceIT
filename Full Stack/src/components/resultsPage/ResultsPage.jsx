import { useState } from "react";
import { Container } from "react-bootstrap";
import "./resultsPage.css";
import face from "../welcomePage/images/face.jpg";
import test from "../welcomePage/images/test.png";
import stevenOld from "../welcomePage/images/stevenOld.png"
import steven60 from "../welcomePage/images/steven60.png"
import react from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const ResultsPage = () => {
  const [showMore, setShowMore] = useState(true);
  //   const [goodYou, setGoodYou] = useState(false);
  //   const [futureYou, setFutureYou] = useState(false);

  return (
    <Container>
      <div className="resultHeader">
        <h1>Welcome to the future you</h1>
      </div>
      <div className="sliderCard">
        <div className="sliderImage">
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
            style={{
              height: "50%",
              width: "100%",
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default ResultsPage;

{/* <div className="resultCard">
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
</div> */}