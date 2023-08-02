import './App.css';
import Accueil from './pages/HomePage';
import Biskit from './pages/BiskitPage';
import Picolo from './pages/PicoloPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/biskit" element={<Biskit/>}/>
        <Route path="/picolo" element={<Picolo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
