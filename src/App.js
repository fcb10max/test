import Articles from "./components/Articles";
import Devices from "./components/Devices";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Login from "./components/Login";
import Navbar from "./components/Navbars/Navbar";
import NavbarNoImg from "./components/Navbars/NavbarNoImg";
import Pricing from "./components/Pricing";
import Sports from "./components/Sports";
import UsesComponent from "./components/UsesComponent";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/location" element={<Locations />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/devices" element={<Devices />}/>
        <Route path="/articles" element={<Articles />}/>
        <Route path="/top5uses" element={<UsesComponent />}/>
        <Route path="/sport" element={<Sports />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
