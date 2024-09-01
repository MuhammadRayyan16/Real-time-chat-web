// import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
