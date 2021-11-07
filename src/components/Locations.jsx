import {
  faAndroid,
  faApple,
  faAppStoreIos,
  faTwitter,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faBolt,
  faDesktop,
  faMapMarkerAlt,
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
  margin: 60px 0;
`;
const GSNContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  i {
    font-size: 30px;
  }

  h1 {
    margin: 20px 0;
    max-width: 80vw;
  }

  p {
    max-width: 80vw;
  }

  span {
    img {
      width: 100%;
    }
  }
`;
const Countries = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 0;
  flex-wrap: wrap;
`;
const CountryBlock = styled.div`
  margin: 30px;
  text-align: center;
  flex-basis: 110px;
`;
const Num = styled.h1``;
const Name = styled.div`
  margin: 10px 0;
  height: 50px;
  width: 110px;
`;
const Flags = styled.div`
  display: flex;
  justify-content: center;
`;
const Flag = styled.div`
  :nth-child(2) {
    margin: 0 15px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  max-width: 80vw;
  text-align: center;
  `;
const Desc = styled.div`
  margin: 20px 0;
  max-width: 70vw;
  text-align: center;
`;
const Button = styled.div`
  padding: 10px 24px;
  border-radius: 32px;
  background-color: #ff8600;
  color: black;
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.3s linear;
  margin-top: 40px;

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
  margin-top: 20px;

  span {
    margin-right: 20px;

    i {
      margin-right: 10px;
    }
  }
`;

const Locations = () => {
  const locationsArr = [
    {
      num: "34",
      country: "North America",
      flags: [
        "https://ultravpn.com/assets/us.png",
        "https://ultravpn.com/assets/ca.png",
        "https://ultravpn.com/assets/mx.png",
      ],
    },
    {
      num: "43",
      country: "Europe",
      flags: [
        "https://ultravpn.com/assets/gb.png",
        "https://ultravpn.com/assets/de.png",
        "https://ultravpn.com/assets/fr.png",
      ],
    },
    {
      num: "26",
      country: "Asia",
      flags: [
        "https://ultravpn.com/assets/in.png",
        "https://ultravpn.com/assets/hk.png",
        "https://ultravpn.com/assets/ph.png",
      ],
    },
    {
      num: "3",
      country: "Africa",
      flags: [
        "https://ultravpn.com/assets/za.png",
        "https://ultravpn.com/assets/tn.png",
        "https://ultravpn.com/assets/globe.png",
      ],
    },
    {
      num: "8",
      country: "South America",
      flags: [
        "https://ultravpn.com/assets/mx.png",
        "https://ultravpn.com/assets/co.png",
        "https://ultravpn.com/assets/br.png",
      ],
    },
    {
      num: "2",
      country: "Oceania",
      flags: [
        "https://ultravpn.com/assets/au.png",
        "https://ultravpn.com/assets/globe.png",
        "https://ultravpn.com/assets/nz.png",
      ],
    },
  ];

  const contentObj = [
    {
      title: "The Content You Want, When You Want It",
      desc: "Stream video from any region at the click of a button.",
      icon: <FontAwesomeIcon icon={faTachometerAlt} />,
    },
    {
      title: "Watch Your Favorite Team",
      desc: "Access live streaming sports events from global broadcasters.",
      icon: <FontAwesomeIcon icon={faDesktop} />,
    },
    {
      title: "Connect With Friends Online",
      desc: "Enjoy all of your favorite social networks wherever you are.",
      icon: <FontAwesomeIcon icon={faTwitter} />,
    },
  ];

  return (
    <Container>
      <NavbarNoImg
        img={"https://ultravpn.com/assets/hero-map-points.png"}
        title={"100+ Superfast Servers"}
        desc={"UltraVPN opens the door to a global network."}
      />
      <Wrapper>
        <GSNContainer>
          <i>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </i>
          <h1>Global Server Network</h1>
          <p>
            We give you the choice of more than 100 server locations every time
            you connect.
          </p>
          <span>
            <img
              src="https://ultravpn.com/assets/global-network-map.png"
              alt=""
            />
          </span>
        </GSNContainer>
        <Countries>
          {locationsArr.map((item) => (
            <CountryBlock>
              <Num>{item.num}</Num>
              <Name>{item.country}</Name>
              <Flags>
                {item.flags.map((item) => (
                  <Flag>
                    <img src={item} alt="" />
                  </Flag>
                ))}
              </Flags>
            </CountryBlock>
          ))}
        </Countries>
        <MainBlock
          mainIcon={<FontAwesomeIcon icon={faBolt} />}
          mainTitle={"Enjoy our Superior Global Network"}
          mainDesc={"Once you try UltraVPN, we’re confident you won’t go back."}
          mainImg={"https://ultravpn.com/assets/ultra-vpn-apple-devices.png"}
          contentObj={contentObj}
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

export default Locations;
