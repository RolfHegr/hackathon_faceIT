import './index.css'
import Form from "./components/Form";
import WelcomePage from "./components/welcomePage/WelcomePage";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/"  element={<WelcomePage />} />
      <Route path="/form"  element={<Form/>} />
   
    </Routes>
  )
}

export default App;
