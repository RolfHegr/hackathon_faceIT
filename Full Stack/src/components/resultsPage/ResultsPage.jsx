import { Container } from "react-bootstrap";
import "./resultsPage.css";
import face from "../welcomePage/images/face.jpg";

const ResultsPage = () => {
  return (
    <Container>
      <div className="resultHeader">
        <h1>This is You</h1>
      </div>
      <div className="resultCard">
          <div className="resultImage">
              <img src={face} />
          </div>
      </div>

    </Container>
  );
};

export default ResultsPage;
