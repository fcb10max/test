import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  display: flex;
  justify-content: center;
  color: white;
  background-color: black;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  top: 60px;
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px 20px 104px;
`;
const BigText = styled.div`
  margin-bottom: 16px;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;
const SmallText = styled.div`
  margin-bottom: 32px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  width: 75%;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const NavbarNoImg = ({ img, title, desc }) => {
  return (
    <Container img={img}>
      <Wrapper>
        <TextContainer>
          <BigText>{title}</BigText>
          <SmallText>{desc}</SmallText>
          <BtnContainer>
            <Link to="/payment" style={{textDecoration:"none"}}>
            <RegisterButton>
              <span>Register Now</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </RegisterButton>
            </Link>
          </BtnContainer>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default NavbarNoImg;
