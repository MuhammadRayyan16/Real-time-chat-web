import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from "./Screens/Signup";
// import Sidebar from './Screens/Sidebar';
// import Chatwindow from "./Screens/Chatwindow";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Chatwindow" element={<Chatwindow />} /> */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
