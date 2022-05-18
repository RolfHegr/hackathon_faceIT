import { useState } from "react";
import { Container } from "react-bootstrap";
import "./resultsPage.css";
import face from "../welcomePage/images/face.jpg";
import react from "react";

const ResultsPage = () => {
  const [showMore, setShowMore] = useState(true);

  return (
    <Container>
      <div className="resultHeader">
        <h1>Welcome to the future you</h1>
      </div>
      <div className="resultCard">
        <div className="resultImage">
          <img src={face} width="500" height="500" />
          <button
            className="resultBtn"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "Good You" : "Future Me"}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ResultsPage;
