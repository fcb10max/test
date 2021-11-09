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
import devices from "./components/DevicesComponents/devices";
import BigMenu from "./components/Navbars/NavbarComponents/BigMenu";
import TopNavbar from "./components/Navbars/NavbarComponents/TopNavbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Streams from "./components/Stream";
import DownloadNow from "./components/DownloadNow";
import Support from "./components/Support";
import Categories from "./components/SupportComponents/Categories";
import Payment from "./components/Payment";

function App() {
  const [device, setDevice] = useState(devices.windows);
  const [menuActive, setMenuActive] = useState(false);
  const [dispFixed, setDispFixed] = useState(false);
  const [mainActive, setMainActive] = useState(true);
  const [catalog, setCatalog] = useState("");

  const Container = styled.div`
    position: ${(props) => (props.fixed ? "fixed" : "static")};
  `;

  const urls = ["/login", "/support", "/categories", "/payment"];

  return (
    <Container fixed={dispFixed}>
      {mainActive && (
        <BrowserRouter>
          {!urls.includes(window.location.pathname) && (
            <>
              <TopNavbar
                setMenuActive={setMenuActive}
                setDispFixed={setDispFixed}
              />
              <BigMenu
                active={menuActive}
                setMenuActive={setMenuActive}
                setDispFixed={setDispFixed}
              />
            </>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/location" element={<Locations />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/devices" element={<Devices device={device} />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/top5uses" element={<UsesComponent />} />
            <Route path="/sport" element={<Sports />} />
            <Route path="/stream" element={<Streams />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/downloadNow" element={<DownloadNow />} />
            <Route
              path="/support"
              element={
                <Support
                  setMainActive={setMainActive}
                  setCatalog={setCatalog}
                />
              }
            />
            <Route path="/categories" element={<Categories data={catalog} />} />
          </Routes>
          {!urls.includes(window.location.pathname) && (
            <Footer
              devices={devices}
              setDevice={setDevice}
              setMainActive={setMainActive}
            />
          )}
        </BrowserRouter>
      )}
    </Container>
  );
}

export default App;
