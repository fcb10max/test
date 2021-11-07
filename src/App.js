import Articles from "./components/Articles";
import Devices from "./components/Devices";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Login from "./components/Login";
import Pricing from "./components/Pricing";
import Sports from "./components/Sports";
import UsesComponent from "./components/UsesComponent";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import devices from "./components/DevicesComponents/devices";
import { useState } from "react";
import styled from "styled-components";

function App() {

  const [device, setDevice] = useState(devices.windows);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/location" element={<Locations />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/devices" element={<Devices device={device} />}/>
        <Route path="/articles" element={<Articles />}/>
        <Route path="/top5uses" element={<UsesComponent />}/>
        <Route path="/sport" element={<Sports />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      <Footer devices={devices} setDevice={setDevice}/>
    </BrowserRouter>
  );
}

export default App;
