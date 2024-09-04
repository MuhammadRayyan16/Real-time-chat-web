import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from "./Screens/Signup";
import { useEffect } from "react"

function App() {
  useEffect(() => {
    window.onpopstate = function (event) {
      history.pushState(null, null, location.href);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
