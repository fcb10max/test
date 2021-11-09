import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faBolt,
  faDesktop,
  faMousePointer,
  faSignal,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import WhyChooseComponent from "./DevicesComponents/WhyChooseComponent";
import ImgTextBlock from "./HomeComponents/ImgTextBlock";
import DevicesNavbar from "./Navbars/DevicesNavbar";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icon = styled.h1`
  text-align: center;
`;
const Block = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  display: flex;
  justify-content: center;
  max-width: 80vw;
`;
const StreamBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;
const Desc = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
  color: gray;
  max-width: 80vw;
  min-width: 300px;
`;
const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ItemTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 20px 0;
  }

  p {
    color: gray;
    width: 90%;
    text-align: center;
  }
`;
const Img = styled.div`
  height: 150px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RegisterButton = styled.div`
  width: fit-content;
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
const MiddleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MiddleIcon = styled.div`
  font-size: 30px;
`;
const MiddleTitle = styled.h1`
  margin: 20px 0;
  text-align: center;
`;
const MiddleBlock = styled.div`
  max-width: 70vw;
  width: 100%;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-row-gap: 20px;
  margin: 40px 0;

  @media (max-width: 1000px) {
    grid-template: 1fr / auto;
  }
`;
const Item = styled.div`
  display: flex;
  min-width: 300px;

  i {
    display: flex;
    justify-content: center;
    font-size: 24px;
    width: 40px;
    margin-right: 10px;
  }
`;
const BlockText = styled.div``;
const BlockTitle = styled.h3`
  font-size: 20px;
`;
const BlockDesc = styled.div`
  font-size: 16px;
  width: 80%;
`;

const Sports = () => {
  window.scrollTo(0, 0);

  const gridObjs = [
    {
      icon: <FontAwesomeIcon icon={faTwitter} />,
      title: "Access the entire web",
      desc: "Get around content blocks and geo-restrictions to see the entire web.",
    },
    {
      icon: <FontAwesomeIcon icon={faDesktop} />,
      title: "Stream Netflix",
      desc: "Switch locations quickly using the UltraVPN browser add-on.",
    },
    {
      icon: <FontAwesomeIcon icon={faTachometerAlt} />,
      title: "Browse Fast",
      desc: "Enjoy great speeds from 55 global servers in our network.",
    },
    {
      icon: <FontAwesomeIcon icon={faSignal} />,
      title: "No Caps - Ever",
      desc: "We won’t cap or throttle your connection.",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <DevicesNavbar
          title="Never Miss a Game With UltraVPN"
          desc="A VPN ensures access to all of the games you can't miss."
          list={[
            "View video streams from global channels",
            "Enjoy video on desktop and mobile",
            "Watch the game live, without buffering",
            "Unlimited access ensures you won’t miss the final score",
          ]}
          bg="https://ultravpn.com/assets/hero-sports.png"
          img="https://ultravpn.com/assets/stream-sports-devices.png"
          btmIcons={[
            "https://ultravpn.com/assets/ultra-vpn.png",
            "https://ultravpn.com/assets/ultra-vpn-nfl.png",
            "https://ultravpn.com/assets/ultra-vpn-premeier-league.png",
            "https://ultravpn.com/assets/ultra-vpn-champions-league.png",
            "https://ultravpn.com/assets/ultra-vpn-olympics.png",
            "https://ultravpn.com/assets/ultra-vpn-mlb.png",
          ]}
        />
        <Block>
          <Icon>
            <FontAwesomeIcon icon={faDesktop} />
          </Icon>
          <Title>Viewing Live, Global Events is Simple with a VPN</Title>
          <ImgTextBlock
            intro="GET SET UP FOR THE GAME"
            title="One Click Connects You to 100+ Global Servers"
            desc="Sports events are often restricted by geographic blocks. Using UltraVPN, you can break through these blocks and view the stream as if you were a local. As a plus, your connection will also be private and secure, thanks to our military-grade encryption."
            image="https://ultravpn.com/assets/ultra-vpn-sport-stream.png"
          />
        </Block>
        <StreamBlock>
          <Icon>
            <FontAwesomeIcon icon={faBolt} />
          </Icon>
          <Title>Access Your Sports Stream Live</Title>
          <Desc>Watch your favorite sports live from any device.</Desc>
          <Items>
            <ItemTop>
              <Img>
                <img
                  src="https://ultravpn.com/assets/ultra-vpn-step-image-signup.png"
                  alt=""
                />
              </Img>
              <h1>Sign Up</h1>
              <p>Get a VPN account with UltraVPN</p>
            </ItemTop>
            <ItemTop>
              <Img>
                <img
                  src="https://ultravpn.com/assets/ultra-vpn-step-image-install.png"
                  alt=""
                />
              </Img>
              <h1>Install</h1>
              <p>Grab the app for the device you want to use</p>
            </ItemTop>
            <ItemTop>
              <Img>
                <img
                  src="https://ultravpn.com/assets/ultra-vpn-step-image-connect.png"
                  alt=""
                />
              </Img>
              <h1>Connect</h1>
              <p>Stream the game using our ULTRAFLIX server</p>
            </ItemTop>
          </Items>
          <Link to="/payment" style={{ textDecoration: "none" }}>
            <RegisterButton>
              <span>Register Now</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </RegisterButton>
          </Link>
        </StreamBlock>
        <MiddleWrapper>
          <MiddleIcon>
            <FontAwesomeIcon icon={faMousePointer} />
          </MiddleIcon>
          <MiddleTitle>No Limits, No Caps, No Blocks</MiddleTitle>
          <MiddleBlock>
            {gridObjs.map((item) => (
              <Item>
                <i>{item.icon}</i>
                <BlockText>
                  <BlockTitle>{item.title}</BlockTitle>
                  <BlockDesc>{item.desc}</BlockDesc>
                </BlockText>
              </Item>
            ))}
          </MiddleBlock>
        </MiddleWrapper>
        <WhyChooseComponent />
      </Wrapper>
    </Container>
  );
};

export default Sports;
