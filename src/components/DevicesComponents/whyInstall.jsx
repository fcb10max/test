import {
  faBolt,
  faDesktop,
  faMousePointer,
  faShieldAlt,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
const WhyInstall = styled.div``;
const Icon = styled.h1``;
const Title = styled.h1``;
const Block = styled.div`
  width: 100%;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  margin: 40px auto;
`;
const WhyInstallItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;
const BlockIcon = styled.h2`
  margin-right: 15px;
  display: flex;
  height: 50px;
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

const whyInstall = () => {
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

  return (
    <Container>
      <Wrapper>
        <WhyInstall>
          <Icon>
            <FontAwesomeIcon icon={faBolt} />
          </Icon>
          <Title>Why Install UltraVPN?</Title>
          <Block>
            {whyInstallItemsArr.map((item) => (
              <WhyInstallItem>
                <BlockIcon>{item.icon}</BlockIcon>
                <BlockText>
                  <BlockTitle>{item.title}</BlockTitle>
                  <BlockDesc>{item.desc}</BlockDesc>
                </BlockText>
              </WhyInstallItem>
            ))}
          </Block>
        </WhyInstall>
      </Wrapper>
    </Container>
  );
};

export default whyInstall;
