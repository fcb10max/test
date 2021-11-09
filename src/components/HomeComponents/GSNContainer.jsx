import {
  faArrowRight,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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

  h1 {
    margin: 20px 0;
    text-align: center;

    @media (max-width: 600px) {
      max-width: 300px;
    }
  }

  p {
    color: gray;
    font-size: 16px;
    text-align: center;

    @media (max-width: 800px) {
      max-width: 300px;
    }
  }

  span {
    img {
      width: 100%;
    }
  }
  i {
    font-size: 30px;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 30px;
  text-align: center;

  @media (max-width: 600px) {
    max-width: 300px;
  }
`;
const Desc = styled.div`
  margin: 20px 0;
  font-size: 18px;
  color: gray;
  text-align: center;

  @media (max-width: 800px) {
    max-width: 300px;
  }
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

const GSNContainer = () => {
  return (
    <Container>
      <Wrapper>
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
        <BottomContainer>
          <Title>Get Started Now</Title>
          <Desc>
            Get started now with the UltraVPN app, and secure your connection
            with a click.
          </Desc>
          <Link to="/payment" style={{textDecoration:"none"}}>
          <RegisterButton>
            <span>Register Now</span>
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </RegisterButton>
          </Link>
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};

export default GSNContainer;
