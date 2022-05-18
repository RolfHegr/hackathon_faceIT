import './index.css'
import Form from "./components/Form";
import WelcomePage from "./components/welcomePage/WelcomePage";
import { Route, Routes } from 'react-router-dom';
import ResultsPage from './components/resultsPage/ResultsPage';
import HomeNavbar from './components/Navbar';

function App() {
  return (
    <>
      <HomeNavbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form/result" element={<ResultsPage />} />

      </Routes>
    </>
  )
}

export default App;
