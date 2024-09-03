// import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Signup from './Screens/Signup';
import Login from './Screens/Login';











function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
