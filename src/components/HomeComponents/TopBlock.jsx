import styled from "styled-components";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faLock } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 40px 0;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;

  @media (max-width: 600px) {
    max-width: 300px;
  }
`;
const Desc = styled.div`
  margin: 20px 0;
  font-size: 18px;
  color: gray;

  @media (max-width: 600px) {
    max-width: 300px;
  }
`;
const Features = styled.div`
  display: flex;
  width: 90%;
  font-size: 24px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Feature = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 20px 0;
    font-size: 22px;
    overflow: hidden;
  }
  p {
    color: gray;
    font-size: 18px;
    max-width: 300px;
    overflow: hidden;
  }
`;

const TopBlock = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <strong>All the Benefits of a Premium VPN</strong>
        </Title>
        <Desc>UltraVPN gives you the privacy and security you deserve.</Desc>
        <Features>
          <Feature>
            <FontAwesomeIcon icon={faBolt} />
            <h2>No Buffering:</h2>
            <p>Our network won’t slow down your internet connection.</p>
          </Feature>
          <Feature>
            <FontAwesomeIcon icon={faLock} />
            <h2>No Snooping:</h2>
            <p>
              Stay safe on public WiFi and keep your browsing activity private.
            </p>
          </Feature>
          <Feature>
            <FontAwesomeIcon icon={faFacebook} />
            <h2>No Boundaries:</h2>
            <p>
              One connection gives you access to a choice of server locations.
            </p>
          </Feature>
        </Features>
      </Wrapper>
    </Container>
  );
};

export default TopBlock;
