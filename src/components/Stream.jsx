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
  width: 300px;
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
  
  @media (max-width:1000px) {
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

const Stream = () => {
  window.scrollTo(0, 0);

  const gridObjs = [
    {
      icon: <FontAwesomeIcon icon={faTwitter} />,
      title: "Access Social Networks",
      desc: "See banned websites and make sure you can use social networks on holiday.",
    },
    {
      icon: <FontAwesomeIcon icon={faDesktop} />,
      title: "Stream Live Events and Sports",
      desc: "Watch the hottest games and awards ceremonies from overseas.",
    },
    {
      icon: <FontAwesomeIcon icon={faTachometerAlt} />,
      title: "Fast and Reliable",
      desc: "We pride ourselves on the speed of our connection.",
    },
    {
      icon: <FontAwesomeIcon icon={faSignal} />,
      title: "Unlimited Access",
      desc: ".One VPN account gives you unlimited access without time or data caps.",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <DevicesNavbar
          title="Watch Live Events Anywhere With UltraVPN"
          desc="A VPN ensures access to all of the live streams you can't miss."
          list={[
            "View video streams from global channels",
            "Enjoy video on desktop and mobile",
            "Watch live without buffering",
            "Unlimited access ensures you won’t miss the end"
          ]}
          bg="https://ultravpn.com/assets/hero-events.png"
          img="https://ultravpn.com/assets/stream-events-devices.png"
          btmHide={true}
        />
        <Block>
          <Icon>
            <FontAwesomeIcon icon={faDesktop} />
          </Icon>
          <Title>Viewing Live, Global Events is Simple with a VPN</Title>
          <ImgTextBlock
            intro="GET SET UP"
            title="One Click Connects You to Our Streaming Server"
            desc="No need to Google for ways to watch live events online. Use UltraVPN to watch overseas streams via speedy servers. Your VPN can unlock event streams on multiple devices, including your connected TV, your smartphone, or your home computer."
            image="https://ultravpn.com/assets/ultra-vpn-events-stream.png"
          />
        </Block>
        <StreamBlock>
          <Icon>
            <FontAwesomeIcon icon={faBolt} />
          </Icon>
          <Title>How to Stream Live Events with UltraVPN</Title>
          <Desc>Watch live awards ceremonies or sports tournaments from any device.</Desc>
          <Items>
            <ItemTop>
              <Img>
                <img
                  src="https://ultravpn.com/assets/ultra-vpn-step-image-signup.png"
                  alt=""
                />
              </Img>
              <h1>Sign Up</h1>
              <p>Join and activate your UltraVPN account</p>
            </ItemTop>
            <ItemTop>
              <Img>
                <img
                  src="https://ultravpn.com/assets/ultra-vpn-step-image-install.png"
                  alt=""
                />
              </Img>
              <h1>Install</h1>
              <p>Get the right app for your device - we’ve got them all covered</p>
            </ItemTop>
            <ItemTop>
              <Img>
                <img
                  src="https://ultravpn.com/assets/ultra-vpn-step-image-connect.png"
                  alt=""
                />
              </Img>
              <h1>Connect</h1>
              <p>Access all the events you’ve been waiting for via our ULTRAFLIX server</p>
            </ItemTop>
          </Items>
          <RegisterButton>
            <span>Register Now</span>
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </RegisterButton>
        </StreamBlock>
        <MiddleWrapper>
          <MiddleIcon>
            <FontAwesomeIcon icon={faMousePointer} />
          </MiddleIcon>
          <MiddleTitle>Access Any Site, Anywhere, at Any Time</MiddleTitle>
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

export default Stream;
