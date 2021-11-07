import { faAndroid, faApple, faAppStoreIos, faFacebook, faTwitter, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faBolt,
  faDesktop,
  faEyeSlash,
  faFootballBall,
  faLock,
  faMousePointer,
  faShieldVirus,
  faSignal,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import MainBlock from "./FeaturesComponents/MainBlock";
import NavbarNoImg from "./Navbars/NavbarNoImg";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;
const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  max-width: 80vw;
  `;
const Desc = styled.div`
  width: 50%;
  text-align: center;
  margin: 20px 0;

  @media (max-width:600px) {
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

const Features = () => {
  const img = "https://ultravpn.com/assets/hero-wired-globe.png";
  const title = "Speed and Privacy Without Limits";
  const desc = "UltraVPN is a smarter way to browse, download, and stream.";

  const mainBlockTitlesArr = [
    "Rock Solid Connection",
    "Private and Safe",
    "Unlock the Whole Web",
  ];
  const mainBlockDescsArr = [
    "Enjoy content without throttling or caps.",
    "UltraVPN protects you from snooping and malicious attacks.",
    "Spoof your location to access hidden content.",
  ];
  const mainBlockObjArr = {
    0: [
      {
        title: "Connect in Seconds",
        desc: "Reliable video streaming with no bandwidth restrictions.",
        icon: <FontAwesomeIcon icon={faMousePointer} />
      },
      {
        title: "No Bandwidth Caps",
        desc: "A global list of servers to choose from.",
        icon: <FontAwesomeIcon icon={faSignal} />
      },
      {
        title: "Ultra Fast Speeds",
        desc: "Solid connections from every server.",
        icon: <FontAwesomeIcon icon={faTachometerAlt} />
      },
    ],
    1: [
      {
        title: "Military-Grade Encryption",
        desc: "Encryption used by military and financial institutions.",
        icon: <FontAwesomeIcon icon={faShieldVirus} />
      },
      {
        title: "Secure Firewall",
        desc: "UltraVPN ensures no traffic passes outside the VPN.",
        icon: <FontAwesomeIcon icon={faLock} />
      },
      {
        title: "Malware and Phishing Protection",
        desc: "Built-in protection to keep you safe.",
        icon: <FontAwesomeIcon icon={faEyeSlash} />
      },
    ],
    2: [
      {
        title: "Unblock Social Media",
        desc: "Get around government or employer blocks.",
        icon: <FontAwesomeIcon icon={faTwitter} />
      },
      {
        title: "Watch Sporting Events",
        desc: "Access forbidden sites in your location.",
        icon: <FontAwesomeIcon icon={faFootballBall} />
      },
      {
        title: "Access Online Media",
        desc: "Stream content that's normally unavailable in your country.",
        icon: <FontAwesomeIcon icon={faDesktop} />
      },
    ],
  };
  const mainBlockImgs = [
    "https://ultravpn.com/assets/netflix.png",
    "https://ultravpn.com/assets/encryption.png",
    "https://ultravpn.com/assets/social-media.png",
  ];

  return (
    <Container>
      <NavbarNoImg img={img} title={title} desc={desc} />
      <Wrapper>
        <MainBlock
          mainImg={mainBlockImgs[0]}
          mainIcon={<FontAwesomeIcon icon={faBolt} />}
          mainTitle={mainBlockTitlesArr[0]}
          mainDesc={mainBlockDescsArr[0]}
          contentObj={mainBlockObjArr["0"]}
        />
        <MainBlock
          reversed={true}
          mainImg={mainBlockImgs[1]}
          mainIcon={<FontAwesomeIcon icon={faLock} />}
          mainTitle={mainBlockTitlesArr[1]}
          mainDesc={mainBlockDescsArr[1]}
          contentObj={mainBlockObjArr["1"]}
        />
        <MainBlock
          mainImg={mainBlockImgs[2]}
          mainIcon={<FontAwesomeIcon icon={faFacebook} />}
          mainTitle={mainBlockTitlesArr[2]}
          mainDesc={mainBlockDescsArr[2]}
          contentObj={mainBlockObjArr["2"]}
        />
        <BottomBlock>
          <Title>One VPN, All Your Devices</Title>
          <Desc>
            Sign up with UltraVPN today for instant, unrestricted access. It's
            the easiest way to secure your browsing, enhance your privacy, and
            unlock the parts of the web you've been missing.
          </Desc>
          <Button>
            <span>Register Now</span>
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Button>
          <BottomText>
            <span>Available for</span>
            <span>
              <i><FontAwesomeIcon icon={faWindows} /></i>
              <i><FontAwesomeIcon icon={faAppStoreIos} /></i>
              <i><FontAwesomeIcon icon={faAndroid} /></i>
              <i><FontAwesomeIcon icon={faApple} /></i>
            </span>
          </BottomText>
        </BottomBlock>
      </Wrapper>
    </Container>
  );
};

export default Features;
