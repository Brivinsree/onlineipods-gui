import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Smartpods from './pages/onlineipod/index';
import CalculateIpods from './pages/onlineipod/calculateipods';
import GenerateParantheses from './pages/generatebrackets';



import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Smartpods />}></Route>
          <Route path="/onlineipods" element={<CalculateIpods />}></Route>
          <Route path="/parantheses" element={<GenerateParantheses />}></Route>



        </Routes>
      </Router>

    </div>
  );
}

export default App;
