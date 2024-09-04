import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from "./Screens/Signup";

function App() {
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
