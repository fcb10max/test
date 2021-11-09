import {
  faAndroid,
  faApple,
  faAppStoreIos,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faBolt,
  faCheckCircle,
  faDesktop,
  faMousePointer,
  faShieldAlt,
  faSignal,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import WhyInstall from "./DevicesComponents/WhyInstall";
import MainBlock from "./FeaturesComponents/MainBlock";
import NavbarNoImg from "./Navbars/NavbarNoImg";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;
const Title = styled.h1`
  text-align: center;
  max-width: 80vw;
`;
const Desc = styled.div`
  width: 50%;
  text-align: center;
  margin: 20px 0;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 80vw;
  }
`;
const Button = styled.div`
  padding: 10px 24px;
  border-radius: 32px;
  background-color: #ff8600;
  color: black;
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.3s linear;
  margin: 40px 0;

  span:first-child {
    margin-right: 5px;
  }

  :hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
const BottomText = styled.div`
  color: gray;
  display: flex;
  font-size: 24px;

  span {
    margin-right: 20px;

    i {
      margin-right: 10px;
    }
  }
`;

const DownloadNow = () => {
  window.scrollTo(0, 0);

  const topBlockArr = [
    {
      icon: <FontAwesomeIcon icon={faMousePointer} />,
      title: "Connect in Seconds",
      desc: "Connect quickly to your favorite location",
    },
    {
      icon: <FontAwesomeIcon icon={faDesktop} />,
      title: "Access Online Media",
      desc: "Watch US Netflix from anywhere in the world with our browser extension",
    },
    {
      icon: <FontAwesomeIcon icon={faShieldAlt} />,
      title: "256-Bit Strong Encryption",
      desc: "We use AES-256 cipher with SHA512 AUTH and a 4096-bit RSA key",
    },
    {
      icon: <FontAwesomeIcon icon={faSignal} />,
      title: "No Bandwidth Caps",
      desc: "Stream your favourite shows from anywhere with no data limits",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <NavbarNoImg
          title="Free VPN, Private and Unrestricted"
          desc="One VPN lets you access the whole web, privately and securely."
          img="https://ultravpn.com/assets/hero-wired-dots.png"
        />
        <WhyInstall
          data={topBlockArr}
          title={"All the Benefits of a Premium VPN"}
          icon={<FontAwesomeIcon icon={faCheckCircle} />}
        />
        <MainBlock
          mainIcon={<FontAwesomeIcon icon={faBolt} />}
          mainTitle="Why Choose to Browse the Web with UltraVPN?"
          mainDesc="UltraVPN protects you from snooping and malicious attacks."
          mainImg="https://ultravpn.com/assets/ultra-vpn-apple-devices.png"
          contentObj={[
            {
              icon: <FontAwesomeIcon icon={faTachometerAlt} />,
              title: "High Speed Connection",
              desc: "No more buffering or waiting with our ultra fast VPN network",
            },
            {
              icon: <FontAwesomeIcon icon={faShieldAlt} />,
              title: "Complete Privacy & Protection",
              desc: "Military-grade encryption shields you from governments and hackers",
            },
            {
              icon: <FontAwesomeIcon icon={faDesktop} />,
              title: "Unrestricted Browsing",
              desc: "Unlock geo-restricted websites and content from anywhere in the world",
            },
          ]}
        />
        <BottomBlock>
          <Title>One VPN, All Your Devices</Title>
          <Desc>
            Sign up with UltraVPN today for instant, unrestricted access. It's
            the easiest way to secure your browsing, enhance your privacy, and
            unlock the parts of the web you've been missing.
          </Desc>
          <Link to="/payment" style={{ textDecoration: "none" }}>
            <Button>
              <span>Register Now</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Button>
          </Link>
          <BottomText>
            <span>Available for</span>
            <span>
              <i>
                <FontAwesomeIcon icon={faWindows} />
              </i>
              <i>
                <FontAwesomeIcon icon={faAppStoreIos} />
              </i>
              <i>
                <FontAwesomeIcon icon={faAndroid} />
              </i>
              <i>
                <FontAwesomeIcon icon={faApple} />
              </i>
            </span>
          </BottomText>
        </BottomBlock>
      </Wrapper>
    </Container>
  );
};

export default DownloadNow;
