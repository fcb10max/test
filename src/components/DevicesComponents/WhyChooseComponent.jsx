import {
  faArrowRight,
  faCheck,
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
const WhyChoose = styled.div``;
const Title = styled.h1`
  max-width: 80vw;
`;
const WhyChooseWrapper = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  grid-gap: 10px 20px;

  @media (max-width: 1000px) {
    grid-template: auto / 1fr;
  }
`;
const WhyChooseItem = styled.div`
  display: flex;
  align-items: center;
`;
const Check = styled.div`
  color: gold;
  margin-right: 15px;
`;
const Text = styled.div`
  font-size: 20px;
  color: gray;
`;
const Button = styled.div`
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

const WhyChooseComponent = () => {


  const whyChooseArr = [
    "Connect in Seconds",
    "No Bandwidth Caps",
    "No Speed Loss",
    "Military-Grade Encryption",
    "100+ Virtual Locations",
    "Secure Firewall",
    "Unblock Social Media",
    "Watch Sporting Events",
    "Access Online Media"
  ];

  return (
    <Container>
      <Wrapper>
        <WhyChoose>
          <Title>Why Choose UltraVPN?</Title>
          <WhyChooseWrapper>
            {whyChooseArr.map((item) => (
            <WhyChooseItem>
              <Check>
                <FontAwesomeIcon icon={faCheck} />
              </Check>
              <Text>{item}</Text>
            </WhyChooseItem>
            ))}
          </WhyChooseWrapper>
        </WhyChoose>
        <Button>
          <span>Register Now</span>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default WhyChooseComponent;
