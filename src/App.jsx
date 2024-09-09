import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from "./Screens/Signup";
import NotFound from "./Screens/Notfound";




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
