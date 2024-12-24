import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Smartpods from './pages/onlineipod/index';
import CalculateIpods from './pages/onlineipod/calculateipods';


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Smartpods />}></Route>
          <Route path="/onlineipods" element={<CalculateIpods />}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
