import {
  faBolt,
  faDesktop,
  faMousePointer,
  faShieldAlt,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const WhyInstallBlock = styled.div``;
const Icon = styled.h1``;
const Title = styled.h1``;
const Block = styled.div`
  width: 100%;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  margin: 40px auto;

  @media (max-width: 800px) {
    grid-template: 1fr /auto;
  }
`;
const WhyInstallItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;

  @media (max-width: 800px) {
    width: 80vw;
  }
`;
const BlockIcon = styled.h2`
  margin-right: 15px;
  display: flex;
  height: 50px;

  @media (max-width: 800px) {
    margin-right: 40px;
  }
`;
const BlockText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 75%;
`;
const BlockTitle = styled.h2`
  margin-bottom: 10px;
`;
const BlockDesc = styled.div`
  width: 75%;
  color: gray;
`;

const WhyInstall = ({ data="", title="", icon="" }) => {
  const whyInstallItemsArr = [
    {
      icon: <FontAwesomeIcon icon={faMousePointer} />,
      title: "VPN Without the Fuss",
      desc: "UltraVPN makes it easy and quick to get connected.",
    },
    {
      icon: <FontAwesomeIcon icon={faDesktop} />,
      title: "Quick Video Geo-Settings",
      desc: "Install the add-on for your browser to change the Netflix site you use.",
    },
    {
      icon: <FontAwesomeIcon icon={faShieldAlt} />,
      title: "Military-Grade Encryption",
      desc: "Military-grade security keeps your activity from prying eyes while you’re connected.",
    },
    {
      icon: <FontAwesomeIcon icon={faSignal} />,
      title: "Unlimited Data",
      desc: "Unlike competitors, we won’t cap your browsing.",
    },
  ];

  const arr = data ? data : whyInstallItemsArr;

  return (
    <Container>
      <Wrapper>
        <WhyInstallBlock>
          <Icon>
            {icon ? icon : <FontAwesomeIcon icon={faBolt} />}
          </Icon>
          <Title>{title ? title : "Why Install UltraVPN?"}</Title>
          <Block>
            {arr.map((item) => (
              <WhyInstallItem>
                <BlockIcon>{item.icon}</BlockIcon>
                <BlockText>
                  <BlockTitle>{item.title}</BlockTitle>
                  <BlockDesc>{item.desc}</BlockDesc>
                </BlockText>
              </WhyInstallItem>
            ))}
          </Block>
        </WhyInstallBlock>
      </Wrapper>
    </Container>
  );
};

export default WhyInstall;
